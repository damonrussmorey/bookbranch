/*
Book Recommendation Request
Client sends a book id and any number of attribute ids and values
Returns the book_id of the recommended book

Body of request:
{
  book_id: int
  attr:
  [
    {
      id: int
      val: int [1-10]
    }
  ] //up to 3?
}

Body of response:
{
  book_id: int
}

Assume the names of the attributes are correct
Attribute values are integers from 1 to 10 inclusive
We need the book to skip it from matching to itself

This can be used without needing to exclude a book, just send book_id: -1.
*/
module.exports = (pool, req, res) => {
  console.log('\n\nBook Recommendation\n')

  //sort attr ids in ascending order
  req.body.attr.sort((a,b) => {
    if(a.id > b.id) return 1;
    else  return -1;
  })

  //ensure proper attribute values
  //invalid ids will simply not match
  //invalid values will mess up distance calculation, so clamp them
  for(attr of req.body.attr) {
    if(attr.value < 1)
      attr.value = 1;
    if(attr.value > 10)
      attr.value = 10;
  }

  //display the adjusted request for testing
  console.log('Request Body:\n' + req.body);

  var bestMatch = {id:-1, distance:-1};
  pool.getConnection((err, connection) => {
    //For each book in the database, find the euclidean distance
    //for the 3 attributes given, ignore the other attributes
    //if no attribute score for a book exists, call its value 0

    //match book ids and attribute ids to get average_score,
    //which is an average of all the attributes scores for all
    //the reviews

    connection.query('SELECT book_id, attribute_id, average_score FROM '
      + 'book_attributes WHERE NOT book_id = ' + req.body.book_id
      + ' AND (attribute_id = ' + req.body.attr[0].id
        + ' OR attribute_id = ' + req.body.attr[1].id
        + ' OR attribute_id = ' + req.body.attr[2].id
        + ') ORDER BY book_id, attribute_id;',
      (err, result) => {
        var i = 0, j, x;
        while(i < result.length) {
          var book_id = result[i].book_id;
          x = j = 0;
          while(i < result.length && result[i].book_id == book_id) {
            while(result[i].attribute_id > req.body.attr[j].id)
              x += Math.pow(req.body.attr[j++].value, 2);
            x += Math.pow(result[i].average_score - req.body.attr[j].value, 2);
            ++i;
            ++j;
          }
          while(j < req.body.attr.length)
            x += Math.pow(req.body.attr[j++].value, 2);
          x = Math.sqrt(x);
          if(bestMatch.id == -1 || x < bestMatch.distance) {
            console.log(`New best: distance from ${result[i-1].book_id}: ${x}`)
            bestMatch.distance = x;
            bestMatch.id = result[i-1].book_id
          }
        }    
      //return the best match
      res.send({book_id: bestMatch.id});
    });
  });
}
