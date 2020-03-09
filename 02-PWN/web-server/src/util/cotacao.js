const request = require('request');
const api_token = '3PxCd7uXqtculC3h0aRWykDRAcu7EznuetFNudOKVbngdt9ZuT3xJwpkYsj6';

const cotacao = (symbol, callback) => {
    const url = `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${api_token}`;

    request({url: url, json: true},(err, response) => {
        if (err) {
            const error = { 
                message: `Something went wrong: ${err}`
            };
            return callback(null, error);
        }
        
        if (response.body.data === undefined) {
            const error = { 
                message: `No data found`
            };
            return callback(null, error);
        }
        const parsedJSON = response.body.data[0];

        const {symbol, price_open, price, day_high, day_low } = parsedJSON;
        const data = {symbol, price_open, price, day_high, day_low }
        
        return callback(data, null);
    })
}

module.exports = cotacao;