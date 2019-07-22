/*
Book Recommendation Request
Client sends a book id and any number of attribute ids and values
Returns the book_id of the recommended book

Body of request:
{
  book_id: int (optional)
  attr:
  [
    {
      id: int
      val: int [1-10]
    }
  ] //up to 3?
}

Body of response:
{
  book_id: int
}

Assume the names of the attributes are correct
Attribute values are integers from 1 to 10 inclusive
We need the book to skip it from matching to itself

This can be used without needing to exclude a book, just send book_id: -1.
*/
module.exports = async (pool, req, res) => {
  console.log('\n\nBook Recommendation')

  //sort attr ids in ascending order
  req.body.attr.sort((a,b) => {
    if(a.id > b.id) return 1;
    else  return -1;
  })

  //ensure proper attribute values
  //invalid ids will simply not match
  //invalid values will mess up distance calculation, so clamp them
  for(attr of req.body.attr) {
    if(attr.value < 1)
      attr.value = 1;
    if(attr.value > 10)
      attr.value = 10;
  }

  if(!req.body.book_id) {
    req.body.book_id = -1;
  }

  //debug
  //console.log('Request Body:\n' + JSON.stringify(req.body));

  const PriorityQueue = require('js-priority-queue');
  let connection,
      result,
      queue = new PriorityQueue({
        comparator: (a, b) => { return a.distance - b.distance; }}),
      i, j, x, book_id, query;
  try {
    connection = await pool.getConnection();
    query = 'SELECT book_id, attribute_id, average_score FROM '
        + 'book_attributes WHERE NOT book_id=' + req.body.book_id
        + ' AND (';
    for(attr of req.body.attr) {
      query += 'attribute_id=' + attr.id + ' OR ';
    }
    query = query.slice(0, -4) + ') ORDER BY book_id, attribute_id;'
    result = await connection.query(query);
    result = result[0];
    //debug
    //console.log(query);
    //console.log(result);
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
      while(result[i].attribute_id > req.body.attr[j].id)
        x += Math.pow(req.body.attr[j++].value, 2);
      x += Math.pow(result[i].average_score - req.body.attr[j].value, 2);
      ++i;
      ++j;
    }
    while(j < req.body.attr.length)
      x += Math.pow(req.body.attr[j++].value, 2);
    x = Math.sqrt(x) / req.body.attr.length;
    //console.log(`${book_id}: ${x}`);
    queue.queue({id: book_id, distance: x});
  }    

  //return top 50 matches, within 5 distance
  result = []
  for(i = 0; i < 50; ++i) {
    x = queue.dequeue();
    if(x.distance > 5)
      break;
    result.push(x);
  }
  res.send(result);
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
      book_id: 1,
      attr: [
        {id: 1, value: 3},
        {id: 13, value: 8},
        {id: 2, value: 4}
      ]
    });

    await new Promise(done => setTimeout(done, 3000));

    //test 2: send a direct match, but exclude that book
    //see what the next closest match is
    test('test 2', {
      book_id: 1101,
      attr: [
        {id: 1, value: 3},
        {id: 13, value: 8},
        {id: 2, value: 4}
      ]
    });

    await new Promise(done => setTimeout(done, 3000));

    //test 3: send bad attribute values, see if they clamp
    //also send no book
    test('test 3', {
      attr: [
        {id: -2, value: 3},
        {id: 1, value: -2},
        {id: 2, value: 20}
      ]
    });

    await new Promise(done => setTimeout(done, 3000));

    //test 4: send 8 attribute values
    test('test 4', {
      attr: [
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
