import { useEffect, useState } from "react";
import CenterSection from "../../../Componants/Dashboard/Individualdashboard/CenterSection";
import RightSection from "../../../Componants/Dashboard/Individualdashboard/RightSection";
import TopSection from "../../../Componants/Dashboard/Individualdashboard/TopSection";
import Dashpord from "../../../Componants/Dashboard/Individualdashboard/ListComponand/Dashpord"
import Report from "../../../Componants/Dashboard/Individualdashboard/ListComponand/Report"
import Differentiformoation from "../../../Componants/Dashboard/Individualdashboard/ListComponand/Differentiformoation";
function Individual() {
    let [dash, setdash] = useState()
    let [repo, setrepo] = useState()
    let [normal, setnormal] = useState()
    let [differenti, setrdifferent] = useState()
    // Start Style
    
    let BigFlexBox = {
        display: "flex",
        width: "100%",
        height: "100%"
        } 

    let LeftBox = {
        width: "40%",
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
        
        window.onload= setnormal
    return (
        <>
                <div id="flex" style={BigFlexBox}>
                    <div id="left" style={LeftBox}>                
                        <RightSection 
                            dashOnclick={() => {
                                setdash(!dash)
                                setrepo()
                                setnormal()
                            }}
                            reportOnclick={() => {
                                setrepo(!repo)
                                setdash()
                                setnormal()
                            }}
                            differentInfoOnclick={() => {
                                setrdifferent(!differenti)
                                setrepo()
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
                                noraml={
                                    normal && <div className="AllBtnCenterInd"><Dashpord /></div>
                                }
                                dashp={
                                    dash && <div className="AllBtnCenterInd"><Dashpord /></div>
                                }
                                repor={
                                    repo && <div><Report /></div>
                                }
                                different={
                                    differenti && <div><Differentiformoation /></div>
                                }
                            />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Individual;