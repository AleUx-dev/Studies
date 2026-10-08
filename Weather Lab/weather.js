let weatherData = "https://api.open-meteo.com/v1/forecast?latitude=48.023&longitude=37.8022&hourly=temperature_2m&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,relative_humidity_2m,apparent_temperature&timezone=Europe%2FMoscow"

let backgroundColor = 

fetch(weatherData)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        function weatherChange() {
           if (data.current.rain === 1) {
                document.getElementById("message").textContent = "Don't forget your umbrella!";
            } else if (data.current.snowfall === 1) {
                document.getElementById("message").textContent = "Time to build a snowman!";
            } else if (data.current.showers === 1) {
                document.getElementById("message").textContent = "Maybe wear a raincoat!";
            } else {
                document.getElementById("message").textContent = "Beautiful day today!";
            };
            changeBg(data.current.rain, data.current.snowfall, data.current.showers);
        };
//Current temperature and time
document.getElementById("temperatureResult").textContent = "Current temperature:" + " " + data.current.temperature_2m + "°C";
document.getElementById("timeResult").textContent = "Current time:" + " " + data.current.time;
document.getElementById("humidityResult").textContent = "Current humidity:" + " " + data.current.relative_humidity_2m + "%";
 })
    .catch((err) => {
        console.error("Error fetching weather data:", err);
    });

