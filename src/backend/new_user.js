/*
Add a new user to the database

Body of Request:
{
  name: string
  email: string
  hash: string
}

Body of Response:
boolean


Will return false if email is in the database already
*/
module.exports = async (pool, req, res) => {
  console.log('\n\nAdding new user');
  let connection, result, query;

  //connect to db and pull all the data necessary
  try {
    connection = await pool.getConnection();
    query = 'SELECT id FROM users WHERE email ="' + req.body.email+'";';
    result = await connection.query(query);
    if(result[0].length && result[0].length > 0){
      res.send({id: -1});
      return;
    }

    req.body.hash = req.body.hash.slice(0, 2) + 'y'
                  + req.body.hash.slice(3);
    query = 'INSERT INTO users (name, email, password) VALUES ("'
          + req.body.name + '", "' + req.body.email + '", "'
          + req.body.hash + '");';
    result = await connection.query(query);
    res.send({id: result[0].insertId});

    } catch(e) {
      res.send(false);

    } finally {
      //this closes the connection
      if (connection && connection.release) connection.release();
    }
};

if (process.argv[2] === 'test') {
  const fetch = require('node-fetch');
  (async () => {
      let hi = await fetch(
          'http://159.65.97.145:8765/new_user', {
              headers: {
                  'content-type': 'application/json',
                  Accept: 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({
                  //facebook_id: '9999999',
                  name: 'aaaaaa',
                  email: 'asasdwad@gmail.com',
                  hash: 'asdasdawdawdawdawawdad'
                  //avatar_url: 'https://graph.facebook.com/v2.5/961719844303/picture?type=normal',
                  //facebook_avatar_original: 'https://graph.facebook.com/v2.5/961719844303/picture?width=1920'
              })
          });
      let res = await hi.json();
      console.log(JSON.stringify(res.id));
  })();
}



/*
if (process.argv[2] === 'test') {
  const fetch = require('node-fetch');
  (async () => {
    let hi = await fetch('http://159.65.97.145:8765/new_user', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        //name: 'Paul Burdick',
        name: 'Paul Burd',
<<<<<<< HEAD
        email: 'reedmanic@gmail.com',
        hash: '$2a$10$5lD5tJcm.6zgaQkKhTocYeIcPIskR6Nd'
=======
        email: process.argv[3],
        hash: '$2y$10$5lD5tJcm.6zgaQkKhTocYeIcPIskR6Nd'
>>>>>>> 2646cbe5f29ff287d24a5453542451b3eb6a6e58
            + 'aujnIyW5ZUh3HWdKx02eO'
      })
    });
    let res = await hi.json();
    console.log('test 1: ' + JSON.stringify(res));
    await new Promise(done => setTimeout(done, 3000));

    hi = await fetch('http://159.65.97.145:8765/new_user', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        //name: 'Paul Burdick',
        name: 'Paul Burd',
        email: ,
        hash: '$2y$10$5lD5tJcm.6zgaQkKhTocYeIcPIskR6Nd'
            + 'aujnIyW5ZUh3HWdKx02eO'
      })
    });
    res = await hi.json();
    console.log('test 2: ' + JSON.stringify(res));
    
  })();
}
*/
