//Display of the main component of the SignIn page

import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginSuccess } from '../redux/reducers/authSlice';
import authService from '../service/authService';
import { useNavigate } from 'react-router-dom';

const  MainSignIn =() =>{
    const [wrongLogin, setWrongLogin] = useState(false)
    const dispatch = useDispatch();
    const [email, setemail] = useState('tony@stark.com');
    const [password, setPassword] = useState('password123');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            // Call your authentication API
            const response = await authService.login(email, password);

        //   // Assuming the API response contains user information and a token
            const { token } = response.body;
            console.log(token)
            // Dispatch the loginSuccess action with user and token
            dispatch(loginSuccess({ token }));
            // Redirect to another page upon successful login
            navigate('/user');
        } catch (error) {
            console.error('Login failed:', error.message);
            setWrongLogin(true)
            // Handle login failure (e.g., display an error message)
        }
    };

    return(
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                    </div>
                    {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                    {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
                    {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
                    {wrongLogin?<p className='pb_auth'>Problème d'authentication verifier le mail et le mot de passe</p>:''}
                    <button className="sign-in-button" type='submit'>Sign In</button>
                    {/* <!--  --> */}
                </form>
            </section>
    </main>
    )
}

export default MainSignIn