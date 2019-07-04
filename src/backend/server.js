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

const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({ extended: true }) ); // to support URL-encoded bodies

/*
Basic GET request for testing
sends all the user names from the DB
*/
app.get('/', (req, res) => {
  console.log(req);

  //Ask DB for all user names
  pool.getConnection((err, connection) => {
      if (err) throw err;
      connection.query('SELECT name FROM users', (err, result) => {
          if (err) throw err;
          res.send(result);
          console.log('sent message');
      });
  })
});

/*
Book Recommendation Request
Client sends a book title and 3 attribute values
Body of request:
  {title:...
    attr: [
      { name:...
        val:...
      }
    ] //len 3
  }
Assume the names of the attributes are correct
Attribute values are integers from 1 to 10 inclusive
We need the book to skip it from matching to itself
*/
app.post('/recommendation', require('./recommendation'));

app.listen(port, () => console.log(`Listening on port ${port}`));
