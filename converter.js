// enable modern mode
'use strict';

// basic variables
let apiKey = 'c9555a7ee515159104fdba587ac2b480';
let apiUrl = 'http://api.exchangeratesapi.io/v1/latest?access_key=';

// get data from api
let response = await fetch(apiUrl + apiKey);

if (response.ok) {
    let data = await response.json();
    let rates = data.rates
} else {
    // error code goes here
}

// convert function
function convert(amt, curIn, curOut) {
    
}
