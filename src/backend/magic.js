/*
One shot call to backend with all the data necessary to provide a review
and supply the database with new book data

Sequence:
Find book 1 on AWS
Add book 1 to database (or verify it is there)
Add review for book 1 to database
Find book 2 on AWS
Add book 2 to database (or verify it is there)
Add review for book 2 to database
Generate the recommendations
Return all the book information for the recommmended books

Request Body:
{
  title1:
  rating1:
  attr1id1:
  attr1val1
  attr1id2:
  attr1val2:
  attr1id3:
  attr1val3:
  
  title2:
  rating2:
  attr2id1:
  attr2val1
  attr2id2:
  attr2val2:
  attr2id3:
  attr2val3:

  user_id:
}

Response Body:
[
  {
    title:        string,
    author:       string,
    imageURL:     string,
    amazonURL:    string,
    asin:         int,
    description:  string
  },
  ...
]
*/

//Called from server.js when a post request is received
module.exports = async (pool, req, res) => {

  //remove duplicate attributes for book 1
  attr1 = [{id: req.body.attr1id1, val: req.body.attr1val1}];
  if(attr1.filter(e => e.id === req.body.attr1id2).length == 0)
    attr1.push({id: req.body.attr1id2, val: req.body.attr1val2});
  if(attr1.filter(e => e.id === req.body.attr1id3).length == 0)
    attr1.push({id: req.body.attr1id3, val: req.body.attr1val3});

  //find book 1 on AWS
  book1 = require('./find_book')(pool, req.body.title1);

  //add book 1 to database (or simply return the id if its already there)
  book1_id = require('./insert_new_book')(pool, book1);

  //add book 1 review to database
  success = require('./insert_recommandation_review')(pool, {
    book_id: book1_id,
    attr: attr1,
    user_id: req.body.user_id,
    rating_value: req.body.rating1
  });
    
  //remove duplicate attributes for book 2
  let attr2 = [{id: req.body.attr2id1, val: req.body.attr2val1}];
  if(attr2.filter(e => e.id === req.body.attr2id2).length == 0)
    attr2.push({id: req.body.attr2id2, val: req.body.attr2val2});
  if(attr2.filter(e => e.id === req.body.attr2id3).length == 0)
    attr2.push({id: req.body.attr2id3, val: req.body.attr2val3});

  //find book 2 on AWS
  book2 = require('./find_book')(pool, req.body.title2);

  //add book 2 to database (or simply return the id if its already there)
  book2_id = require('./insert_new_book')(pool, book2);

  //add book 2 review to database
  success = require('./insert_recommandation_review')(pool, {
    book_id: book2_id,
    attr: attr2,
    user_id: req.body.user_id,
    rating_value: req.body.rating2
  });

  //fill out attribute list with only unique attributes, average
  //them if they are the same
  attr1.sort((a,b) => {
    if(a.id > b.id) return 1;
    else  return -1;
  })
  attr2.sort((a,b) => {
    if(a.id > b.id) return 1;
    else  return -1;
  })
  let attr = [], i = 0, j = 0;
  while(i < attr1.length && j < attr2.length) {
    if(attr1[i].id == attr2[j].id) {
      attr.push({id: attr1[i].id, val: (attr1[i].val + attr2[j].val)/2});
      ++i, ++j;
    } else if(attr1[i].id < attr2[j].id) {
      attr.push(attr1[i++]);
    } else {
      attr.push(attr2[j++]);
    }
  }
  while(i < attr1.length)
      attr.push(attr1[i++]);
  while(j < attr2.length)
      attr.push(attr2[j++]);
  
  //Get a list of recommendations based on the 2 books
  let ids = require('./recommendation')(
    pool, [book1_id, book2_id], attr);

  //Get the information for the recommended books
  let recommendations = require('./books')(pool, ids);
  
  //Send the results back to the client
  res.send(recommendations);
}

//test
if(process.argv[2] === 'test') {
  const fetch = require('node-fetch');
  (async () => {
    let hi = await fetch('http://localhost:8765/recommendation', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify({
        title1:       "joan of arc",
        rating1:      4,
        attr1id1:     1,
        attr1val1     10,
        attr1id2:     5,
        attr1val2:    8,
        attr1id3:     18,
        attr1val3:    6,
        title2:       "albert einstein biography",
        rating2:      5,
        attr2id1:     2,
        attr2val1     8,
        attr2id2:     5,
        attr2val2:    10,
        attr2id3:     20,
        attr2val3:    7,
        user_id:      200
      })
    });
    let res = await hi.json();
    console.log(test + ': ', JSON.stringify(res));
  })();
}
