import LogoWhi from "../../../FemilerCom/Logo/Logowhit";
import "./individual.css"
import Pay from "../../../Media/Icons/Pay.png"
import dashboard from "../../../Media/Icons/dashboard.png"
import report from "../../../Media/Icons/report.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RightSection (props) {

    const [currentUserr, setCurrentUser] = useState(null);

    // useEffect(() => {
    //     const getCurrentUser = async () => {
    //     try {
    //       const response = await axios.get('http://assessments.twindix.com/auth/me'); // Replace with your actual API endpoint
    //         setCurrentUser(response.data);
    //     } catch (error) {
    //         console.error('Error fetching current user:', error);
    //     }
    // };

    // getCurrentUser();
    // }, []); // The empty dependency array ensures that this effect runs once after the initial render



    return (
        <>
            <div className="RightSection">
                <div className="DashLogo">
                    <LogoWhi />
                </div>
                <div className="Account">
                    <div className="User">Hi,
                    {/* {currentUser.name} */}
                    </div>
                    <div className="Mail">
                        {/* {currentUser.email} */}
                        </div>
                </div>
                <div className="Sections">
                    <div className="DetilCon">
                        <img className="Icon" src={dashboard} alt="icon" />
                        <div className="Detil" onClick={props.dashOnclick}>Dashboard</div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.reportOnclick}>Rebort</div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <Link to="/Payment"><div className="Detil">Pay</div></Link>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <div className="Detil" onClick={props.differentInfoOnclick}>Different information</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSection;