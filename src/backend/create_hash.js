/*
Create Hash
Creates a hash that works with laravel backend

Example of how you would use:
hashPassword("supersecretpassword").then(console.log);
*/
const bcrypt = require('bcrypt');

const saltPasswordAsync = (password, rounds) => new Promise((resolve, reject) => {
    bcrypt.hash(password, rounds, (err, hash) => {
        if (err) {
            reject(err);
        }
        else{
            resolve(hash.replace(/^.{3}/g, '$2y'));
        }
    });
});

async function hashPassword(plainPassword) {
    try {
        return await saltPasswordAsync(plainPassword, 10);
    } catch (err) {
//console.error('There was an error ', err);
    }
}