/*

XXX WON'T BE USING FOR MAGIC

Box - skeleton to put in your keyword search request

Body of Request:
{
  search: string
}

Body of Response:
{
TODO
}
*/
module.exports = async (pool, req, res) => {
  //declare local vars
  let connection, result;

  //connect to db and pull all the data necessary
  try {
//console.log("\nKeyword Search");
    connection = await pool.getConnection();
    var querycode_keyword_search = 'SELECT books.amazon_url AS amazonURL, books.asin, books.description, books.title, authors.name, books.cover_url as imageURL,books.id FROM books JOIN book_authors ON books.id = book_authors.book_id JOIN authors ON book_authors.author_id = authors.id WHERE (books.title LIKE "%' + req.body.keyword_search + '%" OR authors.name LIKE "%' + req.body.keyword_search +'%" OR books.description LIKE "%' + req.body.keyword_search + '%") GROUP BY books.title,books.description';
    //the query returns are an array, results followed by
    //some other stuff, so for example
    //result = await connection.query('rawr')
    //result = result[0]
    result = await connection.query(querycode_keyword_search);
    result = result[0];

  } finally {
    //this closes the connection
    if(connection && connection.release)  connection.release();
  }

  //now work with the data you queried for
  res.send(result);
};

//if you want to test your code, you can run server.js in one
//terminal and run this test code in another, provide the argument
//so server.js doesn't run this code when it imports this file
// > node keyword.js test
//test
if(process.argv[2] === 'test') {
  const fetch = require('node-fetch');
  (async () => {
      let hi = await fetch('http://159.65.97.145:8765/keyword', {
          headers: {
              'content-type': 'application/json',
              Accept: 'application/json'},
          method : 'POST',
          body: JSON.stringify({
            search: 'joan of arc'
          })
      });
      let res = await hi.json();
//console.log(JSON.stringify(res));

  })();
}
