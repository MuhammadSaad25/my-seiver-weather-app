import React from 'react'
// import data from "./data.json"
import axios from "axios"
import './weather.css'
import { useState } from 'react'



const Weather = () => {
    // const [data, setData]

    // const [data, setData] = useState([])

    // axios.get(`https://saad-weather.cyclic.app./weather`)
    // .then(response => {
    //     console.log("response: ", response.data);

    //     setData(response.data);

    // })
    // .catch(err => {
    //     console.log("error: ", err);
    // })

    const [weatherData, setWeatherData] = useState([])
    // const [city, setCity] = useState("")

    const submitHandler = (e) => {
        // e.preventDefault();

        console.log("I am click handler")
        axios.get(`https://saad-weather.cyclic.app./weather`)
            .then(response => {
                console.log("response: ", response.data);

                setWeatherData(response.data);
            })
            .catch(err => {
                console.log("error: ", err);
            })

    }
    submitHandler()

    return (


        <div class="main">



            <div class="nav_div">
                <h1>Weather App</h1>
                <form onsubmit="myFunction(); return false">
                    <input type="text" id="city" placeholder="Enter your City name" />
                </form>
            </div>

            <div class="card">


                <div class="result_div">

                    <div class="img_div" >
                        <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" alt="" id="weather_icon" />
                    </div>
                    <div class="temp_result">
                        <div id="tempC">{Math.round(weatherData?.tempC)}°C</div>
                        <div id="tempF">{Math.round(weatherData?.tempF)}°F</div>
                    </div>

                </div>

                <div class="sub">
                    <div class="left">
                        <div id="time">{new Date().toDateString()}</div>
                        <div id="city_name">{weatherData.city}</div>
                        <div id="feels_like_c">Feels Like:{weatherData.ftempC}°C</div>
                        <div id="humidity">Humidity:{weatherData.humidity}%</div>
                        <div id="wind_speed_kph">Wind Speed:{weatherData.windKPH}KP/H</div>

                    </div>

                    <div class="right">
                        <div id="last_update">{new Date().toDateString()}Last Update</div>
                        <div id="weather_condition">{weatherData.text}</div>
                        <div id="feels_like_f">Feels Like:{weatherData.ftempC}°F</div>
                        <div id="visibility">Visibility{weatherData.visibility}KM</div>
                        <div id="wind_speed_mph">Wind Speed:{weatherData.windMPH}MP/H</div>
                    </div>
                </div>

            </div>
        </div>


        // <div>

        //         <div>
        //             {/* {responce.data.tempC} */}
        //             Temperature: {Math.round(weatherData?.tempC )}°C
        //             <br />
        //             min: {Math.round(weatherData?.main?.temp_min)}°C
        //             <br />
        //             max: {Math.round(weatherData?.main?.temp_max)}°C
        //         </div>
        // </div>

        // <ul>

        //     {/* // this.state.data */}
        //     {/* // .map(data => */}
        //     <li>{data.tempC}</li>
        //     {/* // ) */}

        // </ul>

        // <div>
        //     {data.map(data => {
        //         return (

        //             <div class="main">



        //                 <div class="nav_div">
        //                     <h1>Weather App</h1>
        //                     <form onsubmit="myFunction(); return false">
        //                         <input type="text" id="city" placeholder="Enter your City name" />
        //                     </form>

        //                 </div>


        //                 <div class="card">


        //                     <div class="result_div">

        //                         <div class="img_div" >
        //                             <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" alt="" id="weather_icon" />
        //                         </div>
        //                         <div class="temp_result">
        //                             <div id="tempC">{data.tempC}C</div>
        //                             <div id="tempF">{data.tempF}F</div>
        //                         </div>

        //                     </div>

        //                     <div class="sub">
        //                         <div class="left">
        //                             <div id="time">{new Date().toDateString()}</div>
        //                             <div id="city_name">{data.city}</div>
        //                             <div id="feels_like_c">Feels Like:{data.ftempC}C</div>
        //                             <div id="humidity">Humidity:{data.humidity}%</div>
        //                             <div id="wind_speed_kph">Wind Speed:{data.windKPH}KP/H</div>

        //                         </div>

        //                         <div class="right">
        //                             <div id="last_update">{new Date().toDateString()}Last Update</div>
        //                             <div id="weather_condition">{data.text}</div>
        //                             <div id="feels_like_f">Feels Like:{data.ftempC}F</div>
        //                             <div id="visibility">Visibility{data.visibility}KM</div>
        //                             <div id="wind_speed_mph">Wind Speed:{data.windMPH}MP/H</div>
        //                         </div>
        //                     </div>

        //                 </div>
        //             </div>


        // <div>
        //     {data.city}
        //     {data.temp}
        // </div>
        // )
        // })}
        // </div >
    )
}

export default Weather