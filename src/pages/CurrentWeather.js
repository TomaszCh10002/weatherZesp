import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CurrentWeather = (props) => {
    const error = props.error
    if(error)
    {
      alert("Błąd")
    }
    else
    {
      const ConvertSunrise = new Date(props.data.sys.sunrise*1000).toLocaleTimeString(); //konwersja milisekund na odpowiednia godzine
      const ConvertSunset = new Date(props.data.sys.sunset*1000).toLocaleTimeString();
    return (
      <div className="weather">
        <div className="top">
          <div>
          <Box
class="aaaa"
component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '16ch' },
      }}
      noValidate
      autoComplete="off">
            
            <img src={require('./logo1.png')} width="25px" height="25px" class="lolw1"/>
            
            <img src={require('./logo2.png')} width="25px" height="25px" class="lolw2"/>
           
            <img src={require('./logo3.png')} width="25px" height="25px" class="lolw3"/>
            
            <img src={require('./logo4.png')} width="25px" height="25px" class="lolw4"/>
            
            <img src={require('./logo5.png')} width="25px" height="25px" class="lolw5"/>
            
            <img src={require('./logo6.png')} width="25px" height="25px" class="lolw6"/>
            
            </Box>
          <Box
          class="daddy1"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '16ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField class="baby1" id="outlined-basic" label="" variant="filled" value = {props.data.city}/>
      <TextField class="baby1" id="outlined-basic" label="" variant="filled" value = {props.data.main.temp+"°C"}/>
      <TextField class="baby1" id="outlined-basic" label="" variant="filled" value = {"Ws."+ConvertSunrise}/>
      <TextField class="baby1" id="outlined-basic" label="" variant="filled" value = {"Za."+ConvertSunset}/>
      <TextField class="baby1" id="outlined-basic" label="" variant="filled" value = {props.data.wind.speed+"kph"}/>
      <TextField class="baby1" id="outlined-basic" label="" variant="filled" value = {props.data.main.pressure+"hPa"}/>
    </Box>
            
          </div>
          
          </div>
        </div>
     
    );}
    
  };
  
  export default CurrentWeather;