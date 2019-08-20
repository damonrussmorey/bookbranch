/*
User Info request
Client sends an email for a user
Returns the id and hash for the user
If user not found, returns id=-1

Body of Request:
{
  email: string
}

Body of Response:
{
  id: int
  hash: string
}
*/

module.exports = async (pool, req, res) => {
  console.log('\nRetrieve User Info')
  //console.log(req.body.email);

  let connection, result, query, hash;

  try {
    connection = await pool.getConnection();
    query = 'SELECT id, password FROM users WHERE email="'+req.body.email+'";'
    //console.log(query);
    result = await connection.query(query);
    result = result[0][0];
    if(!result) {
      res.send({id:-1, hash: null});
    } else {
      hash = result.password;
      hash = hash.slice(0, 2) + 'a' + hash.slice(3);
      res.send({id:result.id, hash:hash});
    }
  } finally {
    if(connection && connection.release)  connection.release();
  }
}

//test
if(process.argv[2] === 'test') {
  const fetch = require('node-fetch');
  (async () => {
    let hi = await fetch('http://159.65.97.145:8765/user_info', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify({email: 'damonrm1@yahoo.com'})
    });
    let res = await hi.json();
    console.log('test 1: ' + JSON.stringify(res) + '\n');

    await new Promise(done => setTimeout(done, 3000));
    
    hi = await fetch('http://159.65.97.145:8765/user_info', {
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
