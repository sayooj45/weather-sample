
import './App.css';
import {useState} from "react";

const api = {
  key :"6f723743920fb8d7ec720a4f9b9e50f0",
  base :"https://api.openweathermap.org/data/2.5/weather?"
}
function App() {
  const [query,setQuery]=useState('')
  const [weather,setWeather]=useState('')
  
  const search =evt =>{
    
    if(evt.key ==="Enter"){
      fetch(`${api.base}q=${query}&units=metric&appid=${api.key}`)
      .then(res=>res.json())
      .then(result => {setWeather(result);
      setQuery('');
      console.log(result)});
    }
  }

  const dateBuilder=(d)=>{
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

  }

  return (
    <div  className="app">
      <main>
     <div className="search-box">
        <input className="search-bar" type="text" placeholder='search...' 
        onChange={e=> setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
        
        </div>
          {(typeof weather.main !="undefined") ? (
            <div>
        <div className="location-box">
          <div className="location">
            {weather.name},{weather.sys.country}
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp )}°C
          </div>
          <div className="weather">{weather.weather[0].main}</div>
        
      </div>
      </div>
      ):('')}
     </main>
    </div>
  );
}

export default App;
