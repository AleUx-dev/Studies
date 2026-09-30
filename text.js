let CURRENCY = {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.75,
    "JPY": 110.0,
    "CAD": 1.25,
    "UAH": 36.92,
};
//Currency rates relative to USD


function convertCurrency(amount, fromCurrency, toCurrency) {
    let convertedAmount = amount * (CURRENCY[toCurrency] / CURRENCY[fromCurrency]);
return convertedAmount.toFixed(2);
}


 console.log(convertCurrency(100, "USD", "EUR")); // Example usage