import ToggleSwitch from './components/ToggleSwitch'
// import useTheme  from './hooks/useTheme';
import {useTheme} from './providers/ThemeProvider';
import ThemeProvider from './providers/ThemeProvider';
import './ThemeApp.css';
import InputButton from './components/InputButton';


function ThemeApp() {
    // const {theme} =  useTheme();

  return (
    <ThemeProvider>
    <div className='boxContent'>
      <h2>Click on the switch button </h2> 
         
      <div className='themeContent'>
          <InputButton/>
          <div className='toggleComponent'> 
            
            <ToggleSwitch  />
            
          </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default ThemeApp;