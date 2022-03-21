import { Routes,Route } from 'react-router-dom'
import Layout from './components/Layout'
import FetchApp from './pages/Fetch/FetchApp'
import Home from './pages/Home'
import LocalStorageApp from './pages/LocalStorage/LocalStorageApp'
import ThemeApp from './pages/Theme1/ThemeApp';
import TodoApp from './pages/Todo/TodoApp';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/'  element={<Home />}/>
          <Route path='/localStorage' element={<LocalStorageApp/>}/>
          <Route path='/fetch' element={<FetchApp />}/>
          <Route path='/theme' element={<ThemeApp />}/>
          <Route path='/todo' element={<TodoApp />}/>
        </Route>
       
      </Routes>
        
    </div>
  )
}

export default App;
