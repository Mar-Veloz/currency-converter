// basic variables
let apiKey = 'c9555a7ee515159104fdba587ac2b480';
let rates;

// functions
async function fetchRates(apiKey) {
    let apiUrl = 'http://api.exchangeratesapi.io/v1/latest?access_key=' + apiKey;

    let response = await fetch(apiUrl);
    
    if (!response.ok) {
	document.getElementById("fetchResult").innerHTML = "<b>Error:</b> fetching conversion rates failed!";
	return
    }
    let result = await response.json();
    if (!result.success) {
	document.getElementById("fetchResult").innerHTML = "<b>Error:</b> fetching conversion rates failed!";
	return
    }
    rates = result.rates;
    let fetchDate = new Date(result.timestamp);
    document.getElementById("fetchResult").innerHTML = "Conversion rates last updated on: " + fetchDate;
    
    let typeOptions = "";
    for (let key in rates) {
	typeOptions += '<option value="' + key + '">' + key + '</option>'
    }

    document.getElementById("typeIn").innerHTML = typeOptions;
    document.getElementById("typeOut").innerHTML = typeOptions;
}

// convert function
function convert(amt, curIn, curOut) {
    return amt / rates[curIn] * rates[curOut];
}

// fetch the rates
fetchRates(apiKey);


