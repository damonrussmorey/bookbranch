/*
User Hash requests
Client sends an email for a user
Returns the hash for the user, or NULL if user email not found

Body of Request:
{
  email: string
}

Body of Response:
{
  hash: string
}
*/

module.exports = async (pool, req, res) => {
  console.log('\n\nRetrieve User Hash')
  //console.log(req.body.email);

  let connection, result, query;

  try {
    connection = await pool.getConnection();
    query = 'SELECT password FROM users WHERE email="'+req.body.email+'";'
    //console.log(query);
    result = await connection.query(query);
    result = result[0][0];
    if(!result) {
      res.send({password: null});
    } else {
      result = result.password;
      result = result.slice(0, 2) + 'a' + result.slice(3);
      res.send({password:result});
    }
    console.log(result);
  } finally {
    if(connection && connection.release)  connection.release();
  }
}

//test
if(process.argv[2] === 'test') {
  const fetch = require('node-fetch');
  (async () => {
    let hi = await fetch('http://localhost:8765/user_hash', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify({email: 'damonrm1@yahoo.com'})
    });
    let res = await hi.json();
    console.log('test 1: ' + JSON.stringify(res) + '\n');

    await new Promise(done => setTimeout(done, 3000));
    
    hi = await fetch('http://localhost:8765/user_hash', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify({email: 'damoBADnrm1@yahoo.com'})
    });
    res = await hi.json();
    console.log('test 2: ' + JSON.stringify(res) + '\n');
  })();
}
