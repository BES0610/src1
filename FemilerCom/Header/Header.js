import LogoBlue from "../Logo/LogoBlu"
import "./Header.css"

function Header () {
    return (
        <>
            <div className="header">
                <div className="LogoHeader">
                    <LogoBlue />
                </div>
                <ul className="UlHeader">
                    <li className="LiHeader">Why twindix</li>
                    <li className="LiHeader">Cooperations</li>
                    <li className="LiHeader">Assessments</li>
                </ul>
            </div>
        </>
    )
}
export default Header