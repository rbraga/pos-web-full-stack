const request = require('request');

const url = 'https://api.worldtradingdata.com/api/v1/stock?symbol=PETR4.SA&api_token=3PxCd7uXqtculC3h0aRWykDRAcu7EznuetFNudOKVbngdt9ZuT3xJwpkYsj6';

request({url: url, json: true},(err, response) => {
    if (err) {
        console.log(err);
    }
    const parsedJSON = response.body;
    console.log(parsedJSON.data[0].symbol);
    console.log(parsedJSON.data[0].name);
    console.log(parsedJSON.data[0].price);
})