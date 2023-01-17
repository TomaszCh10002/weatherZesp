import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



const WEEK_DAYS = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
const position = [53.1833, 22.0833]
const Forecast = (props) => {
  console.log(props.error)
  if(props.error)
  {
    alert("złe miasto")
  }
  else
  {
  const dayInAWeek = new Date().getDay(); //zwraca dzisieszy dzien 
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <>
    {props.data.list.splice(0, 6).map((item, ind) => (
          <div >
             <Box
             class="daddy2"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField class="baby2" id="outlined-basic" label="" variant="filled" value = {forecastDays[ind]}/>
      <TextField class="baby2" id="outlined-basic" label="" variant="filled" value = {item.main.temp+"°C"}/>
      <TextField class="baby2" id="outlined-basic" label="" variant="filled" value = {item.wind.speed+"kph"}/>
      <TextField class="baby2" id="outlined-basic" label="" variant="filled" value = {item.main.pressure+"hPa"}/>
    </Box>
    
    
          </div>
         
        ))}
    </>
      
  );
}

};

export default Forecast;