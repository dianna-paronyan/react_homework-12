import { useTheme } from '../providers/ThemeProvider';


function InputButton(){
    const { theme} =  useTheme();

    return(
        <>
            <div className={`box${theme}`}>
                <input type='text' className={`input${theme}`} style={{width:'300px', height:'50px'}} />
                <button className={`btn${theme}`} style={{width:'90px', height:'50px'}}>Toggle</button>
            </div> 
        </>
    )
}

export default InputButton;