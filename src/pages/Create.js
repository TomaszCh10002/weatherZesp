import React from "react";
import { useState } from "react";



function Create(props) 
{
   return(
            <div>
            <form onSubmit={props.submit}>
                <input id="sercz" type="text" value={props.city} required placeholder="Wpisz Miasto" onChange={props.change}/>
            </form>
            
            </div>
        )};
    
export default Create;