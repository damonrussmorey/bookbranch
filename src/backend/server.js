require('dotenv').config({path: '../../'});
const express = require('express');
const app = express();
const port = process.env.DB_PORT;
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser')
const { OperationHelper } = require('apac');

const pool = mysql.createPool({
  host: process.env.DB_IP,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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

const aws = new OperationHelper({
  awsId: process.env.AWS_ID,
  awsSecret: process.env.AWS_SECRET,
  assocId: process.env.AWS_ASSOC,
  maxRequestsPerSecond: 1
});

//to support JSON-encoded bodies
app.use(bodyParser.json());
//to support URL-encoded bodies
app.use(bodyParser.urlencoded({extended: true}) );

//Routing list
//send off to modules

//XXXsimplified routingXXX
app.post('/user_info', (req, res) => {
  require('./user_info')(pool, req, res);
});

app.post('/new_user', (req, res) => {
  require('./new_user')(pool, req, res);
});

app.post('/insert_facebook', (req,res) =>{
  require('./insert_facebook')(pool,req,res);
});

app.post('/find_book', (req, res) => {
  require('./find_book')(pool, aws, req, res);
});

app.post('/magic', (req, res) => {
  require('./magic')(pool, req, res);
});

app.post('/keyword', (req, res) => {
  require('./keyword')(pool, req, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
