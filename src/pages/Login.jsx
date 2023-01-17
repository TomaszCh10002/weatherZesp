import  Axios  from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login =() => {

    
    const navigate = useNavigate()
    const [Login, setLogin] = useState('')
    const [Passwd, setPasswd] = useState('')
    const [LoginStatus, setLoginStatus] = useState('')
    
    const login = () =>{
        Axios.post("http://localhost:3001/login", 
        {
            loginn: Login,
            passwordd: Passwd
        }).then((response)=>
        {
            if(response.data.message)
            {
                alert("Podano złe dane")
            }
            else {
                navigate("/Weather")
            }
            
        })
        
        
    }
    const handleClick =  () => 
    {
        navigate("/Signup");
    }
    return(
        <div class="logdif">
            <div className="login">
                <h1>Zaloguj się</h1>
                <input class="loginfo" type = "text" placeholder="login"onChange={(e)=>{
                    setLogin(e.target.value)}}/><br/>
                <input type = "password" class="loginfo" placeholder="hasło" onChange={(e)=>{
                    setPasswd(e.target.value)}}/><br/>
                <button class="logbutton" onClick={login}>Zaloguj</button><br/>
                <a href onClick={handleClick} class="regtext">Zarejestruj się</a>
            </div>
           
        </div>
    )
}
export default Login