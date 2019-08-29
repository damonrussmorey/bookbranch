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
  //convert attribute names
  let convert_names = {
    'Adventurous': 1,
    'Beautiful': 2,
    'Brainy': 3,
    'Complex': 4,
    'Cooking': 5,
    'Cultural': 6,
    'Dark': 7,
    'Disaster': 8,
    'Erotic': 9,
    'Faith': 10,
    'Family': 11,
    'Fantasy': 12,
    'Friendship': 13,
    'Funny': 14,
    'Heroic': 15,
    'Historical': 16,
    'Idealistic': 17,
    'Insightful': 18,
    'Mysterious': 19,
    'Perserverence': 20,
    'Power': 21,
    'Readable': 22,
    'Romantic': 23,
    'Scary': 24,
    'Suspenseful': 25
  };
  let convert_rank = {
    'One': 1,
    'Two': 2,
    'Three': 3,
    'Four': 4,
    'Five': 5,
    'Six': 6,
    'Seven': 7,
    'Eight': 8,
    'Nine': 9,
    'Ten': 10
  };
  if(!req.body.test) {
    req.body.attr1id1 = convert_names[req.body.attr1id1];
    req.body.attr1id2 = convert_names[req.body.attr1id2];
    req.body.attr1id3 = convert_names[req.body.attr1id3];
    req.body.attr2id1 = convert_names[req.body.attr2id1];
    req.body.attr2id2 = convert_names[req.body.attr2id2];
    req.body.attr2id3 = convert_names[req.body.attr2id3];
    req.body.attr1val1 = convert_rank[req.body.attr1val1];
    req.body.attr1val2 = convert_rank[req.body.attr1val2];
    req.body.attr1val3 = convert_rank[req.body.attr1val3];
    req.body.attr2val1 = convert_rank[req.body.attr2val1];
    req.body.attr2val2 = convert_rank[req.body.attr2val2];
    req.body.attr2val3 = convert_rank[req.body.attr2val3];
    req.body.rating1 = convert_rank[req.body.rating1];
    req.body.rating2 = convert_rank[req.body.rating2];
  }
//console.log(req.body);

  let attr1, attr2, attr, book1, book2, book1_id, book2_id,
      success, ids, recommendations;

  //remove duplicate attributes for book 1
  attr1 = [{id: req.body.attr1id1, val: req.body.attr1val1}];
  if(attr1.filter(e => e.id === req.body.attr1id2).length == 0)
    attr1.push({id: req.body.attr1id2, val: req.body.attr1val2});
  if(attr1.filter(e => e.id === req.body.attr1id3).length == 0)
    attr1.push({id: req.body.attr1id3, val: req.body.attr1val3});

  //console.log("###### Book 1 track begin ######################")

  //potentially we don't the book on Amazon, skip these if we didn't
  if(req.body.book1.title) {
    //add book 1 to database or simply return the id if it's 
    //already there
    book1_id = await require('./insert_new_book')(pool, req.body.book1);
    //console.log(book1_id)

    //add book 1 review to database
    success = await require('./insert_recommandation_review')(pool, {
      book_id: book1_id,
      attr: attr1,
      user_id: req.body.user_id,
      rating_value: req.body.rating1
    });
  } else {
    book1_id = -1;
  }

  //console.log("############ Book 1 track end ##################")
  
  //remove duplicate attributes for book 2
  attr2 = [{id: req.body.attr2id1, val: req.body.attr2val1}];
  if(attr2.filter(e => e.id === req.body.attr2id2).length == 0)
    attr2.push({id: req.body.attr2id2, val: req.body.attr2val2});
  if(attr2.filter(e => e.id === req.body.attr2id3).length == 0)
    attr2.push({id: req.body.attr2id3, val: req.body.attr2val3});

  //console.log("\n\n############### Book 2 track begin ############")

  if(req.body.book2.title) {
    //add book 2 to database or simply return the id if it's
    //already there
    book2_id = await require('./insert_new_book')(pool, req.body.book2);
    //console.log(book2_id);

    //add book 2 review to database
    success = await require('./insert_recommandation_review')(pool, {
      book_id: book2_id,
      attr: attr2,
      user_id: req.body.user_id,
      rating_value: req.body.rating2
    });
  } else {
    book2_id = -1;
  }

  //console.log("################### Book 2 track end ##############")

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
  attr = [], i = 0, j = 0;
  while(i < attr1.length && j < attr2.length) {
    if(attr1[i].id == attr2[j].id) {
      attr.push({id: attr1[i].id,
                 val: (attr1[i].val + attr2[j].val)/2});
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
  ids = await require('./recommendation')(
    pool, [book1_id, book2_id], attr);

  //Get the information for the recommended books
  recommendations = await require('./book')(pool, ids);
  
  //Send the results back to the client
  res.send(recommendations);
}

//test
if(process.argv[2] === 'test') {
  if(process.argv.length != 5) {
//console.log('Please provide 2 book names to test\n'
           + '> node magic.js test "joan of arc" "huckleberry finn"');
  } else {
    const fetch = require('node-fetch');
    (async () => {
      let hi = await fetch('http://159.65.97.145:8765/magic', {
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json'},
        method : 'POST',
        body: JSON.stringify({
          book1 : {
            asin: '11111111',
            amazonURL: 'http:adadwdawdaw',
            description: 'string',
            imageURL: 'string',
            title: "TEST_ADD",
            author: 'string'
          },
          rating1:      4,
          attr1id1:     1,
          attr1val1:    10,
          attr1id2:     5,
          attr1val2:    8,
          attr1id3:     18,
          attr1val3:    6,
          book2 : {
            asin: '22222222222',
            amazonURL: 'http:adadwdawdaw',
            description: 'string',
            imageURL: 'string',
            title: "TEST_ADD",
            author: 'string'
          },
          rating2:      5,
          attr2id1:     2,
          attr2val1:     8,
          attr2id2:     5,
          attr2val2:    10,
          attr2id3:     20,
          attr2val3:    7,
          user_id:      1,
          test:         true
        })
      });
      let res = await hi.json();
      for(r of res) {
//console.log(r.imageURL);
      }
    })();
  }
}
