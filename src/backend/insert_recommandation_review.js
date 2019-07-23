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

module.exports = async (pool, req, res) => {
  //declare local vars
  let connection, result, data, query, review_id
      book_id = req.body.book_id;

  //connect to db and pull all the data necessary
  try {
    console.log("\n\nBook review")

    //get connection with database
    connection = await pool.getConnection();

    //query code insert new book review in table book_reviews
    query = 'INSERT INTO book_reviews(book_id,user_id,rating) '
          + 'VALUES("' + book_id + '","' + req.body.user_id
          + '","' + req.body.rating_value + '");';
    result = await connection.query(query);
    review_id = result[0].insertId;
    //debug
    //console.log(query);
    //console.log("Last insert ID is: " + review_id);

    //query code insert new attributes value with last insert id.
    query = 'INSERT INTO book_review_attributes(book_id, attribute_id, '
          + 'book_review_id, score) VALUES ';
    for(attr of req.body.attr) {
      query += '(' + req.body.book_id + ',' + attr.id
             + ',' + review_id + ',' + attr.val + '),';
    }
    query = query.slice(0, -1);
    result = await connection.query(query);
    //debug
    //console.log(query);
    //console.log(result)

    //query code get the new average score of inserted attributes
    query = 'SELECT attribute_id, AVG(score) AS avg FROM '
          + 'book_review_attributes WHERE book_id = '
          + book_id + ' AND ('
    for(attr of req.body.attr) {
      query += 'attribute_id = ' + attr.id + ' OR '
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
    result - await connection.query(query);
    //debug
    //console.log(query);
    //console.log(result);

    //return result, display to frontend if run successfully.
    res.send({answer : true});
  } catch(e) {
    console.log(e);
    res.send({success: false});
  } finally {
    //this closes the connection
    if (connection && connection.release) connection.release();
  }
};

//test

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
