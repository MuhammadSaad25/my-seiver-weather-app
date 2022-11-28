import React from 'react'
// import data from "./data.json"
import axios from "axios"
import './weather.css'
// import { useState } from 'react'



const weather = () => {
    // const {data, setData} = setState({})

    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const data = res.data;
            this.setState({ data });
        })

    return (
        <ul>
            {
                this.state.data
                    .map(data =>
                        <li>{data.tempC}</li>
                    )
            }
        </ul>

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

export default weather