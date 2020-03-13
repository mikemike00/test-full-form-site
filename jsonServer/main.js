const axios = require('axios');

axios.post('http://localhost:3000/movie', {
    id: 2,
    title: 'Fred',
    author: 'Blair',
    
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
});


