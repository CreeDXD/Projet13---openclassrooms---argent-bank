import { useState, useEffect, } from 'react';
import {Login} from './LoginApi'
import { Api } from '../service/Api';

export function ProfileApi(){
    const token = Login()
    const [email, setEmail] = useState('tony@stark.com');
const [password, setPassword] = useState('password123');
const [profileInfo, setProfileInfo] = useState(null);

const handleLogin = async () =>{
        try{
            const profileResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
method: 'POST',  // Change method to 'POST'
headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
},
// Add body if needed
// body: JSON.stringify({ /* your request body */ }),
});

    if (!profileResponse.ok) {
        throw new Error('Failed to fetch profile');
    }
    const profileData = await profileResponse.json();
    console.log(profileData.body.id)

    setProfileInfo(profileData.body);
    }
        catch(error){
            console.log(error.message)
        }
    }
    return profileInfo
    // return (
    //         <div>
    //         <h2>Login</h2>
    //         <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
    //             <label>
    //             Email:
    //             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //             </label>
    //             <br />
    //             <label>
    //             Password:
    //             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //             </label>
    //             <br />
    //             <button type="submit">Login</button>
    //         </form>
        
    //         {profileInfo && (
    //             <div>
    //             <h2>Profile Information</h2>
    //             <p>Email: {profileInfo.email}</p>
    //             {/* Add other profile information fields as needed */}
    //             </div>
    //         )}
    //         </div>
    //     );

}


// export function ProfileApi() {
// const [email, setEmail] = useState('tony@stark.com');
// const [password, setPassword] = useState('password123');
// const [profileInfo, setProfileInfo] = useState(null);

// const handleLogin = async () => {
//     console.log(email,password)
//     try {
//     const loginResponse = await fetch('http://localhost:3001/api/v1/user/login', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//         email: email,
//         password: password,
//         }),
//     });

//     if (!loginResponse.ok) {
//         throw new Error('Login failed');
//     }

//     const responseData = await loginResponse.json();

// // Assuming the token is inside a property called 'token' in the 'body' object
// const { token } = responseData.body;
// console.log('Token:', token);


//     // Use the obtained token to make a request to the profile endpoint
//     const profileResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
// method: 'POST',  // Change method to 'POST'
// headers: {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json',
// },
// // Add body if needed
// // body: JSON.stringify({ /* your request body */ }),
// });

//     if (!profileResponse.ok) {
//         throw new Error('Failed to fetch profile');
//     }
//     const profileData = await profileResponse.json();
//     console.log(profileData.body.id)

//     setProfileInfo(profileData.body);
//     } catch (error) {
//     console.error('Error during login:', error.message);
//     }
// };

// return (
//     <div>
//     <h2>Login</h2>
//     <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//         <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Login</button>
//     </form>

//     {profileInfo && (
//         <div>
//         <h2>Profile Information</h2>
//         <p>Email: {profileInfo.email}</p>
//         {/* Add other profile information fields as needed */}
//         </div>
//     )}
//     </div>
// );
// };



// export function ProfileApi(){
//     const [profileInfo, setProfileInfo] = useState(null)

//     const token = Login()
//     const { data, error, isLoading } = Api({
//         method: 'POST',
//         url: `/api/v1/user/profile`,
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//         }
//       });
    
    //   useEffect(() => {
    //     // You can perform any logic based on the API call response here
    //     if (data) {
    //         const { message } = data;
    //         setProfileInfo(message)
    //         console.log(message)
    //     } else if (error) {
    //       console.error('Error:', error);
    //     }
    //   }, [data, error]);
// }

