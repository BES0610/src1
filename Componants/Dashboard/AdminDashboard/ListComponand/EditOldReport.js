import Button from "../../../../FemilerCom/Button/Button"
import DNDexcil from "../../../../FemilerCom/DNDexcil/DNDexcil"

function EditOldReport () {
    return (
        <>
                    <label for="Report">Choose a Report</label>

                    <select name="Report" id="cars">
                        <option ></option>

                    </select>
                    <div className="Flex">
                    <div className="DragFiles"> 
                        <DNDexcil Drag="Drag Or Choose Report File" />
                    </div>
                    </div>
                <br/>
                    <div className="BtnAddTest" type="submit" >
                        <Button Text="Send" />
                    </div>
        </>
    )
}

export default EditOldReport