/*
Create Hash
Creates a hash that the system can understand
*/

const bcrypt = require('bcrypt');
const myPlaintextPassword = 'bcrypt1999';

bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
    console.log(hash.replace(/^.{3}/g, '$2y'));
});