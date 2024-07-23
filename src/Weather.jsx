import { useState } from "react"
import axios from "axios"

function Weather() {

    const [city, setcity] = useState("")

    const [weather, setweather] = useState("")
    const [loc, setloc] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")


    function handleCity(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca52c0f072397133f9889fa5a827cbeb`)

        weatherData.then(function (success) {
            console.log(success.data);
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
            setloc(success.data.name)
        })
    }

    return (
        <div className="bg-black p-20">
            <div className="bg-green-400 p-10 rounded-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you a weather report about your city !</p>
                <input type="text" placeholder="Enter your City Name" className="border border-black mt-2 rounded-md p-2 outline-none" onChange={handleCity} /><br />
                <button onClick={getWeather} className="bg-black text-white mt-2 border border-black rounded-md p-2">Get Report</button>

                <div className="mt-3">
                    <p><b>Location: </b>{loc}</p>
                    <p><b>Weather: </b>{weather}</p>
                    <p><b>Temperature: </b>{temp}</p>
                    <p><b>Description: </b>{desc}</p>
                </div>

            </div>


        </div>
    )
}

export default Weather