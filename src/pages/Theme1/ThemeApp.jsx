import ToggleSwitch from './components/ToggleSwitch'
import useTheme  from './hooks/useTheme';
import './ThemeApp.css';


function ThemeApp() {
    const {theme, clickToggle} =  useTheme(null);

  return (
    <div className='boxContent'>
      <h1>Click on the switch button </h1> 
         
      <div className='themeContent'>
          <div className={`box${theme}`}>
            <input type='text' className={`input${theme}`} style={{width:'300px', height:'50px'}} />
            <button className={`btn${theme}`} style={{width:'90px', height:'50px'}}>Toggle</button>
          </div>
          
          <div className='toggleComponent'> 
            <ToggleSwitch click={clickToggle} />
          </div>
      </div>
    </div>
  )
}

export default ThemeApp;