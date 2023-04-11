import React from 'react'
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'
import payimg from '../Image/Payment-Gateway.png';
import Timer from '../Timer';

export default function Home(props) {

    // const navigate =useNavigate();
    // const onPaymentGatewaysClickHandler =()=>{
    //     navigate("/paymentsgateway");
    // }
    // const onSignInClickHandler =()=>{
    //     navigate("/SignIn");
    // }
    // const onSignUpClickHandler =()=>{
    //     navigate("/SignUp");
    // }

    return (
        <div>
            <nav className='Navbar'>
                <h1>Transfer International</h1>
                <ul className='list'>
                    <li>Contact</li>
                    <li>Region    <select >
                            <option value='Asia Pacific'>Asia Pacific</option>
                            <option value='North America'>North America</option>
                            <option value='Europe'>Europe</option>
                        </select></li>
                    {/* <li>
                       <button onClick={onSignInClickHandler}
                         className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                         SignIn
                     </button>
                     </li>
                     <li>
                       <button onClick={onSignUpClickHandler}
                         className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                         SignUp
                     </button>
                     </li>
                    <li>
                       <button onClick={onPaymentGatewaysClickHandler}
                         className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                         Payment Gateways
                     </button>
                     </li> */}



                   
                    <Link to="/SignIn">SignIn</Link>
                    <Link to="/SignUp">SignUp</Link>
                    <Link to="/Signout">Signout</Link>


                </ul>
                <h4>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h4>
                <Link to="/paymentsgateway">Payment Gateway
                    <Timer/>
                    </Link>
            </nav>
            <div className='container'>
                <img src={payimg} alt="react logo" />
            </div>
            <footer className='section'>
                <p>
                    copyright &copy; Transfer International company
                    2023 .all rights reserved
                </p>

            </footer>
        </div>
    )
}
