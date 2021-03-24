import React,{useState}from "react";
export default function WeatherTemperature(props){
    const[units,setUnits]=useState(`celsius`);
    return( <div className="WeatherTemperature">
 <strong>{props.celsius}</strong>
                <span className="units">
                  <a href="/" class="active">
                    °C|
                  </a>
                  <a href="/">°F</a>
                </span>
    </div>
   
                );
}