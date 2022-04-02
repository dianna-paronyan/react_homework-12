import { useState } from "react";


function useThemeHook(){

    const [theme, setTheme] = useState('light');

    function clickToggle(){
        if(theme !== 'dark'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }

    return {theme, clickToggle};
}

export default useThemeHook;