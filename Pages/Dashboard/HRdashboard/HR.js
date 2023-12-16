import RightSection from "../../../Componants/Dashboard/HRdashboard/Individualdashboard/RightSection";
import TopSection from "../../../Componants/Dashboard/HRdashboard/Individualdashboard/TopSection";
import CenterSection from "../../../Componants/Dashboard/HRdashboard/Individualdashboard/CenterSection";
import Dashbord from "../../../Componants/Dashboard/HRdashboard/Individualdashboard/ListComponand/Dashpord";
import Report from "../../../Componants/Dashboard/HRdashboard/Individualdashboard/ListComponand/Report";
import { useState } from "react";
function HR () {
    let [dash, setdash] = useState()
    let [repo, setrepo] = useState()
    let [noraml, setnormal] = useState()
        // Start Style
    
        let BigFlexBox = {
            display: "flex",
            width: "100%",
            height: "100%"
            } 
    
        let LeftBox = {
            width: "55%",
            height: "724px",
            background: "#f5f5f5",
        } 
    
        let RightBox = {
            width: "100%",
            background: "#f5f5f5",
        } 
    
        let TopRightBox = {
            width: "100%",
            height: "10%",
        } 
    
        let ButtomRightBox = {
            width: "100%",
            height: "87%",
        } 
        // End Style
        window.onload = setnormal
    return (
        <>
        <div id="flex" style={BigFlexBox}>
            <div id="left" style={LeftBox}>   
                <RightSection  
                    dashboardOnclick={() => {
                        setdash(!dash)
                        setrepo()
                        setnormal()
                }}
                reportOnclick={() => {
                    setrepo(!repo)
                    setdash()
                    setnormal()
                }}
                />
            </div>
            <div id="right" style={RightBox}>
                    <div id="righttop" style={TopRightBox}>
                    <TopSection />
                </div>
                <div id="rightbott" style={ButtomRightBox}>
                    <CenterSection 
                        normal={
                            noraml && <Dashbord />
                        }
                        dashp={
                            dash && <div><Dashbord /> </div>
                        }
                        repor={
                            repo && <div><Report /> </div>
                        } 
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default HR;