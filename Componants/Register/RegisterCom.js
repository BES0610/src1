import { useEffect, useState } from "react";
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import RegisterValidation from "./RegisterValidation";
import axios from "axios";
import Button from "../../FemilerCom/Button/Button";
import swal from 'sweetalert';
import DND from "../../FemilerCom/DND/DNDcom"
function RegisterBox () {

    let [hRSubmit, sethRSubmit] = useState()
    let [indvividualSubmit, setindvividualSubmit] = useState()

    //Start Register
    let [error, seterror] = useState([])
    let [vlidation, setvlidation] = useState ({
        email: "",
        password: "",
        phone: "",
        username: "",
        type: ""
    });

    // fetch('http://assessments.twindix.com/auth/register')
    // .then(res=>res.json())
    // .then(json=> {
    //     console.log(json)
    //     setvlidation(json)
    // })


    let navigate = useNavigate()

    let vlidationinput = (e) => {
        setvlidation(prev => ({...prev, [e.target.name]: e.target.value}))
    } 

    let VildationSupmitFun = (e) => {   
        e.preventDefault();
        seterror(RegisterValidation(vlidation))
    }


    useEffect(() =>{
        if (error.username === "" && error.email === "" && error.password === "" 
        && error.phone === "" 
        ) {
            if (indvividualSubmit) {
                vlidation.type = "Indvivdual"
            }else if (hRSubmit) {
                vlidation.type = "HR"
            }
            axios
            .post('http://assessments.twindix.com/auth/register/', vlidation)
            .then((res) => {
            console.log(res);
            if (indvividualSubmit) {
                navigate("/Individual")
            }
            if (hRSubmit) {
                navigate("/HR")
            }
              // Additional logic after successful API request
            })
            .catch((err) => console.log(err));
        }
      }, [error]); // Run this effect whenever the 'error' state changes
    //End Register
        let alert = () => {
            swal("Please Choose indvividual Or HR");

        }
    return (
        <>
        <div className={hRSubmit ? "Rigster RigsterHr" : "Rigster"} >
        <div className="Buttons">
            <span className="RegsterBtn" onClick={setindvividualSubmit}>
                <span><Button Text="Indvividual" /></span>
            </span>
            <span className="RegsterBtn" onClick={sethRSubmit} >
            <Button Text="HR" />
            </span>
            </div>
            <div className={hRSubmit ? "RegesterBox HRBOX" : "RegesterBox"}  >
                <div className="RegisterText">
                    <h1 className="H1tex">Register</h1>
                </div>
                <form className="SupmitForm" onSubmit={VildationSupmitFun}>
                    <div className={hRSubmit || indvividualSubmit ?"display": ""} >
                    <div className={hRSubmit? "InptCont InptContHr" : "InptCont "}>
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">Name</div>
                            <input onChange={vlidationinput} className="RegInput "  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                    </div>
                    <div className={hRSubmit? "InptCont InptContHr" : "InptCont "}>
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">username</div>
                            <input onChange={vlidationinput} className="RegInput "  name="username"    />
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
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="ss" />
                        <div className="title">email</div>
                        <input onChange={vlidationinput} className="RegInput" type="email" name="email"   />
                        </div>
                        <div className="ErrorText">{error.email && <span >{error.email} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="ss" />
                        <div className="title">phone</div>
                        <input onChange={vlidationinput} className="RegInput"  name="phone" id="name"  />
                        </div>
                        <div className="ErrorText">
                            {error.phone && <span >{error.phone} </span>}
                            </div>
                    </div>
                    </div>
                    {indvividualSubmit && 
                    <>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">Name</div>
                            <input onChange={vlidationinput} className="RegInput"  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                    </div>
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
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="ss" />
                        <div className="title">email</div>
                        <input onChange={vlidationinput} className="RegInput" type="email" name="email"   />
                        </div>
                        <div className="ErrorText">{error.email && <span >{error.email} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="ss" />
                        <div className="title">phone</div>
                        <input onChange={vlidationinput} className="RegInput"  name="phone" id="name"  />
                        </div>
                        <div className="ErrorText">
                            {error.phone && <span >{error.phone} </span>}
                            </div>
                    </div>
                    </>}
                    {hRSubmit && 
                    <>
                    <div className="Flex">
                        <div className="HrBoxLeft">
                            <div className="InptCont">
                                <div className="ImgAndTilte">
                                    <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                                    <div className="title">Name</div>
                                    <input onChange={vlidationinput} className="RegInputHr"  name="username"    />
                                </div>
                                <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                            </div>
                            <div className="InptCont">
                                <div className="ImgAndTilte">
                                    <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                                    <div className="title">jop</div>
                                    <input onChange={vlidationinput} className="RegInputHr"  name="username"    />
                                </div>
                                <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                            </div>
                            <div className="InptCont">
                                <div className="ImgAndTilte">
                                    <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                                    <div className="title">Company Name</div>
                                    <input onChange={vlidationinput} className="RegInputHr"  name="username"    />
                                </div>
                                <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                            </div>
                            <div className="InptCont">
                                <div className="ImgAndTilte">
                                    <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                                    <div className="title">username</div>
                                    <input onChange={vlidationinput} className="RegInputHr"  name="username"    />
                                </div>
                                <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                            </div>
                    </div>
                    <div className="HrBoxRight">
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="ss" />
                            <div className="title">password</div>
                            <input onChange={vlidationinput} className="RegInputHr" type="password"  name="password"    />
                        </div>
                        <div className="ErrorText"> {error.password && <span >{error.password} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="ss" />
                        <div className="title">email</div>
                        <input onChange={vlidationinput} className="RegInputHr" type="email" name="email"   />
                        </div>
                        <div className="ErrorText">{error.email && <span >{error.email} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="ss" />
                        <div className="title">phone</div>
                        <input onChange={vlidationinput} className="RegInputHr"  name="phone" id="name"  />
                        </div>
                        <div className="ErrorText">
                            {error.phone && <span >{error.phone} </span>}
                            </div>
                    </div>
                    </div>
                    <DND />
                </div>
                    </>}
                <div className="RegisterBtns">
                    <div className={hRSubmit || indvividualSubmit ?"Contaner  display": "Contaner"} >
                    <button  className="RegsBTN" id="Alert" 
                    onClick={alert}>Register 
                    </button>
                    <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                    </div>
                    { hRSubmit && 
                    <>
                        <div  id="HR" className={indvividualSubmit ? "ContanerHr display" : "ContanerHr"} >
                            <button type="submit" className="RegsBTN" >Register</button>
                            <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                        </div>
                    </>}
                    {indvividualSubmit && 
                    <>
                        <div id="Individual" className={hRSubmit ? "Contaner display" : "Contaner"} >
                            <button type="submit" className="RegsBTN" >Register</button>
                            <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                        </div>
                    </>}
                </div>
            <Link to="/Login">
                <div className="ToLogin">
                    <Button Text="Already Have Account" />
                </div>
            </Link>
                </form>
            </div> 
        </div>
        </>
    )
}

export default RegisterBox;