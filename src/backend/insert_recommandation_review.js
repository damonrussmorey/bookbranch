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
  let connection, result, data, query, review_id;

  //connect to db and pull all the data necessary
  try {
    console.log("\n\nBook review")

    //get connection with database
    connection = await pool.getConnection();

    //query code insert new book review in table book_reviews
    query = 'INSERT INTO book_reviews(book_id,user_id,rating) '
          + 'VALUES("' + req.body.book_id + '","' + req.body.user_id
          + '","' + req.body.rating_value + '");';
    console.log(query);
    result = await connection.query(query);
    review_id = result[0].insertId;
    //debug
    console.log(result);
    console.log("Last insert ID is: " + review_id);

    /*
    //query code run to get the last insert ID for the other table
    result = await connection.query(
      'SELECT LAST_INSERT_ID() AS last_insert;');
    review_id = result[0][0].last_insert;
    */

    //query code insert new attributes value with last insert id.
    query = 'INSERT INTO book_review_attributes(book_id, attribute_id, '
          + 'book_review_id, score) VALUES ';
    for(attr of req.body.attr) {
      query += '(' + req.body.book_id + ',' + attr.id
             + ',' + review_id + ',' + attr.val + '),';
    }
    query = query.slice(0, -1); //remove last comma
    console.log(query);
    result = await connection.query(query);
    //debug
    console.log(result)

    //query code get the new average score of inserted attributes
    query = 'SELECT attribute_id, AVG(score) AS avg FROM '
          + 'book_review_attributes WHERE book_id = '
          + req.body.book_id + ' AND ('
    for(attr of req.body.attr) {
      query += 'attribute_id = ' + attr.id + ' OR '
    }
    query = query.slice(0, -4) + ') GROUP BY attribute_id';
    console.log(query);
    result = await connection.query(query);
    data = result[0];
    //debug
    //console.log("The bookid, attribute_id and new average score: ")
    console.log(data)

    for(d of data) {
      query = 'DELETE FROM book_attributes WHERE book_id='
            + req.body.book_id + ' AND attribute_id=' + d.attribute_id;
      console.log(query);
      result = await connection.query(query);
      
      query = 'INSERT INTO book_attributes (book_id, attribute_id, '
            + 'average_score) VALUES (' + req.body.book_id + ','
            + d.attribute_id + ',' + d.avg +')';
      console.log(query);
      result = await connection.query(query);
      console.log(result);
    }
/*
    query = 'INSERT INTO book_attributes (book_id, attribute_id, '
          + 'average_score) VALUES ';
    for(d of data) {
      query += '(' + req.body.book_id + ',' + d.attribute_id
             + ',' + d.avg + '),'
    }
    query = query.slice(0, -1) + ' ON DUPLICATE KEY UPDATE '
          + 'average_score = VALUES(average_score)'; 
    console.log(query);
    result = await connection.query(query);
    //debug
    console.log(result);
/*
    //query code to add or update new average score
    //for each book/attribute pair
    query = 'UPDATE book_attributes SET average_score = CASE';
    for(d of data) {
      query += ' WHEN book_id =' + d.book_id + ' AND attribute_id ='
             + d.attribute_id + ' THEN ' + d.avg;
    }
    query += ' ELSE average_score END WHERE book_id = '+ req.body.book_id;
    query = query.slice(0, -1) + ' AND attribute_id IN(';
    for(d of data) {
      query += d.attribute_id + ',';
    }
    query = query.slice(0, -1) + ')';
    
    console.log(query);
    result = await connection.query(query);
    //debug
    console.log(result);
    */

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

//if you want to test your code, you can run server.js in one
//terminal and run this test code in another, provide the argument
//so server.js doesn't run this code when it imports this file
// > node keyword.js test
//test

if (process.argv[2] === 'test') {
  const fetch = require('node-fetch');
    (async () => {
        let hi = await fetch('http://localhost:8765/insert_recommandation_review', {
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
