module.exports = async (pool, req, res) => {
    //declare local vars
    let connection, result;
    //connect to db and pull all the data necessary
    try {
        connection = await pool.getConnection();
        status = await connection.query('SELECT id FROM users WHERE name = "'+ req.body.name+'" OR email ="' + req.body.email+ '"');
        if(status[0].length > 0){
            console.log("User name or email already existed, change other one")
            result = false;
        }
        else{
            insert_new = await connection.query('INSERT INTO users(name, email, password)' 
                                                +'VALUES("'+ req.body.name +'", "'+ req.body.email +'", "'+ req.body.password + '")')
            console.log(insert_new)
            result =true;
        }
    } finally {
        //this closes the connection
        if (connection && connection.release) connection.release();
    }
    res.send(result);
};

if (process.argv[2] === 'test') {
    const fetch = require('node-fetch');
    (async () => {
        let hi = await fetch('http://localhost:8765/get_user_info', {
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                //name: 'Paul Burdick',
                name: 'Paul Burd',
                email: 'reedmanic@gmail.com',
                password: '$2y$10$5lD5tJcm.6zgaQkKhTocYeIcPIskR6NdaujnIyW5ZUh3HWdKx02eO'
            })
        });
        let res = await hi.json();
        console.log(JSON.stringify(res));

    })();
}