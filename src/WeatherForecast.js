import React,{useState}from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays";

export default  function WeatherForecast(props){
    const [loaded,setLoaded]=useState(false); 
    const [forecast,setForecast]=useState(null); 

    function handleForecast(response){ 
         setForecast(response.data);
         setLoaded(true);
     }

     if(loaded && props.city === forecast.city.name){
     return(
     <div className="WeatherForecast row ">
         {forecast.list.slice(0, 6).map(function(forecastItem){
             return <ForecastDays data={forecastItem}/>;
        })}
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