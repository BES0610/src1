import Button from "../../FemilerCom/Button/Button"
import "./Payment.css"
import  Logowhit from "../../FemilerCom/Logo/Logowhit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
function PaymentCom () {
    return (
        <>
        <div className="PaymentPage">
            <div className="PayLeftSection">
            <div className="Log">
            <Logowhit />
            </div>
            <div className="CodeCountPy">
                    <h3 className="H1Pay">What Is The Test You Want:</h3>
                    <div className="TilteTest">
                        <div className="Box"><span className="Text">TWINDIX Individual Assessment</span></div>
                    </div>
                </div>
                <div className="FinlDetils">
                    <div className="FinlDet">You Will Pay Test 1</div>
                    <hr/>
                </div>
                <div className="FinlePay">
                    <div className="TotalTxt">Total:</div>
                    <div className="TotalNum">100$</div>
                </div>
            </div>
            <div className="PayRightSection">
                <div className="PaymentContaner">
                <div className="PaymentMethod">
                <h1 className="H1Pay">Payment Method IS Paypal:</h1>
                </div>
                <div className="Detils">
                    <div className="BillingInfo">
                        <h1 className="H1Payment">Billing Info:</h1>
                        <div className="BillingInputs">
                            <label className="LablePay">Name</label>
                            <input className="PaymentInput" />
                            <label className="LablePay">Address</label>
                            <input className="PaymentInput" />
                            <label className="LablePay">Country</label>
                            <input className="PaymentInput" />
                        </div>
                    </div>
                    <div className="CreadtInfo">
                        <h1 className="H1Payment" >Paypal Info:</h1>
                        <div className="CreadtInputs">
                            <label className="LablePay">Card Numper</label>
                            <input className="PaymentInput" />
                            <label className="LablePay">CardHolder Name</label>
                            <input className="PaymentInput" />
                            <label className="LablePay">Expired Date</label>
                            <input className="PaymentInput" />
                        </div>
                    </div>
                </div>
                <div className="PayBtn">
                    <Button Text="Pay" />
                </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default PaymentCom