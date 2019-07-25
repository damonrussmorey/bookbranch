/*
Book Recommendation Request
Client sends a book id and any number of attribute ids and values
Returns the book_id of the recommended book

Body of request:
{
  books:
  [
    int,
    ...
  ]
  attrs:
  [
    {
      id: int
      val: int [1-10]
    }
  ]
}

Body of response:
[
  int,
  ...
]

Assume the ids of the attributes are correct
Attribute values are integers from 1 to 10 inclusive
We need the books to skip it from matching to itself

This can be used without needing to exclude a book, just send book_id: -1.
*/
module.exports = async (pool, books, attrs) => {
  console.log('\nBook Recommendation')

  /*//sort attr ids in ascending order
  attrs.sort((a,b) => {
    if(a.id > b.id) return 1;
    else  return -1;
  })
  DONE IN MAGIC*/

  /*
  //ensure proper attribute values
  //invalid ids will simply not match
  //invalid values will mess up distance calculation, so clamp them
  for(attr of req.body.attrs) {
    if(attr.value < 1)
      attr.value = 1;
    if(attr.value > 10)
      attr.value = 10;
  }
  SILLY NOT REALLY NECESSARY*/

  const PriorityQueue = require('js-priority-queue');
  let connection,
      result,
      queue = new PriorityQueue({
        comparator: (a, b) => { return a.distance - b.distance; }}),
      i, j, x, book_id, query;
  try {
    connection = await pool.getConnection();

    query = 'SELECT book_id, attribute_id, average_score FROM '
        + 'book_attributes WHERE NOT (';
    for(b of req.body.books) {
      query += 'book_id=' + b + ' AND ';
    }
    query = query.slice(0, -5) + ') AND (';
    for(attr of req.body.attrs) {
      query += 'attribute_id=' + attr.id + ' OR ';
    }
    query = query.slice(0, -4) + ') ORDER BY book_id, attribute_id;'

    result = await connection.query(query);
    result = result[0];
    if(!result) {
      throw 'no matches';
    }
    if(!Array.isArray(result)) {
      result = [result];
    }
  } finally {
    if(connection && connection.release)  connection.release();
  }

  //For each book in the database, find the euclidean distance
  //for the 3 attributes given, ignore the other attributes
  //if no attribute score for a book exists, call its value 0

  //match book ids and attribute ids to get average_score,
  //which is an average of all the attributes scores for all
  //the reviews

  i = 0;
  while(i < result.length) {
    book_id = result[i].book_id;
    x = j = 0;
    while(i < result.length && result[i].book_id == book_id) {
      while(result[i].attribute_id > attrs[j].id)
        x += Math.pow(req.body.attrs[j++].value, 2);
      x += Math.pow(result[i].average_score - attrs[j].value, 2);
      ++i;
      ++j;
    }
    while(j < attrs.length)
      x += Math.pow(attrs[j++].value, 2);
    x = Math.sqrt(x) / attrs.length;
    //console.log(`${book_id}: ${x}`);
    queue.queue({id: book_id, distance: x});
  }

  //return top 50 matches, within 5 distance
  result = []
  for(i = 0; i < 50; ++i) {
    x = queue.dequeue();
    if(x.distance > 5)
      break;
    result.push(x.id);
  }

  return result;
}

//Tests
if(process.argv[2] === 'test') {
  const fetch = require('node-fetch');
  async function test(test, body) {
    let hi = await fetch('http://localhost:8765/recommendation', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify(body)
    });
    let res = await hi.json();
    console.log(test + ': ', JSON.stringify(res));
  }

  (async () => {
    //test 1: send a direct match (1101)
    //leave attr ids unsorted to ensure they sort properly
    test('test 1', {
      books: [1],
      attrs: [
        {id: 1, value: 3},
        {id: 13, value: 8},
        {id: 2, value: 4}
      ]
    });

    await new Promise(done => setTimeout(done, 3000));

    //test 2: send a direct match, but exclude that book
    //see what the next closest match is
    test('test 2', {
      books: [1101],
      attrs: [
        {id: 1, value: 3},
        {id: 13, value: 8},
        {id: 2, value: 4}
      ]
    });

    await new Promise(done => setTimeout(done, 3000));

    //test 3: send bad attribute values, see if they clamp
    //also send no books
    test('test 3', {
      attrs: [
        {id: -2, value: 3},
        {id: 1, value: -2},
        {id: 2, value: 20}
      ]
    });

    await new Promise(done => setTimeout(done, 3000));

    //test 4: send 8 attribute values
    test('test 4', {
      attrs: [
        {id: 1, value: 3},
        {id: 2, value: 4},
        {id: 3, value: 5},
        {id: 4, value: 6},
        {id: 5, value: 7},
        {id: 6, value: 8},
        {id: 7, value: 10},
        {id: 8, value: 1},
      ]
    });

    await new Promise(done => setTimeout(done, 3000));

    test('test 5', {
      books: [10,20,30,40,50,60,70],
      attrs: [
        {id: 1, value: 3},
        {id: 2, value: 4},
        {id: 3, value: 5},
        {id: 4, value: 6},
        {id: 5, value: 7},
        {id: 6, value: 8},
        {id: 7, value: 10},
        {id: 8, value: 1},
      ]
    });
  })();
}

