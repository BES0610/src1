import { useState, useEffect } from "react";
import "./LogInForAdmin.css"
import axios from "axios";
import LoginVildation from "./LoginForAdminVildation";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../FemilerCom/Button/Button";
function LogInBoxForAdmin () {

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
            .post('https://reqres.in/api/users?page=2', vlidation)
            .then((res) => {
            console.log(res);
            navigate("/")
              // Additional logic after successful API request
            })
            .catch((err) => console.log(err));
        }
      }, [error]); // Run this effect whenever the 'error' state changes

    return (
        <>
            <div className="LogInBoxAdmin">
                <div className="LogInForAdminText">
                    <h1 className="H1tex">Log In</h1>
                </div>
                <form className="SupmitForm" action="" onSubmit={VildationSupmitFun}>
                <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">UserName</div>
                            <input onChange={vlidationinput} className="RegInput"  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.email && <span style={{"color" : "red"}}>{error.email} </span>}</div>
                    </div>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="ss" />
                            <div className="title">Password</div>
                            <input onChange={vlidationinput} className="RegInput"  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                    </div>
                        <div className="LogInForAdminBtns">
                            <div  id="HR" className="Contaner">
                                <button type="submit" className="RegsBTN" >Log In</button>
                                <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                            </div>
                        </div>
                </form>
                <Link to="/LogInForAdmin/ResetPasswordForAdmin">
                    <div className="ToResetPass">
                        <Button Text="Forget Password" />
                    </div>
                </Link>
            </div> 
        </>
    )
}

export default LogInBoxForAdmin;