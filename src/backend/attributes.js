/*
Get a list of attributes from the database
*/
module.exports = (pool, req, res) => {
    console.log('Get attributes');
    pool.getConnection((err, connection) => {
        if(err) throw err;

        connection.query('SELECT name FROM attributes;', (err, result) => {
            if(err) throw err;

            res.send(result);
        });
    });
}

//quick test
const fetch = require('node-fetch');
(async () => {
    var res = await fetch('http://localhost:8765/attributes');
    var attr = await res.json();
    console.log(JSON.stringify(attr));
})();