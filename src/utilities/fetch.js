/*
Fetch wrapper for front end
*/
export default class Backend {
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
}

/*example usage
import Backend from '../utilities'
let attr = await Backend.get('attributes');
let book_info = await Backend.post('keyword', {keyword_search = 'the hunger games'});
