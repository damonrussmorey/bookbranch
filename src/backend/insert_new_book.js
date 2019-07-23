/*
Add a new book function, first, we hope no books that is duplicated. So check the 
asin once, if the asin is the same as one book already exist in the database, move to function
insert new recommandation, we dont need to check author this time, because a book must have an author.
if the book dont exist in the database, then move to check the author's information to avoid insert twice.
Then just insert all information in the database. 
body:
{
    asin: int,
    amazonURL: string
    imageURL: string
    title: string
    author: string
    attr: [
            {id: int, value: int},
            {id: int, value: int},
            {id: int, value: int}
            ],
    user_id: int,
    rating_value: int
}
*/
module.exports = async (pool, req, res) => {
    //declare local vars
    let connection, result;
    //connect to db and pull all the data necessary
    try {
        connection = await pool.getConnection();
        //Check the book inside database or not
        status = await connection.query('SELECT id FROM books WHERE asin = "' + req.body.asin + '"');
        //check the length of return result, if larger than '0' means at lease one object returned from database.
        if (status[0].length > 0){
            console.log("New book already saved in the database")
            //The books alreay saved in the database, dont need to check the author, can move to insert_recommandation_review.js with send the same attributes.
            new_id = status[0];
            new_id = new_id[0].id;
            console.log(new_id);
            result = {
                answer: false,
                book_id: new_id
            };
           console.log(result);
        }
        else{
            console.log("Not in the database.");
            //Books are not saved in the databased, check the authors first, if need to add the new authors or not.
            auth = await connection.query('SELECT id FROM authors WHERE name = "' + req.body.author + '"');
            //debug display
            //console.log(auth)
            var auth_id;
            if(auth[0].length > 0){
                console.log("Authors already saved in the database");
                auth_id = auth[0];
                auth_id = auth_id[0].id;
                console.log(auth_id);
            }
            else{
                console.log("Need to saved the authors information");
                //For get url_title, need to get the max_id in authors table and then add '1' to the new authors
                temp = await connection.query('SELECT id FROM authors ORDER BY id DESC LIMIT 0, 1');
                last_id = temp[0];
                last_id = last_id[0].id;
                new_id = last_id + 1;
                //debug of last id
                //console.log(last_id);
                url_title = req.body.author.toLowerCase().split(' ').join('-') + "-" + new_id;
                //debug of url_title
                //console.log(url_title)
                //For insert the new author
                continue_id = await connection.query('alter table authors auto_increment= '+ last_id);
                insert_auth = await connection.query('INSERT INTO authors(name,url_title) VALUES("'+ req.body.author+ '", "' + url_title+'")');
                //debugger
                console.log(insert_auth);
                auth_id = new_id;
                console.log(auth_id);
            }
            //Insert the new book and return the book_id back
            temp = await connection.query('SELECT id FROM books ORDER BY id DESC LIMIT 0, 1');
            last_id = temp[0];
            last_id = last_id[0].id;
            new_id = last_id + 1;
            console.log(last_id)
            url_title = req.body.title.toLowerCase().split(' ').join('-')+"-"+new_id;
            console.log(url_title)
            continue_id = await connection.query('alter table books auto_increment= '+ last_id);
            insert_book = await connection.query('INSERT INTO books(title,url_title, asin, cover_url,amazon_url,average_rating) VALUES("'+ req.body.title+'", "'
                                                 + url_title +'", ' + req.body.asin + ', "' + req.body.imageURL + '", "' + req.body.amazonURL + '", ' +req.body.rating_value+')');
            console.log(insert_book);
            //Insert new book function end.

            //Insert book authors
            console.log(new_id);
            insert_book_auth = await connection.query('INSERT INTO book_authors(book_id, author_id) VALUES('+ new_id+','+ auth_id+')');
            console.log(insert_book_auth);
            //Insert book authors function end.
            result = {answer:false,book_id: new_id}
        }

    } finally {
        //this closes the connection
        if (connection && connection.release) connection.release();
    }
    //now work with the data you queried for
    console.log("move to new function")
    req.body.book_id = result.book_id;
    require('./insert_recommandation_review.js')(pool, req, res);
};

if (process.argv[2] === 'test') {
    const fetch = require('node-fetch');
    (async () => {
        let hi = await fetch('http://localhost:8765/insert_new_book', {
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                //asin: '0439023521',
                asin:'11111111',
                amazonURL: 'https://www.amazon.com/Hunger-Games-Book-1/dp/0439023521?SubscriptionId=AKIAIANIRJALOZBL4MZQ&tag=bookbch-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=0439023521',
                imageURL: 'https://images-na.ssl-images-amazon.com/images/I/41ir9m8QQnL.jpg',
                title: 'The Hunger Games (Book 1)',
                author: 'Suzanne Colli',
                attr: [
                    {id: 1, val: 3},
                    {id: 13, val: 8},
                    {id: 2, val: 4}
                ],
                user_id: '1',
                rating_value: '5'
            })
        });
        let res = await hi.json();
        console.log(JSON.stringify(res));

    })();
}