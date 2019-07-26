/*
Search AWS for a book

XXX For magic, only returns the top result

Body of request:
string


Body of response:
{
  asin: string,
  amazonURL: string,
  description: string,
  imageURL: string,
  title: string,
  author: string
}

Note:
In my opinion, we really don't need any other information about the book.
The asin (amazon standard id number) is probably the only "barcode" like
number needed.  ISBN, EAN, UPC aren't included with each request, and
ISBNs are either 10 digit (pre 2007) or 13 digit (post 2007).

If we end up needed to add more information to the bookbranch DB when
we add a new book then we should gather that data and prune it here
and keep it consistent until we add the book, to avoid having to query
amazon again.
*/

module.exports = async (search) => {
  console.log('\nSearching for book on AWS: ' + search);

  let response, result, description;

  const {OperationHelper} = require('apac');
  const searcher = new OperationHelper({
    awsId:     'AKIAIANIRJALOZBL4MZQ',
    awsSecret: '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',
    assocId:   'bookbch-20',
    maxRequestsPerSecond: 1
  });

  try {
    response = await searcher.execute(
      'ItemSearch', {
        'SearchIndex': 'Books',
        'Keywords': search,
        'ResponseGroup': 'ItemAttributes,Images,EditorialReview'
    });
  } catch(e) {
    console.log(e);
  }
  result = response.result.ItemSearchResponse.Items.Item
  console.log(result.length);

  //Build the response
  //need to verify each field exists
  //response = []
  //for(r of result) {
  let i = 0;
  while(i < result.length &&
        result[i].ItemAttributes.ProductGroup !== 'Book') {
    ++i;
  }
  r = result[i];
    /*if(r.ItemAttributes.ProductGroup !== 'Book')
      continue;*/
    let book = {};
    if(r.EditorialReviews && r.EditorialReviews.EditorialReview){
      description = r.EditorialReviews.EditorialReview;
      //console.log(r.EditorialReviews.EditorialReview)
      if(Array.isArray(description))
        description = description[0];
      book['description'] = description.Content;
    } else {
      book['description'] = '';
    }
    book['asin'] = r.ASIN;
    book['amazonURL'] = r.DetailPageURL;
    if(r.LargeImage && r.LargeImage.URL)
      book['imageURL'] = r.LargeImage.URL;
    else
      continue;
    if(r.ItemAttributes.Title)
      book['title'] = r.ItemAttributes.Title;
    else
      continue;
    if(r.ItemAttributes.Author)
      book['author'] = r.ItemAttributes.Author;
    else
      continue;
    /*if(r.ItemAttributes.PublicationDate)
          book['pubDate'] = r.ItemAttributes.PublicationDate;
    else  book['pubDate'] = '';
    */
    /*response.push(book);
  }
  console.log(response)
  res.send(response);
  */
  return book;
}

//test
if(process.argv[2] == 'test') {
  const fetch = require('node-fetch');
  (async () => {
    let hi = await fetch('http://localhost:8765/find_book', {
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
      method : 'POST',
      body: JSON.stringify({search: 'the hunger game'})
    });
    let res = await hi.json();
    console.log('test: ' + JSON.stringify(res) + '\n');
  })();
}
