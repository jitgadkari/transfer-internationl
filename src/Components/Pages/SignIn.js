import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase';
import InputControl from '../InputControl'

export default function SignIn() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);


    const handleSubmit = () => {
        if (!values.email || !values.password) {
            setErrorMessage("Please Enter all details");
            return;
        }

        setErrorMessage("");
        setSubmitButtonDisable(true)
        signInWithEmailAndPassword(auth, values.email, values.password).then((res) => {
            navigate("/");
            setSubmitButtonDisable(false)
        })
            .catch((err) => {
                setSubmitButtonDisable(false)
                setErrorMessage(err.message);
            });

    }
  return (
    <div className='signin'>
        <div>
            <h1>Signin</h1>
            <InputControl label ="Email" placeholder="Enter Email address" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}/>
            <InputControl type="Password" label ="Password" placeholder="Enter Password" onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))}/>
            <div className='log'>
            <h4>{errorMessage}</h4>
                <button onClick={handleSubmit} disabled={submitButtonDisable}  >Login</button>
                <p>
                    Dont have an account ? {" "} 
                    <span>
                        <Link to="/SignUp">Signup </Link>
                        </span>
                </p>
            </div>
        </div>
    </div>
  )
}
