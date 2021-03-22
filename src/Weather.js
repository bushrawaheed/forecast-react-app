import React,{useState} from "react";
import axios from 'axios';
import "./Weather.css";
export default function Weather(props) {
  const[ready,setReady]=useState(false);
  const [weatherData,setWeatherData]=useState({});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
 city: (response.data.name),
    temperature: Math.round(response.data.main.temp),
    date:(response.data.dt),
    description:(response.data.weather[0].description),
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: Math.round(response.data.main.temp_min),
    wind: Math.round(response.data.wind.speed),
    Temp_min: Math.round(response.data.main.temp_min),
        });
  }
  if(weatherData.ready){
    return (
       <div className="Weather">
        <div className="container">
          <div class="weather-widget">
           <div className="weather">
             <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search a city..."
                  className="form-control"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li className="current-date">Last updated:{weatherData.date}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="imagefix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  id="icon"
                />
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/" class="active">
                    °C|
                  </a>
                  <a href="/">°F</a>
                </span>
              </div>
            </div>
            <div className="col-6">
              <ul className="weather-description">
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
                <li>Temp_min: {weatherData.Temp_min} °C</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
}
  else{
 const apiKey="2129fd04df3dd86efb944950e327f7a5";
   let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse); 
return"App is currently loading..."; 
}
}