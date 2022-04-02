import { useTheme } from '../providers/ThemeProvider';
import './ToggleSwitch.css';

function ToggleSwitch(){
    const { clickToggle} =  useTheme();

    return(
        <>
            <label className="switch">
                <input type="checkbox" onClick={clickToggle} />
                <span className="slider round"></span>
            </label>
        </>
    )
}

export default ToggleSwitch;