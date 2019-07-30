/*
Create Hash
Creates a hash that works with laravel backend
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

// example
async function hashPassword(plainPassword) {
    try {
        const hash = await saltPasswordAsync(plainPassword, 10);
        console.log('The hash is', hash);
    } catch (err) {
        console.error('There was an error ', err);
    }
}

hashPassword("bcrypt1999");