//Display of the Names component or the Edit component

import EditUserName from './edit_user_name'
import DisplayNames from './displayNames'
import React from 'react';
import { useSelector } from 'react-redux';


export default function Welcome(){
    const { isEditPannelVisible } = useSelector((state) => state.getinfo);

    return(
        <>
            {!isEditPannelVisible ? <DisplayNames/> : <EditUserName/>}          
            
        </>
        
    )
}