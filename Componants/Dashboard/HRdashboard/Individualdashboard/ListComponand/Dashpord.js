import { Link } from "react-router-dom"
import  Button  from "../../../../../FemilerCom/Button/Button"
import "./ListCom.css"
function Dashbord () {
    let style = {
        marginLeft : "35%"
    }
    return (
        <>
            <div className="ReportPointsDiv">
                Your Point Now Is
            </div>
            <Link to={'/AddPostion'}><button style={style} className="AllBtnCenterInd BtnCenterInd">Add Postion </button></Link>
        </>
    )
}

export default Dashbord