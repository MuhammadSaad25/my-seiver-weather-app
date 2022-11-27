import React from 'react'

const App = (city) => {

  App.get(
    `../../server.mjs=${city}`
    // `https://api.weatherapi.com/v1/current.json?key=b52a1217af194e27bfa155504223006&q=${city}`
  )
    .then(function (response) {
      // handle success
      const data = response.data;

      console.log(data);
    }
    )
    .then(function (response) {
      // handle success
      const data = response.data;

      console.log(data);
    })



  return (
    <div>

      <div class="nav_div">
        <h1>Weather App</h1>
        <form onsubmit="myFunction(); return false">
          <input type="text" id="city" placeholder="Enter your City name" />
        </form>

      </div>
      <div class="card">


        <div class="result_div">

          <div class="img_div" >
            <img src="" alt="" id="weather_icon" />
          </div>
          <div class="temp_result">
            <div id="tempC"></div>
            <div id="tempF"></div>
          </div>

        </div>

        <div class="sub">
          <div class="left">
            <div id="time"></div>
            <div id="city_name"></div>
            <div id="feels_like_c"></div>
            <div id="humidity"></div>
            <div id="wind_speed_kph"></div>

          </div>

          <div class="right">
            <div id="last_update"></div>
            <div id="weather_condition"></div>
            <div id="feels_like_f"></div>
            <div id="visibility"></div>
            <div id="wind_speed_mph"></div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App