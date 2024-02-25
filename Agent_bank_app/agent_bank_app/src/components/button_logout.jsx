//button to logout

import { logout } from '../redux/reducers/authSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function ButtonLoggedOut(){
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { firstName } = useSelector((state) => state.getinfo);
    const handleLogout = (e) =>{
        e.preventDefault();

        dispatch(logout());
        navigate('/')
    }
    return(
        <nav className="main-nav">
            <a className="main-nav-item" href="/">
                <i className="fa fa-user-circle"></i>
                {firstName}
            </a>
            <a className="main-nav-item" href="/" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Sign Out
            </a>
            
            
        </nav>
    )
}