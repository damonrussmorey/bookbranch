module.exports = async (pool, req, res) => {
    console.log("Find average attribute ranking");
    //declare local vars
    let connection, result, sortid;
    for(i of req.body.attr1)

    //connect to db and pull all the data necessary
    try {
        connection = await pool.getConnection()
    } finally {
        //this closes the connection
        if (connection && connection.release) connection.release();
    }

    //now work with the data you queried for
    res.send(result);
};

if (process.argv[2] === 'test') {
    const fetch = require('node-fetch');
    (async () => {
        let hi = await fetch('http://localhost:8765/average_attribute', {
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                book_id1: 1,
                book_id2: 2,
                attr1: [
                    { id: 1, val: 4 },
                    { id: 2, val: 6 },
                    { id: 3, val: 8 }
                ],
                attr2: [
                    { id: 1, val: 4 },
                    { id: 2, val: 6 },
                    { id: 3, val: 8 }
                ]
            })
        });
        let res = await hi.json();
        console.log(JSON.stringify(res));

    })();
}