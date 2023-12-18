import Logowhit from "../../../../FemilerCom/Logo/Logowhit";
import "./HR.css"
import Pay from "../../../../Media/Icons/Pay.png"
import dashboard from "../../../../Media/Icons/dashboard.png"
import report from "../../../../Media/Icons/report.png"
import { Link } from "react-router-dom";
function RightSection (props) {
    return (
        <>
            <div className="RightSection">
                <div className="DashLogo">
                    <Logowhit />
                </div>
                <div className="Account">
                    <div className="User">Hi,<b>Basel</b></div>
                    <div className="Mail">BaselSherif9@gmail.com</div>
                </div>
                <div className="Sections">
                    <div className="DetilCon">
                        <img className="Icon" src={dashboard} alt="icon" />
                        <div className="Detil" onClick={props.dashboardOnclick}>Dashboard</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.reportOnclick}>Rebort</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <Link to="/HRPayment"><div className="Detil">Pay</div></Link>
                        <div className="After"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSection;