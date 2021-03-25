import React,{useState} from "react";
import axios from 'axios';
import "./Weather.css";
import WeatherSearch from "./WeatherSearch";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  const [weatherData,setWeatherData]=useState({ready:false});
  const[city,setCity]=useState(props.defaultCity); 

 function handleResponse(response){
    setWeatherData({
    ready:true,
    city: (response.data.name),
    temperature: Math.round(response.data.main.temp),
    date:new Date(response.data.dt *1000),
    description:(response.data.weather[0].description),
    icon: response.data.weather[0].icon,
    humidity: Math.round(response.data.main.temp_min),
    wind: Math.round(response.data.wind.speed),
    Temp_min: Math.round(response.data.main.temp_min),
        });
  }
  function search(){
 const apiKey="2129fd04df3dd86efb944950e327f7a5";
   let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse); 
}
  function handleSubmit(event){
event.preventDefault();
search();
  }
function handleChange(event){
setCity(event.target.value);
}

 
  if(weatherData.ready){
    return (
       <div className="Weather">
        <div className="container">
          <div class="weather-widget">
           <div className="weather">
             <form onSubmit={handleSubmit}>
             <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search a city..."
                  className="form-control"
                  autocomplete="off"
                  onChange={handleChange}
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
            </form>
               <WeatherSearch data={weatherData}/>
               <WeatherForecast city={weatherData.city}/>
          </div>
      </div>
    </div>
 </div>
  );
}
  else{
search();
return"App is currently loading..."; 
}
}