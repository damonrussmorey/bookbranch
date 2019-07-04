/*
Book Recommendation Request
Client sends a book title and 3 attribute values
Body of request:
{
  title:...
  attr:
  [
    {
      name:...
      val:...
    }
  ] //len 3
}
Assume the names of the attributes are correct
Attribute values are integers from 1 to 10 inclusive
We need the book to skip it from matching to itself
*/
module.exports = (req, res) => {
  var bestMatch = {id:-1, distance:-1};
  var ourBookID;
  var attrIDs;
  pool.getConnection((err, connection) => {
    if (err) throw err;

    //find our book ID and attribute IDs
    connection.query('SELECT id, title FROM books WHERE title = "'
          + req.body.title + '";', (err, result) => {
      if (err) throw err;
      if (!result) throw 'Invalid book title';
      console.log(result.id);
      outBookID = result.id;
    });
    connection.query('SELECT id, name FROM attributes '
            + 'WHERE name = "' + req.body.attr[0].name
            + '" OR name = "'  + req.body.attr[1].name
            + '" OR name = "'  + req.body.attr[2].name + '";',
            (err, result) => {
      if (err) throw err;
      if (!result) throw 'Invalid attribute name';
      console.log(result.id);
      attrIDs = result.id;
    });
    
    //For each book in the database, find the euclidean distance
    //for the 3 attributes given, ignore the other attributes
    //if no attribute score for a book exists, call its value 0

    //match book ids and attribute ids to get average_score,
    //which is an average of all the attributes scores for all
    //the reviews

    connection.query('SELECT book_id, average_score FROM '
      + 'book_attributes WHERE NOT book_id = ' + ourBookID
      + ' AND (attribute_id = ' + attrIDs[0]
        + ' OR attribute_id = ' + attrIDs[1]
        + ' OR attribute_id = ' + attrIDs[2] + ');',
      (err, result) => {
        console.log(result);
    });

/*
    //XXX Instead of looping queries, do 1 query of table and parse it in Javascript
    for(id of bookIDs) {
      //skip book we're basing the recommendation on
      if(id == ourBookID)
        continue;
      var x = 0;
      for(var i = 0; i < attrIDs.length; ++i) {
        connection.query('SELECT average_score FROM '
          + 'book_attributes WHERE book_id = "' + id
          + '" AND attribute_id = "' + attrIDs[i]
          + '";', (err, result) => {
          if(err) throw err;
          var score = 0;
          console.log(result.average_score);
          if(result)
            score = result.average_score;
          x += Math.pow(req.body.attr[i].val - score, 2);
        });
      }
      x = Math.sqrt(x);
      if(bestMatch.id = -1 || x < bestMatch.distance) {
        bestMatch.id = id;
        bestMatch.distance = x;
      }
    }
    */
  });
}
