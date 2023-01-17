import  Axios  from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup =() => {

    const [loginNameRegistration, setLoginRegistration] = useState('')
    const [PasswdRegistraion, setPasswdRegistraion] = useState('')

    const [count, setCount] = useState('')
    const navigate = useNavigate()
    var reg = /[0-9]/g;
    
    
    

    const signup = () =>{
        
        var ntab = PasswdRegistraion.match(reg);
        if (loginNameRegistration==""||PasswdRegistraion=="")
        {
            alert("Nie wpisales danych");
        }
        else if(ntab == null) alert("Hasło nie zawiera liczby!");
        else if(PasswdRegistraion.length < 7) alert("Haslo musi być dłuższe od 7");
        else if(loginNameRegistration.length < 5) alert("Login musi byc dluzszy od 5");
        else
        {
        Axios.post("http://localhost:3001/count", 
        {
            login: loginNameRegistration,
        }).then((response)=>
        {
            setCount(response.data[0].liczba)
            if(response.data[0].liczba==0)
            {
                Axios.post("http://localhost:3001/register", 
                {
                login: loginNameRegistration,
                password: PasswdRegistraion
                }).then((response)=>
                {
                    console.log(response);
                })
                alert("Stworzono użytkownika !")
                navigate("/")
            }
            else
            {
                alert("uzytkownik istnieje spróbuj ponownie")
            }
        })
    }
    }
    const back =  () => 
    {
        navigate("/");
    }
    
    return(
        <div className="App"  class="logdif">
            <div className="sign">
                <h1>Zarejestruj się</h1>
                <input type = "text" class="loginfo" placeholder="login" onChange={(e)=>{
                    setLoginRegistration(e.target.value)}}/><br/>
                <input type = "password" class="loginfo" placeholder="haslo"  onChange={(e)=>{
                    setPasswdRegistraion(e.target.value)}}/><br/>
                <button class="logbutton" onClick={signup}>Rejestracja</button><br/>
                <button class="logbutton" onClick={back}>Powrót do logowania</button>
            </div>
        </div>
    )
}
export default Signup