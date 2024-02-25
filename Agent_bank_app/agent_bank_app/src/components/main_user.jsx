//Display of the main component of the User page

import Welcome from "./welcome"
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInformation } from '../redux/reducers/getAndEditProfileSlice';
import authService from '../service/authService';

function MainUser(){
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (token) {
          // Call authService to get user profile using the token
          const userProfile = await authService.getUserProfile(token);
          const {email, firstName, lastName} = userProfile.body
        //   console.log(email, firstName, lastName)
          // Dispatch updateProfile action with the received user profile
          dispatch(getInformation({email, firstName, lastName}));
          setFirstName(firstName)
          setLastName(lastName)
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
      }
    };

    // Fetch user profile when the component mounts
    fetchUserProfile();
  }, [dispatch, token]);
  console.log(firstName, lastName)

    return(
        <main className="main bg-dark">
            <Welcome/>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
      </main>
    )
}

export default MainUser