import "./Logo.css"
import LogoBlu from "../../Media/Logo/LogoBlu.png"
function LogoBlue () {
    return (
        <>
                <div className="Logo">
                    <img className="LogoImg" src={LogoBlu} alt="logo" />
                </div>
        </>
    )
}
export default LogoBlue