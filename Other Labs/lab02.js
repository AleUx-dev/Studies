let CURRENCY = {
    "USD": 1,
    "EUR": 0.85,
    "GBP": 0.75,
    "JPY": 110.0,
    "CAD": 1.25,
    "UAH": 36.92,
};
//Currency rates relative to USD


function convertCurrency() {
      let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let convertedAmount = amount * (CURRENCY[toCurrency] / CURRENCY[fromCurrency]);
  
        //connect to html
        //console.log("Converted Amount: " + convertedAmount.toFixed(2) + " " + toCurrency);
        document.getElementById("result").innerHTML = "Converted Amount: " + convertedAmount.toFixed(2) + " " + toCurrency;    
        return convertedAmount.toFixed(2);
    
};

document.getElementById('convert').addEventListener('click', function(e){ 
        e.preventDefault();
   });

