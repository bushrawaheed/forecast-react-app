import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

function Check(mapValue){

    if(mapValue.includes('CLEAR')  ||  mapValue.includes('PARTLY')){
        return "orange";
    }

    if(mapValue.includes('CLOUDY')  ||  mapValue.includes(`FOG`)){
        return "grey";
    }
    if(mapValue.includes('RAIN')  ||  mapValue.includes(`SNOW`)){
        return "darkblue";

}
}
export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG"
  };
  const mapValue = codeMapping[props.code]
  return (
    <ReactAnimatedWeather
      icon={mapValue}
      color= {Check(mapValue)}
      size={50}
      animate={true}
    />
  );
}