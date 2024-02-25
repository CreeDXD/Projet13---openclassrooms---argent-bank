//Button to login

import { Link } from "react-router-dom"

export default function ButtonLogin(){
   return(
    <div>
        <Link to={`/signin`} className="main-nav-item">
            <i className="fLinkfa-user-circle"></i>
            Sign In
        </Link>
    </div>
    
   )
}