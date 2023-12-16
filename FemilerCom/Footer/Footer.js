import LogoWhi from "../Logo/Logowhit"
import "./Footer.css"
function Footer () {
    return (
        <>
            <div className="Footer">
                <div className="SectionFooter">
                    <LogoWhi />
                </div>
                <div className="FooterSections">
                    <div className="SectionFooter">
                        <h3 className="H3Footer">About</h3>
                        <ul className="UlFooter">
                            <li className="LiFooter">Why Twindix</li>
                            <li className="LiFooter">Assessments</li>
                            <li className="LiFooter">Cooperation</li>
                        </ul>
                    </div>

                    <div className="SectionFooter">
                        <h3 className="H3Footer">Assessments</h3>
                        <ul className="UlFooter">
                            <li className="LiFooter">TWINDIX Individual Assessment</li>
                            <li className="LiFooter">TWINDIX Organizational Assessment</li>
                            <li className="LiFooter">Man Code Assessment</li>
                            <li className="LiFooter">Identities On Command</li>
                        </ul>                
                    </div>
                    <div className="SectionFooter"> 
                        <h3 className="H3Footer">Do it now</h3>
                        <ul className="UlFooter">
                            <li className="LiFooter">Buy the Assessment</li>
                            <li className="LiFooter">Start the Assessment</li>
                        </ul>                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer