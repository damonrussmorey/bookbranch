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

Request Body
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
*/

module.exports = async (pool, req, res) => {
  attr1 = [{id: attr1id1, val: attr1val1}];
  if(attr1.filter(e => e.id === attr1id2).length == 0)
    attr1.push({id: attr1id2, val: attr1val2});
  if(attr1.filter(e => e.id === attr1id3).length == 0)
    attr1.push({id: attr1id3, val: attr1val3});

  book1 = require('./find_book')(pool, req.body.title1);
  book1_id = require('./insert_new_book')(pool, book1);
  success = require('./insert_recommandation_review')(pool, {
    book_id: book1_id,
    attr: attr1,
    user_id: user_id,
    rating_value: rating1
  });
    
  let attr2 = [{id: attr2id1, val: attr2val1}];
  if(attr2.filter(e => e.id === attr2id2).length == 0)
    attr2.push({id: attr2id2, val: attr2val2});
  if(attr2.filter(e => e.id === attr2id3).length == 0)
    attr2.push({id: attr2id3, val: attr2val3});


  book2 = require('./find_book')(pool, req.body.title2);
  book2_id = require('./insert_new_book')(pool, book2);
  success = require('./insert_recommandation_review')(pool, {
    book_id: book2_id,
    attr: attr2,
    user_id: user_id,
    rating_value: rating2
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
  
  let recommendation_ids = require('./recommendation')(
    pool, [book1_id, book2_id], attr);

  let recommendations = require('./books')(recommendation_ids);
  
  res.send(recommendations);
}


//test
if(argv
