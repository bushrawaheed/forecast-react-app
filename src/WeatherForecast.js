import React,{useState}from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
export default  function WeatherForecast(props){
    const [loaded,setLoaded]=useState(false); 
       const [forecast,setForecast]=useState(null); 

    function handleForecast(response){ 
         setForecast(response.data);
         setLoaded(true);
     }
     if(loaded){
     return(
     <div className="WeatherForecast row">
         <div className="col">
             {new Date(forecast.list[0].dt* 1000).getHours()}:00
         <WeatherIcon code={forecast.list[0].weather[0].icon}/>
         {Math.round(forecast.list[0].main.temp)} °C
           </div>
    </div> 
    );
   }
     else{
let apiKey="2129fd04df3dd86efb944950e327f7a5";
        let apiUrl=`http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleForecast);
        return null;

     }
        }