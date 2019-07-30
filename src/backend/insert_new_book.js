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
    description: string,
}

Returns the id for the inserted book
*/
module.exports = async (pool, book) => {
  console.log('\nAdding book to the database');

  //declare local vars
  let connection, result, query, book_id, auth_id, url_title;

  //connect to db and pull all the data necessary
  try {
    connection = await pool.getConnection();

    //Check the book inside database or not
    //console.log(book.asin);
    query = 'SELECT id FROM books WHERE asin = "' + book.asin + '";';
    //console.log(query);
    result = await connection.query(query);
    result = result[0];
    if(Array.isArray(result))
      result = result[0];

    //If we have a result from the query, then the book is already
    //in the database, return its id
    if(result) {
      console.log('Book is already in the database');
      book_id = result.id;

    } else {
      console.log("Book is not in the database.");
      //Books are not saved in the database, check the
      //authors first, if need to add the new authors or not.
      query = 'SELECT id FROM authors WHERE name = "'
            + book.author + '";';
      //console.log(query);
      result = await connection.query(query);
      result = result[0];
      if(Array.isArray(result))
        result = result[0];
          
      if(result) {
        console.log('Author is already in the database');
        auth_id = result.id;

      } else {
        console.log('Author is not in the database');

        //For get url_title, need to get the max_id in
        //authors table and then add '1' to the new authors
        query = 'SELECT id FROM authors ORDER BY id DESC LIMIT 0, 1;';
        //console.log(query);
        result = await connection.query(query);
        auth_id = result[0][0].id + 1;
        url_title = book.author.toLowerCase().split(' ').join('-')
                  + "-" + auth_id;
              
        //Damon: I didn't see why this was necessary, it's already
        //primary key
        //For insert the new author
        //continue_id = await connection.query('alter table authors auto_increment= '+ last_id);

        query = 'INSERT INTO authors(name,url_title) VALUES("'
              + book.author + '", "' + url_title + '");';
        //console.log(query);
        result = await connection.query(query);
      }

      //Insert the new book and return the book_id back
      query = 'SELECT id FROM books ORDER BY id DESC LIMIT 0, 1;';
      //console.log(query);
      result = await connection.query(query);
      book_id = result[0][0].id + 1;
      url_title = book.title.toLowerCase().split(' ').join('-')
                + "-" + book_id;

      //Damon: same note from above
      //continue_id = await connection.query('alter table books auto_increment= '+ last_id);

      query = 'INSERT INTO books (title, url_title, asin, '
            + 'cover_url, amazon_url, description, average_rating) '
            + 'VALUES("'+ book.title + '","' + url_title + '", "'
            + book.asin + '", "' + book.imageURL + '", "'
            + book.amazonURL +'","'+ book.description+'", 0);';
      //console.log(query);
      result = await connection.query();

      //Insert book authors
      query = 'INSERT INTO book_authors(book_id, author_id) '
            + 'VALUES('+ book_id + ',' + auth_id + ');';
      //console.log(query);
      result = await connection.query(query);
      }

  } finally {
      //this closes the connection
      if (connection && connection.release) connection.release();
  }

  return book_id;
};

/*
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
                rating_value: '5',
                description: 'an example'
            })
        });
        let res = await hi.json();
        console.log(JSON.stringify(res));

    })();
}
*/
