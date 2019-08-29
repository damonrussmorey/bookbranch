/*
NOT USING

Get a list of attributes from the database
*/
module.exports = async (pool, req, res) => {
//console.log('Get attributes');
    
  let connection, result;
  try {
    connection = await pool.getConnection();
    result = await connection.query('SELECT name FROM attributes;');
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
  res.send(result[0]);
}

//quick test
if(process.argv[2] === 'test') {
  const fetch = require('node-fetch');
  (async () => {
    let res = await fetch('http://159.65.97.145:8765/attributes');
    let attr = await res.json();
//console.log(JSON.stringify(attr));
  })();
}
