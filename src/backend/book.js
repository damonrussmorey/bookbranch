/*
Book information from ID

Body of request:
[
  {id: int},
  ...
]
optional array

Body of response:
{
  books: [
    {
      title: string,
      author: string,
      cover_url: string,
      TBD
    },
    ...
  ]
}
*/

module.exports = async (pool, req, res) => {
  console.log('Book Information Request');
  console.log(JSON.stringify(req.body));
  if(!Array.isArray(req.body)) {
    req.body = [req.body];
  }
  let connection, result, querycode;
  try {
    connection = await pool.getConnection();
    querycode =
      'SELECT books.title, authors.name, books.cover_url '
      + 'FROM books JOIN book_authors ON books.id = book_authors.book_id '
      + 'JOIN authors ON book_authors.author_id = authors.id '
      + 'WHERE books.id IN (';
    for(let i = 0, n = req.body.length; i < n; ++i) {
      querycode += req.body[i].id.toString();
      if(i+1 !== n)
        querycode += ', ';
      else
        querycode += ');'
    }
    console.log(querycode);
    result = await connection.query(querycode);
    result = result[0];
    if(!result) {
      console.log('no matches, sending back null');
    }
  } finally {
    if(connection && connection.release)  connection.release();
  }
  res.send(result);
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
      body: JSON.stringify([
        {id: 1},
        {id: 2},
        {id: 4}
      ])
    });
    let res = await hi.json();
    console.log('test 1: ' + JSON.stringify(res) + '\n');

    await new Promise(done => setTimeout(done, 3000));
    
    hi = await fetch('http://localhost:8765/book', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify({id: 3})
    });
    res = await hi.json();
    console.log('test 2: ' + JSON.stringify(res) + '\n');
  })();
}
