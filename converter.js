// global variables
let rates, apiKey;

// functions
async function fetchRates(apiKey,id) {
    let apiUrl = 'http://api.exchangeratesapi.io/v1/latest?access_key=' + apiKey;

    let response = await fetch(apiUrl);
    
    if (!response.ok) {
	document.getElementById(id).innerHTML = "<b>Error:</b> fetching conversion rates failed!";
	return
    }
    let result = await response.json();
    if (!result.success) {
	document.getElementById(id).innerHTML = "<b>Error:</b> fetching conversion rates failed!";
	return
    }
    rates = result.rates;
    let fetchDate = new Date(result.timestamp*1000);
    document.getElementById(id).innerHTML = "Conversion rates last updated on: " + fetchDate;
}

function convert(amt, curIn, curOut) {
    return amt / rates[curIn] * rates[curOut];
}

function listOptions(id) {
    let options = "";
    for (let key in rates) {
	options += '<option value="' + key + '">' + key + '</option>'
    }

    document.getElementById(id).innerHTML = options;
}
