import { useState, useEffect } from "react";
import axios from "axios";
import LoginVildation from "./LoginVildation";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../FemilerCom/Button/Button";
import "./LogIn.css"
function LogInBox () {

let [error, seterror] = useState([])
    let [vlidation, setvlidation] = useState ({
        email: ' ',
        password: ' ',

    });
    
    let navigate = useNavigate()

    let vlidationinput = (e) => {
        setvlidation(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    let VildationSupmitFun = (e) => {
        e.preventDefault();
        seterror(LoginVildation(vlidation))
    }

    useEffect(() => {
        if (error.email === '' && error.password === '') {
        axios
            .post('http://assessments.twindix.com/auth/login', vlidation)
            .then((res) => {
            console.log(res);
            if (res.data === "Success") {
                navigate("/")
            }else {
                alert("No Record Existed")
            }
              // Additional logic after successful API request
            })
            .catch((err) => console.log(err));
        }
      }, [error]); // Run this effect whenever the 'error' state changes

    return (
        <>
            <div className="LogInBox">
                <div className="LogInText">
                    <h1 className="H1tex">Log In</h1>
                </div>
                <form className="SupmitForm" onSubmit={VildationSupmitFun}>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">username</div>
                            <input onChange={vlidationinput} className="RegInput"  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                    </div>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="ss" />
                            <div className="title">password</div>
                            <input onChange={vlidationinput} className="RegInput" type="password"  name="password"    />
                        </div>
                        <div className="ErrorText"> {error.password && <span >{error.password} </span>}</div>
                    </div>
                <div className="RegisterBtns">
                    <div  id="HR" className="Contaner">
                        <button type="submit" className="RegsBTN" >Log In</button>
                        <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                    </div>
                </div>
                </form>
                <Link to="/Login/ResetPassword">
                    <div className="ToForgitPass">
                        <Button Text="Forget Password" />
                    </div>
                </Link>
            </div> 
        </>
    )
}

export default LogInBox;