/*
Insert recommandation review
Client support to send one book id and three attribute ids and the new values
Returns comment if function runs successfully.

Body of request:
{
  book_id: int,
  attr:
  [
    {
      id: int
      val: int [1-10]
    }
  ] 
  user_id: int,
  rating_value: int
}

Body of response:
result
{
  success: boolean
}
*/

module.exports = async (pool, { book_id, attr, user_id, rating_value }) => {
  //declare local vars
  let connection, result, data, query, review_id;

  //connect to db and pull all the data necessary
  try {
    console.log("\n\nBook review")

    //get connection with database
    connection = await pool.getConnection();

    //query code insert new book review in table book_reviews
    query = 'INSERT INTO book_reviews(book_id,user_id,rating) '
          + 'VALUES(' + book_id + ',' + user_id
          + ',' + rating_value + ');';
    console.log(query);
    result = await connection.query(query);
    review_id = result[0].insertId;
    //debug
    //console.log(query);
    //console.log("Last insert ID is: " + review_id);

    //query code insert new attributes value with last insert id.
    query = 'INSERT INTO book_review_attributes(book_id, attribute_id, '
          + 'book_review_id, score) VALUES ';
    for(at of attr) {
      query += '(' + book_id + ',' + at.id
             + ',' + review_id + ',' + at.val + '),';
    }
    query = query.slice(0, -1);
    console.log(query)
    result = await connection.query(query);
    //debug
    //console.log(query);
    //console.log(result)

    //query code get the new average score of inserted attributes
    query = 'SELECT attribute_id, AVG(score) AS avg FROM '
          + 'book_review_attributes WHERE book_id = '
          + book_id + ' AND ('
    for(at of attr) {
      query += 'attribute_id = ' + at.id + ' OR '
    }
    query = query.slice(0, -4) + ') GROUP BY attribute_id';
    result = await connection.query(query);
    data = result[0];
    //debug
    //console.log(query);
    //console.log("The bookid, attribute_id and new average score: ")
    //console.log(data)

    //Delete old book_attribute records
    query = 'DELETE FROM book_attributes WHERE book_id=' + book_id
          + ' AND (';
    for(d of data) {
      query += 'attribute_id=' + d.attribute_id + ' OR ';
    }
    query = query.slice(0, -4) + ')';
    result = await connection.query(query);
    //debug
    //console.log(query);
    //console.log(result);

    //Insert new book_attribute records
    query = 'INSERT INTO book_attributes (book_id, attribute_id, '
          + 'average_score) VALUES ';
    for(d of data) {
      query += '(' + book_id + ',' + d.attribute_id + ',' + d.avg + '),';
    }
    query = query.slice(0, -1);
    result = await connection.query(query);

    //Update average rating score
    query = 'SELECT AVG(rating) AS rate FROM book_reviews WHERE book_id = ' + book_id;
    score = await connection.query(query);
    score = score[0];
    new_score = score[0].rate;
    console.log(new_score);
    query = 'UPDATE books SET average_rating =' + new_score + 'WHERE id = ' + book_id;
    result = await connection.query(query);
    //debug
    //console.log(query);
    //console.log(result);

    //return result, display to frontend if run successfully.
    return true;
  } catch(e) {
    console.log(e);
    return false;
  } finally {
    //this closes the connection
    if (connection && connection.release) connection.release();
  }
};

//test
/*
if (process.argv[2] === 'test') {
  const fetch = require('node-fetch');
  (async () => {
    let hi = await fetch(
      'http://localhost:8765/insert_recommandation_review', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        book_id: 1,
        attr: [
          {id: 1, val: 4},
          {id: 2, val: 6},
          {id: 3, val: 8}],
        user_id: 1,
        rating_value: 5
      })
    });
    let res = await hi.json();
    console.log(JSON.stringify(res));
  })();
}
*/
