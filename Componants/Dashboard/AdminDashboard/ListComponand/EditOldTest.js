import { Link } from "react-router-dom"
import Button from "../../../../FemilerCom/Button/Button"
import DNDexcil from "../../../../FemilerCom/DNDexcil/DNDexcil"

function EditOldTest () {
    return (
        <>
        <label for="Test">Choose a Test</label>

        <select name="Test" id="cars">
            <option></option>
        </select>
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