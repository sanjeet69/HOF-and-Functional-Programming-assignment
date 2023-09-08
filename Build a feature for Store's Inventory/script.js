const priceInUSD = {
    item1 : 15, 
    itme2 : 30, 
    item3 : 45,
    item4 : 60,

};

// exchange rate : 1 USD = 82 INR

const exchangeRate = 82;

function convertToINR (priceInUSD) {
    return priceInUSD * exchangeRate;

}

const priceInInr = Object.keys(priceInUSD).reduce((result, key) => {
    result[key] = convertToINR(priceInUSD[key]);
    return result;
}, {});

console.log(priceInInr);