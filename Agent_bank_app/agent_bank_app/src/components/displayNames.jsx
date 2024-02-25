//Display FirstName and LastName

import { useSelector, useDispatch } from 'react-redux';
import { isEditing } from '../redux/reducers/getAndEditProfileSlice';

export default function DisplayNames() {
    const { firstName, lastName } = useSelector((state) => state.getinfo);
    const dispatch = useDispatch()

    const handleisEditingName= () =>{
        dispatch(isEditing());
    }

    return(
        <div className="header">
            <h1>Welcome back<br />{firstName} {lastName}!</h1>
            <button onClick={handleisEditingName} className="edit-button">Edit Name</button>
        </div>
    )
    
}