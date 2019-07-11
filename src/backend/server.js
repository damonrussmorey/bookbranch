const express = require('express');
const app = express();
const port = 8765;
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser')
const pool = mysql.createPool({
  host: '159.65.97.145',
  user: 'forge',
  password: '5OlUkuXQpeEXoHuK',
  database: 'bookbranch',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0
});

//ping database for common errors
pool.getConnection((err, connection) => {
  if(err) {
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
    }
  }
  if(connection) connection.release();
  return;
});

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}) ); // to support URL-encoded bodies

app.post('/recommendation', (req, res) => {
  require('./recommendation')(pool, req, res);
});

app.get('/attributes', (req, res) => {
  require('./attributes')(pool, req, res);
});

app.post('/book', (req, res) => {
  require('./book')(pool, req, res);
});

app.post('/keyword', (req, res) => {
  require('./keyword')(pool, req, res);
});

app.post('/review', (req, res) => {
  require('./review')(pool, req, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
