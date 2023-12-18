import "./Admin.css"
function CenterSection (props) {
    return (
        <>
            <div className="CenterSection">
                <div>{props.normal}</div>
                <div>{props.dashboard}</div>
                <div>{props.Rebort}</div>
                <div>{props.AddTestd}</div>
                <div>{props.EditOldTest}</div>
                <div>{props.EditOldReport}</div>
            </div>
        </>
    )
}

export default CenterSection;