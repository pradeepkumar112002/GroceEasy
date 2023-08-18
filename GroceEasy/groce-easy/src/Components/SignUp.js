import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import "../Styles/SignUp.css";
import { Link } from "react-router-dom";

const Signup = () =>{
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const handleSignup = (e) =>{
        e.preventDefault();
        fetch("http://localhost:8000/signup",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",

            },
            body:JSON.stringify({
                username,
                password,
                email
            }),

        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"signed up ")
            if(data.status == "ok"){

                toast.success("Signedup successfully");
            }
            else{
                toast.error("Invalid Credentials");
            }
        })
    }
    
    return(
        <>
        <div className="signup-main">
        <h1>Signup page</h1>
        <label>username:</label>
        <input id="username" type="text" onChange={(e)=>{
            setUsername(e.target.value);
        }}></input>
        <label>password:</label>
        <input id="password" type="password" onChange={(e)=>{
            setPassword(e.target.value)
        }}></input>
        <label>confirm password</label>
        <input id="confirm" type="password"></input>
        <label>email</label>
        <input id="email" type="email" onChange={(e)=>{
            setEmail(e.target.value)
        }}></input>
        <button onClick={handleSignup}>Sign Up</button>
        <span><h5>already have an account ?</h5>
        <Link to="/login">
            login
        </Link>
        </span>
        </div>
        <h1>{username} {password} {email}</h1>
        </>
    )
}

export default Signup;