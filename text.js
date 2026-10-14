//This is a test js file. I misspelled it and now I'm to lazy to correct it.


let weatherData =
  "https://api.open-meteo.com/v1/forecast?latitude=48.023&longitude=37.8022&hourly=temperature_2m,weather_code&current=weather_code,temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,showers,snowfall,rain";

let weather = fetch(weatherData)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    
      console.log(data)
    
  })