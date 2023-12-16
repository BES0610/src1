import { Link } from "react-router-dom"
import Button from "../../../../FemilerCom/Button/Button"
import DNDexcil from "../../../../FemilerCom/DNDexcil/DNDexcil"

function EditOldTest () {
    return (
        <>
        <h1>Individual Test</h1>
        <div className="Flex">
                    <div className="DragFiles"> 
                        <DNDexcil Drag="Drag Or Choose Qustion File" />
                    </div>
                    </div>
                <br/>
                    <div className="BtnAddTest" type="submit" >
                        <Button Text="Send" />
                    </div>
        </>
    )
}

export default EditOldTest