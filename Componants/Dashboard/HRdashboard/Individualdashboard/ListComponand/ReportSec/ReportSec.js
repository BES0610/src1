import { Link } from "react-router-dom"
import "./ReportSec.css"
import Button from "../../../../../../FemilerCom/Button/Button"
function ReportSec () {
    return (
        <>
            <div className="SortBtn">
                <Button Text="Sort" />
            </div>
            <div className="ContanerHrDahsh">
            <div className="Titls">
                <div >Logo</div>
                <div>Company</div>
                <div>Type</div>
                <div>Name</div>
                <div>Postion</div>
                <div>Data</div>
                <div>Report</div>
            </div>
            <div className="Detils">
                <div className="ImgeCom"></div>
                <div>HTML Mechanice</div>
                <div>HR</div>
                <div>Tomy</div>
                <div>Sales</div>
                <div>22/7/2022</div>
                <Link>
                    <div className="ViweBtn"><Button Text="Viwe Report" /></div>
                </Link>
            </div>
            </div>
        </>
    )
}

export default ReportSec