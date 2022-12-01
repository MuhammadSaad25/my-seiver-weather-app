import React from 'react'
import axios from "axios"
import './weather.css'
import { useState } from 'react'


function App() {

    const [weatherData, setWeatherData] = useState(null)
    const [cityName, setCityName] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

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

    return (
        <div className="main">

            <div className="nav_div">
                <h1>Weather App</h1>
                <form onSubmit= {submitHandler}>
                    <input type="text" id="city" placeholder="Enter your City name"/>
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
                            <div id="time">{new Date().toDateString()}</div>
                            <div id="city_name">{weatherData.city}</div>
                            <div id="feels_like_c">Feels Like:{weatherData.ftempC}°C</div>
                            <div id="humidity">Humidity:{weatherData.humidity}%</div>
                            <div id="wind_speed_kph">Wind Speed:{weatherData.windKPH}KP/H</div>

                        </div>

                        <div className="right">
                            <div id="last_update">{new Date().toDateString()}Last Update</div>
                            <div id="weather_condition">{weatherData.text}</div>
                            <div id="feels_like_f">Feels Like:{weatherData.ftempC}°F</div>
                            <div id="visibility">Visibility{weatherData.visibility}KM</div>
                            <div id="wind_speed_mph">Wind Speed:{weatherData.windMPH}MP/H</div>
                        </div>
                    </div>

                </div>

            }
        </div>
    );
}

export default App;





// const Weather = () => {

//     const [weatherData, setWeatherData] = useState([])
//     const [city, setCity] = useState("")

//     // useEffect(() => {

//     const submitHandler = (e) => {
//         // e.preventDefault();

//         console.log("I am click handler")
//         axios.get(`https://saad-weather.cyclic.app./weather`)
//             .then(response => {
//                 console.log("response: ", response.data);

//                 setWeatherData(response.data);
//             })
//             .catch(err => {
//                 console.log("error: ", err);
//             })

//     }
//     // submitHandler()
//     // },[]);
//     return (


// <div className="main">



//     <div className="nav_div">
//         <h1>Weather App</h1>
//         <form onSubmit={submitHandler} >
//             <input type="text" placeholder="enter your city name" required
//                 onChange={(e) => { setCityName(e.target.value) }} />
//         </form>
//     </div>

//     <div className="card">


//         <div className="result_div">

//             <div className="img_div" >
//                 <img src="//cdn.weatherapi.com/weather/64x64/night/113.png" alt="" id="weather_icon" />
//             </div>
//             <div className="temp_result">
//                 <div id="tempC">{Math.round(weatherData?.tempC)}°C</div>
//                 <div id="tempF">{Math.round(weatherData?.tempF)}°F</div>
//             </div>

//         </div>

//         <div className="sub">
//             <div className="left">
//                 <div id="time">{new Date().toDateString()}</div>
//                 <div id="city_name">{weatherData.city}</div>
//                 <div id="feels_like_c">Feels Like:{weatherData.ftempC}°C</div>
//                 <div id="humidity">Humidity:{weatherData.humidity}%</div>
//                 <div id="wind_speed_kph">Wind Speed:{weatherData.windKPH}KP/H</div>

//             </div>

//             <div className="right">
//                 <div id="last_update">{new Date().toDateString()}Last Update</div>
//                 <div id="weather_condition">{weatherData.text}</div>
//                 <div id="feels_like_f">Feels Like:{weatherData.ftempC}°F</div>
//                 <div id="visibility">Visibility{weatherData.visibility}KM</div>
//                 <div id="wind_speed_mph">Wind Speed:{weatherData.windMPH}MP/H</div>
//             </div>
//         </div>

//     </div>
// </div>



//     )
// }

// export default Weather