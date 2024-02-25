//Edit of FirstName and LastName

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../service/authService'; // Replace with your authentication service
import {updateNames, cancelEditing} from '../redux/reducers/getAndEditProfileSlice'

export default function EditUserName(){
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('Tony');
    const [lastName, setLastName] = useState('Stark');
    const { token } = useSelector((state) => state.auth);
    
    const handleChangeNames = async (e) =>{
        try {
            e.preventDefault();
            // Call your authentication API
            const response = await authService.changeNames(firstName, lastName, token);
                
            // Dispatch the loginSuccess action with user and token
            dispatch(updateNames({ firstName, lastName }));
            // Redirect to another page upon successful login
        } catch (error) {
            console.error('Login failed:', error.message);
            // Handle login failure (e.g., display an error message)
        }
    }

    const hanldeCancel = () =>{
        dispatch(cancelEditing())
    }

    return(
        <form className="editusername" onSubmit={handleChangeNames}>
            <h1 className="editusername_title">Welcome back</h1>
            
            <div className="editusername_labels">
                <label>
                    <input type="text" name="firstName" placeholder="Pierre" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </label>
                <label>
                    <input type="text" name="firstName" placeholder="Clio" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </label>
            </div>
            <div className="editusername_buttons">
                <button type="submit" className="editusername_button">Save</button>
                <button onClick={hanldeCancel} className="editusername_button">Cancel</button>
            </div>             
            
        </form>
    )
}