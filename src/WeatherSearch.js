import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherSearch(props){
    return(
 <div className="WeatherSearch">
            <h1>{props.data.city}</h1>
            <ul>
              <li><FormattedDate date={props.data.date} /></li> 
             <li className="text-capitalize">{props.data.description}</li>
            </ul>
          <div className="row">
            <div className="col-6">
              <div className="imagefix weather-temperature">
               <div className="float-left">
                
               <WeatherIcon code={props.data.icon} />
               </div>     
               <WeatherTemperature celsius={props.data.temperature}/>       
               
              </div>
            </div>
            <div className="col-6">
              <ul className="weather-description">
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
                <li>Temp_min: {props.data.Temp_min} °C</li>
              </ul>
            </div>
          </div>
        </div>
    );
}
