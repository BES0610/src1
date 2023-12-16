import "./Button.css"
function Button (props) {
    return (
        <>
            <div className="Button">
                <button className="BTN" onClick={props.hide}>{props.Text}</button>
            </div>
        </>
    )
}

export default Button