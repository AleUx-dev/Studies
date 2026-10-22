let weatherData =
  "https://api.open-meteo.com/v1/forecast?latitude=48.023&longitude=37.8022&hourly=temperature_2m,weather_code&current=weather_code,temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,showers,snowfall,rain";

let weather = fetch(weatherData)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //Declaring variables
    let weatherCondition = "Sunny day!";
    let bodyStyle = document.getElementById("bod");
    let weatherBoxStyle = document.getElementsByClassName("weatherBox")[0];
    //Changing the message and background depending on the weather condition 
      if (data.current.weather_code === 1) {
        //  weatherBoxStyle.classList.add("rain");
        // bodyStyle.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/04/05/11/39/rain-316579_960_720.jpg')";
        // weatherCondition =
        //   "Don't forget your umbrella!";      
        setWeather("url('https://cdn.pixabay.com/photo/2014/04/05/11/39/rain-316579_960_720.jpg')", "rain", "Don't forget your umbrella!");
      } else if (data.current.weather_code === 2) {
        // weatherBoxStyle.classList.add("snow");
        // bodyStyle.style.backgroundImage = "url('https://img.magnific.com/free-vector/realistic-snowfall-background_23-2148400220.jpg?semt=ais_hybrid&w=740&q=80')";
        // weatherCondition  =
        //   "Time to build a snowman!";    
        setWeather("url('https://img.magnific.com/free-vector/realistic-snowfall-background_23-2148400220.jpg?semt=ais_hybrid&w=740&q=80')", "snow", "Time to build a snowman!");

      } else if (data.current.weather_code === 3) {
        // weatherBoxStyle.classList.add("overcast");
        // bodyStyle.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2K7cICtragLnFtpDbULeYR8xmDqebEx2eDK3kuLthBLkuVIW2O2LsVk&s=10')";
        // weatherCondition  =
        //   "Maybe wear a warm jacket!";
        setWeather("url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2K7cICtragLnFtpDbULeYR8xmDqebEx2eDK3kuLthBLkuVIW2O2LsVk&s=10')", "overcast", "Maybe wear a warm jacket!");
      };
    //Applying the message to HTML
    document.getElementById("message").textContent = weatherCondition;

    // Displaying current temperature, time and humidity. Data shown from API
    document.getElementById("temperatureResult").textContent =
      "Current temperature:" + " " + data.current.temperature_2m + "°C";
    document.getElementById("timeResult").textContent =
      "Current time:" + " " + data.current.time;
    document.getElementById("humidityResult").textContent =
      "Current humidity:" + " " + data.current.relative_humidity_2m + "%";


  })

  //Error catch
  .catch((err) => {
    console.error("Error fetching weather data:", err);
  });


  function setWeather(bodyStyle, boxStyle, weatherAdvice) {
    
    document.getElementById("bod").style.backgroundImage = bodyStyle;
    document.getElementsByClassName("weatherBox")[0].classList.add(boxStyle);
    document.getElementById("message").textContent = weatherAdvice;
  }