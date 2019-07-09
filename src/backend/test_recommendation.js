const fetch = require('node-fetch');
async function test(test, body) {
    var hi = await fetch('http://localhost:8765/recommendation', {
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json'},
        method : 'POST',
        body: JSON.stringify(body)
    });
    var res = await hi.json();
    console.log(test + ': ', JSON.stringify(res));

}

(async () => {
  //test 1: send a direct match (1101)
  //leave attr ids unsorted to ensure they sort properly
  test('test 1', {
      book_id: 1,
      attr: [
          {id: 1, value: 3},
          {id: 13, value: 8},
          {id: 2, value: 4}
      ]
  });

  await new Promise(done => setTimeout(done, 3000));

  //test 2: send a direct match, but exclude that book
  //see what the next closest match is
  test('test 2', {
      book_id: 1101,
      attr: [
          {id: 1, value: 3},
          {id: 13, value: 8},
          {id: 2, value: 4}
      ]
  });

  await new Promise(done => setTimeout(done, 3000));

  //test 3: send bad attribute values, see if they clamp
  //also send "no" book
  test('test 3', {
      book_id: -1,
      attr: [
          {id: -2, value: 3},
          {id: 1, value: -2},
          {id: 2, value: 20}
      ]
  });

})();
