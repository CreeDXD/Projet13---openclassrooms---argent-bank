//Header component

import agentBanklogo from '../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import {LoginSuccess} from '../redux/reducers/authSlice'
import ButtonLogin from './button_login'
import ButtonLogout from './button_logout'
import { useDispatch, useSelector } from 'react-redux';

function Header(){
    const { isAuthenticated } = useSelector((state) => state.auth);
    return(
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo" >
                <img
                className="main-nav-logo-image"
                src={agentBanklogo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {isAuthenticated?<ButtonLogout/>:<ButtonLogin/>}
            
            
        </nav>
    )
}

export default Header