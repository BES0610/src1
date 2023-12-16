import RightSection from "../../../Componants/Dashboard/AdminDashboard/RightSection.js"
import TopSection from "../../../Componants/Dashboard/AdminDashboard/TopSection.js"
import CenterSection from "../../../Componants/Dashboard/AdminDashboard/CenterSection.js"
import Dashbord from "../../../Componants/Dashboard/AdminDashboard/ListComponand/Dashpord.js"
import Report from "../../../Componants/Dashboard/AdminDashboard/ListComponand/Report.js"
import AddTest from "../../../Componants/Dashboard/AdminDashboard/ListComponand/AddTest.js"
import EditOldTest from "../../../Componants/Dashboard/AdminDashboard/ListComponand/EditOldTest.js"
import EditOldReport from "../../../Componants/Dashboard/AdminDashboard/ListComponand/EditOldReport.js"
import { useState } from "react"
function Admin () {
    let [dash, setdash] = useState()
    let [repo, setrepo] = useState()
    let [Add, setAdd] = useState()
    let [Edit, setEdit] = useState()
    let [normal, setnormal] =useState()
    let [editReport, seteditReport] =useState()
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
                            setAdd()
                            setEdit()
                            setnormal()
                            seteditReport()
                        }
                    }
                    RebortOnclick={() => {
                        setdash()
                        setrepo(!repo)
                        setAdd()
                        setEdit()
                        setnormal()
                        seteditReport()
                    }}
                    AddTestdOnclick={() => {
                        setdash()
                        setrepo()
                        setAdd(!Add)
                        setEdit()
                        setnormal()
                        seteditReport()
                    }}
                    EditOldTestOnclick={() => {
                        setdash()
                        setrepo()
                        setAdd()
                        setEdit(!Edit)
                        setnormal()
                        seteditReport()
                    }}
                    EditOldReportOnclick={() => {
                        setdash()
                        setrepo()
                        setAdd()
                        setEdit()
                        seteditReport(!editReport)
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
                    normal && <Dashbord /> 
                }
                dashboard={
                    dash && <div><Dashbord /> </div>
                }
                Rebort={
                    repo && <div><Report /></div>
                }
                AddTestd={
                    Add && <div><AddTest /> </div>
                }
                EditOldTest={
                    Edit && <div><EditOldTest /></div>
                }
                EditOldReport={
                    editReport && <div><EditOldReport /></div>
                }
            />
                </div>
            </div>
        </div>
        </>
    )
}

export default Admin;