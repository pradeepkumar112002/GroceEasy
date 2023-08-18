import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import "../Styles/SignUp.css";

const Login = () =>{
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const handleLogin = (e) =>{
        toast.success("hello there")
        e.preventDefault();
        fetch("http://localhost:8000/login",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",

            },
            body:JSON.stringify({
                password,
                email
            }),

        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"Logged in")
            if(data.status == "ok"){
                toast.success("Signedup successfully");
                window.location.href="/Home";
            }
            else{
                toast.error("Invalid Credentials");
            }
        })
    }
    
    return(
        <>
        <div className="signup-main">
        <h1>Login page</h1>
        <label>email</label>
        <input id="email" type="email" onChange={(e)=>{
            setEmail(e.target.value)
        }}></input>
        <label>password:</label>
        <input id="password" type="password" onChange={(e)=>{
            setPassword(e.target.value)
        }}></input>
        <button onClick={handleLogin}>login</button>
        </div>
        <h1>{username} {password} {email}</h1>
        </>
    )
}

export default Login;