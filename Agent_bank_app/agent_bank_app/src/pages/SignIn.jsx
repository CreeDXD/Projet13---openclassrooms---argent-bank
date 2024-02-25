//Display of the SignIn page

import Header from "../components/header"
import Footer from "../components/footer"
import MainSignIn from "../components/main_signIn"
import '../style/css/main.css';

function SignIn(){
    return(
        <div className="container-signin">
            <Header/>
            <MainSignIn/>
            <Footer/>
        </div>
    )
}
export default SignIn