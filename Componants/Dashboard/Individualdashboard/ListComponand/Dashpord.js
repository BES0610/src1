import { Link } from "react-router-dom"
import "./ListCom.css"
function Dashboard () {
    return (
        <>
            <Link to={'/CodeField'}><button className="BtnCenterInd">Have Code </button></Link>
            <Link to={"/Payment"} ><button className="BtnCenterInd">Pay Code </button></Link>
        </>
    )
}

export default Dashboard;