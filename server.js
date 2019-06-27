const express = require('express');
const app = express();
const port = 8765;
var mysql = require('mysql');

var pool = mysql.createPool({
    host: '159.65.97.145',
    user: 'forge',
    password: '5OlUkuXQpeEXoHuK',
    database: 'bookbranch'
});

/*
Basic GET request for testing
sends all the user names from the DB
*/
app.get('/', (req, client) => {

  //Ask DB for all user names
  pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query('SELECT name FROM users', (err, result) => {
          if (err) throw err;
          client.send(result);
          console.log('sent message');
      });
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
