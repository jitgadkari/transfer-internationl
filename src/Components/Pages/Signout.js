import React from 'react'
import {signOut} from "firebase/auth";
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
export default function Signout({setIsLoggedIn}) {
 const navigate =useNavigate();

    const out=()=>{
        signOut(auth).then(() => {
        console.log("successfully loged out");
        navigate("/");
        setIsLoggedIn(true);

          }).catch((error) => {
            console.log("error");
            navigate("/");
          });
    }



  return (
    <div className='signout'>
        <h3>Are you are sure you want to sign out?</h3>
        <button onClick={out}>
            Sign out
        </button>

    </div>
  )
}
