import { dom } from "@fortawesome/fontawesome-svg-core"
import RegisterBox from "../../Componants/Register/RegisterCom"
import Button from "../../FemilerCom/Button/Button"
import Footer from "../../FemilerCom/Footer/Footer"
import Header from "../../FemilerCom/Header/Header"
import { useEffect, useState } from "react"

function Register () {

    
    return (
        <>
            <Header />
            <div > 
                <RegisterBox />
            </div>
            {/* <Footer /> */}
        </>
    )
} 

export default Register