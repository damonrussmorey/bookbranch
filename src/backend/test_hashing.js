//use bcrypt and try to match my password in bookbranch db
const pw = 'Drak3Gest0';
const email = 'damonrm1@yahoo.com'
const rounds = 10;
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: '159.65.97.145',
  user: 'forge',
  password: '5OlUkuXQpeEXoHuK',
  database: 'bookbranch',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0
});
(async () => {
  let connection = await pool.getConnection()
  let result = await connection.query('SELECT password FROM users WHERE email="' + email +'";');
  result = result[0][0].password;
  result = result.slice(0, 2)  + 'a' + result.slice(3);
  console.log(result);

  const bcrypt = require('bcryptjs');

  let match = await bcrypt.compare(pw, result);
  console.log(match);

  connection.release();
})();
