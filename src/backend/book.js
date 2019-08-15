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
  console.log('\nBook Information Request');

  if(!Array.isArray(ids))
    ids = [ids];

  let connection, result, query;
  try {
    connection = await pool.getConnection();
    query =
      'SELECT cover_url AS imageURL, amazon_url AS amazonURL, url_title AS urlTitle'
      + 'FROM books WHERE books.id IN (';
    for(id of ids)
      query += id + ',';
    query = query.slice(0, -1) + ') ORDER BY FIELD(books.id,';
    for(id of ids)
      query += id + ',';
    query = query.slice(0, -1) + ');';
    //console.log(query);
    result = await connection.query(query);
    result = result[0];
    if(!result)
      console.log('no matches, sending back null');
    if(!Array.isArray(result))
      result = [result];
  } finally {
    if(connection && connection.release)  connection.release();
  }
/*
  for(r of result)
    console.log(r.imageURL);
    */
  return result;
}

//test
if(process.argv[2] == 'test') {
  const fetch = require('node-fetch');
  (async () => {
    let hi = await fetch('http://159.65.97.145:8765/book', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify([1,2,4])
    });
    let res = await hi.json();
    console.log(JSON.stringify(res));
  })();
}
