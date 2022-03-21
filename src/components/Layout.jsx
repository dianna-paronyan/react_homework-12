import {Outlet, Link} from 'react-router-dom';
import './Layout.css'

function Layout(){
    return (
        <>
          <nav>
            <ul>
                <li className='logo'>Homeworks</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/localStorage">LocalStorage</Link>
              </li>
              <li>
                <Link to="/fetch">Fetch</Link>
              </li>
              <li>
                <Link to="/theme">Theme</Link>
              </li>
              <li>
                <Link to="/todo">TodoList</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
}

export default Layout;