import {MapContainer,TileLayer, Marker, Popup} from "react-leaflet"
import "./Forecast.css"
import React, { Component } from 'react';

import L from "leaflet"
var lat = 0
var lon = 0

const Forecast = (props) => {
    var enter = props.enter
    if(enter)
    {
    lat = props.lat
    lon = props.lon
    console.log(lat, lon)
    var position = [lat,lon]
    if(!lat||!lon)
    {
      position=[0,0]
    }
   
    if(props.error)
    {
      alert("złe miasto")
    }
    else
    {
    return (
      <>
      {
            <div >
              
      <div className="map">
      <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
          </Marker>
      </MapContainer>    
      </div>
            </div>
        }
      </>
        
    );
  }
  }


  };
  
  let defaultIcon = L.icon({
    iconUrl:"https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png"
  })
  L.Marker.prototype.options.icon = defaultIcon
  export default Forecast;