import React from "react";
import { useState } from "react";
import Create from './Create'
import CurrentWeather from './CurrentWeather'
import Map from './Map'
import Forecast from './Forecast'
import { useNavigate } from "react-router-dom";

function Weather() 
{
  
  const navigate = useNavigate()
  const CURRENT_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const CURRENT_SMOG_API_URL = "http://api.waqi.info/feed/";
  const FORECAST_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const KEY_WEATHER = "9cf87cbe07b56a15271a36569dbd0fec";
  const SMOGKEY ="1308fdf7e970818d202aab3a06c5777ce8005305"
 
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [smog, SetSmog] = useState(null);
  const [city, setCity] = useState('');
  const [error, seterror] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null)
  const [enter, setenter] = useState(false)
  
  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log(city)
      const currentWeatherFetch = fetch(
        `${CURRENT_WEATHER_API_URL}?q=${city}&appid=${KEY_WEATHER}&units=metric`
      );
      
      const forecastFetch = fetch(
        `${FORECAST_WEATHER_API_URL}?q=${city}&appid=${KEY_WEATHER}&units=metric`
      );
      
      
      Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
          const weatherResponse = await response[0].json();
          const forcastResponse = await response[1].json();
          // const lat = weatherResponse.coord.lat;
          // const lon = weatherResponse.coord.lon
          // console.log(lon)
          // console.log(lat)
          setLat(weatherResponse.coord.lat);
          setLon(weatherResponse.coord.lon);
          seterror(false)
          setCurrentWeather({ city: city, ...weatherResponse });
          setForecast({ city: city, ...forcastResponse });
          
          
          
          console.log(CurrentWeather)
        })
        .catch(err =>{
          seterror(true)
          setCurrentWeather(null)
          setForecast(null)
        })
      
    setenter(true);
     const position = [lat,lon]   

       
        
        

  }
  const handleChange = (e) =>{
    setCity(e.target.value);
  };
  const LogOut = () =>{
    navigate("/");
  }

    
    
    return(
        <div>
          <button class="wylo" border="0" width="25px" height="25px"  onClick={LogOut}><img src="https://cdn-icons-png.flaticon.com/512/159/159607.png" alt="power.png" border="0" width="25px" height="25px"/></button><br/>
          <Create city={city} submit = {handleSubmit} change = {handleChange}  error={error}></Create>
          {currentWeather && <CurrentWeather data={currentWeather} error={error}/>}
          {forecast && <Forecast data={forecast} error={error}/>}
          <Map lon ={lon} lat = {lat} enter = {enter}/>
        </div>
    )};


export default Weather;
