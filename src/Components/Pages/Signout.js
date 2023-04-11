import React from 'react'
import {signOut} from "firebase/auth";
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
export default function Signout() {
 const navigate =useNavigate();

    const out=()=>{
        signOut(auth).then(() => {
        console.log("successfully loged out");
        navigate("/");
          }).catch((error) => {
            console.log("error");
            navigate("/");
          });
    }



  return (
    <div>
        <button onClick={out}>
            Sign out
        </button>

    </div>
  )
}
