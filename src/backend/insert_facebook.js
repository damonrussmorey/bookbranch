/*
Add a new user with facebook api to the database

Body of Request:
{
  facebook_id: string
  name: string
  email: string
  avatar_url: string
  facebook_avatar_original: string
}

Body of Response:
boolean


Will return false if email is in the database already
*/
module.exports = async (pool, req, res) => {
    console.log('\n\nAdding new user by facebook');
    let connection, result, query;

    //connect to db and pull all the data necessary
    try {
        connection = await pool.getConnection();

        query = 'SELECT id, name FROM users WHERE facebook_id = "' 
            + req.body.facebook_id + '" AND email = "' + req.body.email + '";';
        result = await connection.query(query);
        result = result[0];
        if (result.length && result.length[1] != "undefined") {
            res.send({id: result[0].id, name: result[0].name})
            return;
        }
        query = 'INSERT INTO users (facebook_id, name, email) VALUES ("'
            + req.body.facebook_id + '", "' + req.body.name + '", "'
            + req.body.email + '");';
        result = await connection.query(query);
        res.send({id: result[0].insertId, name: req.body.name})
    } catch(e) {
        res.send({id:-1});
    } finally {
        //this closes the connection
        if (connection && connection.release) connection.release();
        return;
    }
};

/*
if (process.argv[2] === 'test') {
    const fetch = require('node-fetch');
    (async () => {
        let hi = await fetch(
            'http://159.65.97.145:8765/insert_facebook', {
                headers: {
                    'content-type': 'application/json',
                    Accept: 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    facebook_id: '88888888',
                    name: 'aaaaaa',
                    email: 'bbbbbbb@gmail.com',
                    avatar_url: 'https://graph.facebook.com/v2.5/961719844303/picture?type=normal',
                    facebook_avatar_original: 'https://graph.facebook.com/v2.5/961719844303/picture?width=1920'
                })
            });
        let res = await hi.json();
        console.log(JSON.stringify(res.id));
    })();
}*/