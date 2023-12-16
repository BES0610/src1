import Button from "../../../../FemilerCom/Button/Button"
import DNDexcil from "../../../../FemilerCom/DNDexcil/DNDexcil"

function EditOldReport () {
    return (
        <>
                <h1>Individual Report</h1>
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