const fetch = require('node-fetch');
var hi = fetch('http://localhost:8765', {
    headers: {
        'content-type': 'application/json',
        Accept: 'application/json'},
    method : 'POST',
    body: JSON.stringify({
        title: 'Joan of Arc',
        attr: [
            {name: 'Complex', value: 6},
            {name: 'Adventurous', value: 9},
            {name: 'Brainy', value: 3}    
        ]
    })
});
console.log(hi);