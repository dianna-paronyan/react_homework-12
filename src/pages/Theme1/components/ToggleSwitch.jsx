import './ToggleSwitch.css';

function ToggleSwitch({click}){

    return(
        <>
            <label className="switch">
                <input type="checkbox" onClick={click} />
                <span className="slider round"></span>
            </label>
        </>
    )
}

export default ToggleSwitch;