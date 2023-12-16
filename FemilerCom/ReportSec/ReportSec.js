import "./ReportSec.css"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
function ReportSec () {
    return (
        <>
            <div className="ReportSec">
                {/* <div  className="HedList">
                    <ul className="ULHeadRepo">
                        <li className="LiHeadRepo">report Number</li>
                        <li className="LiHeadRepo">Name</li>
                        <li className="LiHeadRepo">Report</li>
                    </ul>
                </div>
                <div className="RepoLine">
                <ul className="ULLineRepo">
                        <li className="LiLineRepo">1</li>
                        <li className="LiLineRepo">Basel</li>
                        <li className="LiLineRepo">file</li>
                    </ul>
                </div> */}
                <div className="ReborBtns">
                    <div className="TopRebortBtn">
                        <Link to={"/CodeField"}><Button Text="Have Code" /></Link>
                    </div>
                    <div className="TopRebortBtn">
                        <Link to={"/Payment"} ><Button Text="Pay Code" /></Link>
                    </div>
                </div>
                <table className="table">
                    <tr className="TableHead">
                        <th className="TableTh">ID</th>
                        <th className="TableTh">date</th>
                        <th className="TableTh">Test Name</th>
                        <th className="TableTh">Rebort</th>
                    </tr>
                    <tr>
                        <td className="TableTd">1</td>
                        <td className="TableTd">1/11/1111</td>
                        <td className="TableTd">Test1</td>
                        <td className="TableTd"><button className="RebortBtn">Rebort</button></td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default ReportSec