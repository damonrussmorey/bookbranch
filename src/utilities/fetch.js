/*
Fetch wrapper for front end
*/
module.exports.get = async (route) => {
  let res = await fetch('http://localhost:8765/' + route);
  res = await res.JSON();
  return res;
}

module.exports.post = async (route, body) => {
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

/*example usage
const backend = require('../utilities/fetch')
let attr = await backend.get('attributes');
let book_info = await backend.post('keyword', {keyword_search = 'the hunger games'});
