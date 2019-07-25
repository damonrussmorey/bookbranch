/*
Fetch wrapper for front end
*/
export class Backend {
  async function get(route) {
    let res = await fetch('http://localhost:8765/' + route);
    res = await res.JSON();
    return res;
  }

  async function post(route, body) {
    let res = await fetch('http://localhost:8765/' + route, {
      headers: {
          'content-type': 'application/json',
          Accept: 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    });
    res = await res.JSON();
    return res;
  }

  /*
  After the user has entered in attributes and and values
  for the 2 books selected, call this function with all the
  values that we need to put in the db

  Input: 2 Book objects
  
  Output: Array of Book objects
  */
  async function whereTheMagicHappens (book1, book2) {

  }
}

/*
Book object used to communicate between front and back ends

TBD:
  How search is gonna work
  How to return results from search
*/
export class Book {
  constructor() {
    this.book_id = -1;
    this.attr = [];
    this.rating = -1;
    this.asin = -1;
    this.amazonURL = '';
    this.imageURL = '';
    this.title = '';
    this.author = '';
    this.description = '';
    this.user_id = -1;
  }

  /*//copy other book
  copy(other) {
    this.book_id = other.book_id;
    this.rating = other.;
    this.asin = other.;
    this.amazonURL = other.;
    this.imageURL = other.;
    this.title = other.;
    this.author = other.;
    this.description = other.;
    this.user_id = other.;
  }*/

  addAttribute(id1, val1, id2, val2, id3, val3) {
    this.attributes.push({
      id: id1,
      val: val1
    });
    this.attributes.push({
      id: id2,
      val: val2
    });
    this.attributes.push({
      id: id3,
      val: val3
    });
  }

  /*//Construct a book with information from the database 
  static async fromDatabase(id) {
    let result = await post('book', id);
    return result;
  }*/
}

/*example usage
import Backend from '../utilities'
let attr = await Backend.get('attributes');
let book_info = await Backend.post('keyword', {keyword_search = 'the hunger games'});
