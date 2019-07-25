/*
Book information from ID
Information that is already in the database

Body of request:
[
  int,
  ...
]

Body of response:
[
  {
    title:        string,
    author:       string,
    imageURL:     string,
    amazonURL:    string,
    asin:         int,
    description:  string
  },
  ...
]
*/

module.exports = async (pool, ids) => {
  console.log('Book Information Request');
  console.log(ids);

  let connection, result, query;
  try {
    connection = await pool.getConnection();
    query =
      'SELECT books.title AS title, authors.name AS author, '
      + 'books.cover_url AS imageURL, books.asin AS asin, '
      + 'books.description AS description, books.amazon_url AS amazonURL '
      + 'FROM books JOIN book_authors ON books.id = book_authors.book_id '
      + 'JOIN authors ON book_authors.author_id = authors.id '
      + 'WHERE books.id IN (';
    for(id of ids)
      query += id + ',';
    query = query.slice(0, -1) + ');';
    console.log(query);
    result = await connection.query(query);
    result = result[0];
    if(!result)
      console.log('no matches, sending back null');
  } finally {
    if(connection && connection.release)  connection.release();
  }

  return result;
}

//test
if(process.argv[2] == 'test') {
  const fetch = require('node-fetch');
  (async () => {
    let hi = await fetch('http://localhost:8765/book', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify([1,2,4]);
    });
    let res = await hi.json();
    console.log(JSON.stringify(res));
  })();
}
