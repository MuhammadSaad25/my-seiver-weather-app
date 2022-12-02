import React from 'react'
import axios from "axios"
import './weather.css'
import { useState } from 'react'


function App() {

    const [weatherData, setWeatherData] = useState(null)
    const [cityName, setCityName] = useState("")
    // const API = `https://saad-weather.cyclic.app`;
    const API = `http://localhost:3001`;

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("I am click handler")
        axios.get(`${API}/weather/${cityName}`)
            .then(response => {
                console.log("response: ", response.data);

                setWeatherData(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })
    }

    return (
        <div className="main">

            <div className="nav_div">
                <h1 className='heading'>Weather App</h1>
                <form onSubmit= {submitHandler}>
                <input type="text" id="city" placeholder="enter your city name" required
                    onChange={(e) => { setCityName(e.target.value) }} />
                    {/* <input  type="text"  placeholder="Enter your City name"/> */}
                </form>
            </div>

            {(weatherData === null) ? null :






                <div className="card">


                    <div className="result_div">

                        <div className="img_div" >
                            <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" alt="" id="weather_icon" />
                        </div>
                        <div className="temp_result">
                            <div id="tempC">{Math.round(weatherData?.tempC)}°C</div>
                            <div id="tempF">{Math.round(weatherData?.tempF)}°F</div>
                        </div>

                    </div>

                    <div className="sub">
                        <div className="left">
                            <div id="time">{new Date().toDateString()}<br/>Current Date </div>
                            <div id="city_name">{weatherData.city}</div>
                            <div id="feels_like_c">Feels Like:{weatherData.ftempC}°C</div>
                            <div id="humidity">Humidity:{weatherData.humidity}%</div>
                            <div id="wind_speed_kph">Wind Speed:{weatherData.windKPH}KP/H</div>

                        </div>

                        <div className="right">
                            <div id="last_update">{new Date().toDateString()} <br/> Last Update</div>
                            <div id="weather_condition">{weatherData.text} </div>
                            <div id="feels_like_f">Feels Like:{weatherData.ftempC}°F</div>
                            <div id="visibility">Visibility {weatherData.visibility}</div>
                            <div id="wind_speed_mph">Wind Speed:{weatherData.windMPH}MP/H</div>
                        </div>
                    </div>

                </div>

            }
        </div>
    );
}

export default App;