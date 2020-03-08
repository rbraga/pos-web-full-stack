const request = require('request');
const api_token = '3PxCd7uXqtculC3h0aRWykDRAcu7EznuetFNudOKVbngdt9ZuT3xJwpkYsj6';

const cotacao = (symbol, callback) => {
    const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`;

    request({url: url, json: true},(err, response) => {
        if (err) {
            throw new Error(`Something went wrong: ${err}`);
        }

        const parsedJSON = response.body;
        
        if (parsedJSON.data === undefined) {
            throw new Error('No data found');
        }

        const data = {
            symbol: parsedJSON.data[0].symbol,
            description: parsedJSON.data[0].name,
            price: parsedJSON.data[0].price,
            price_open: parsedJSON.data[0].price_open,
            close_yesterday: parsedJSON.data[0].close_yesterday,
            day_high: parsedJSON.data[0].day_high,
            day_low: parsedJSON.data[0].day_low
        };

        callback(data);
    })
}

module.exports = cotacao;