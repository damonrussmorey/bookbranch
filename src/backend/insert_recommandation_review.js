/*
Insert recommandation review
Client support to send one book id and three attribute ids and the new values
Returns comment if function runs successfully.

Body of request:
{
  book_id: int,
  attribute1_id: int,
  attribute1_value: int,
  attribute2_id: int,
  attribute2_value: int,
  attribute3_id: int,
  attribute3_value: int,
  user_id: int,
  rating_value: int
}

Body of response:
result
{
  answer : 'Congratuations, you successfully update your information.'
}
*/

module.exports = async (pool, req, res) => {
    //declare local vars
    let connection, result;
    //connect to db and pull all the data necessary
    try {
        console.log("Test insert new review and attributes")
        //get connection with database
        connection = await pool.getConnection();
        //query code insert new book review in table book_reviews
        var querycode_insert_book_review = 'INSERT INTO book_reviews(book_id,user_id,rating,review,total_shares) VALUES("' + req.body.book_id + '","' + req.body.user_id + '","' + req.body.rating_value + '","","0");';
        into_review = await connection.query(querycode_insert_book_review);
        console.log("insert book_reviews runs with row: "+into_review[0])
        //query code run to get the last insert ID
        get_last_id = await connection.query('SELECT LAST_INSERT_ID() AS last_insert;');
        last_id = get_last_id[0];
        console.log("Last insert ID is: " + last_id[0].last_insert)
        //query code insert new attributes value with last insert id.
        into_attribute = await connection.query('INSERT INTO book_review_attributes( book_id, attribute_id, book_review_id, score ) VALUES(' + req.body.book_id + ',' + req.body.attribute1_id + ',' + last_id[0].last_insert + ',' + req.body.attribute1_value + '),(' + req.body.book_id + ',' + req.body.attribute2_id + ',' + last_id[0].last_insert + ',' + req.body.attribute2_value + '),(' + req.body.book_id + ',' + req.body.attribute3_id + ',' + last_id[0].last_insert + ',' + req.body.attribute3_value + ')')
        console.log(into_attribute)
        //query code get the new average score of inserted attributes 
        new_avg = await connection.query('SELECT book_id, attribute_id, AVG(score) as total FROM book_review_attributes WHERE book_id = ' + req.body.book_id + ' AND (attribute_id =' + req.body.attribute1_id + ' OR attribute_id =' + req.body.attribute2_id + ' OR attribute_id =' + req.body.attribute3_id + ') GROUP BY book_id, attribute_id')
        infor = new_avg[0];
        console.log("The bookid, attribute_id and new average score: ")
        console.log(infor)
        //query code update new average score to database, renew old information.
        update_avg = await connection.query('UPDATE book_attributes SET average_score = CASE WHEN book_id =' + infor[0].book_id + ' AND attribute_id =' + infor[0].attribute_id + ' THEN ' + infor[0].total + ' WHEN book_id=' + infor[1].book_id + ' AND attribute_id =' + infor[1].attribute_id + ' THEN ' + infor[1].total + ' WHEN book_id = ' + infor[2].book_id + ' AND attribute_id = ' + infor[2].attribute_id + ' THEN ' + infor[2].total + ' ELSE average_score END WHERE book_id IN( ' + infor[0].book_id + ',' + infor[1].book_id + ',' + infor[2].book_id + ' ) AND attribute_id IN( ' + infor[0].attribute_id + ',' + infor[1].attribute_id + ',' + infor[2].attribute_id + ')')
        console.log(update_avg)
        //query code get the new average score of rate
        new_rate = await connection.query('SELECT AVG(rating) AS rate FROM book_reviews WHERE book_id = '+ req.body.book_id);
        item = new_rate[0];
        console.log("The new average rating of book_id: " + req.body.book_id + " is " + item[0].rate);
        //query code update new book average rate
        update_rate = await connection.query('UPDATE books SET average_rating = ' + item[0].rate+ ' WHERE id= '+req.body.book_id);
        console.log(update_rate)
        //return result, display to frontend if run successfully.
        result = {answer : 'Congratuations, you successfully update your information.'}
    } finally {
        //this closes the connection
        if (connection && connection.release) connection.release();
    }

    //now work with the data you queried for
    res.send(result);
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
                book_id: '1',
                attribute1_id: '1',
                attribute1_value: '4',
                attribute2_id: '2',
                attribute2_value: '6',
                attribute3_id: '3',
                attribute3_value: '8',
                user_id: '1',
                rating_value: '5'
            })
        });
        let res = await hi.json();
        console.log(JSON.stringify(res));

    })();
}