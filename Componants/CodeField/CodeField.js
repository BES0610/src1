import { useState, useEffect } from "react";
import axios from "axios";
import CodeVildation from "./CodeVildation";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../FemilerCom/Button/Button";
import "./CodeField.css"
import Header from "../../FemilerCom/Header/Header";

function CodeField () {

let [error, seterror] = useState([])
    let [vlidation, setvlidation] = useState ({
        email: ' ',
        password: ' ',

    });
    // fetch('http://assessments.twindix.com/auth/login')
    //         .then(res=>res.json())
    //         .then(json=> {
    //             console.log(json)
    //             setvlidation(json)
    //         })
    
    let navigate = useNavigate()

    let vlidationinput = (e) => {
        setvlidation(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    let VildationSupmitFun = (e) => {
        e.preventDefault();
        seterror(CodeVildation(vlidation))
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
        <Header />
            <div className="CodeField">
                <div className="CodeFieldText">
                    <h1 className="H1tex">Code</h1>
                </div>
                <form className="SupmitForm" onSubmit={VildationSupmitFun}>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <div className="title">Code</div>
                            <input onChange={vlidationinput} className="RegInput"  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                    </div>
                <div className="CodeFieldBtns">
                    <div  id="HR" className="Contaner">
                        <Link to={"/Qustion"}><button type="submit" className="CodeFieldBTN" >Go To Test</button></Link> 
                        <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                    </div>
                </div>
                </form>
            </div> 
        </>
    )
}

export default CodeField;