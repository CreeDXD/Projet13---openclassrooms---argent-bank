//Display of the User page

import Header from "../components/header"
import Footer from "../components/footer"
import MainUser from "../components/main_user"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function User(){
    const { isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate()
    useEffect(()=> {
        if(!isAuthenticated){
            navigate('/signin') 
        }        
    },[])
    
    return(
        <div className="container-signin">
            <Header/>
            <MainUser/>
            <Footer/>
        </div>
    )
}
export default User