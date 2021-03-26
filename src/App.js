import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
     <div className="container">
       <Weather defaultCity="Munich"/>
     <footer>This project was coded by <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">Bushra Waheed</a> and is <a href="https://github.com/bushrawaheed/forecast-react-app" target="_blank">open-sourced on Github</a>
    </footer>
    </div>
     </div>
  );
}

