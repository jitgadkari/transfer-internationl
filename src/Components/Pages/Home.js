import React from 'react'
import { useNavigate } from 'react-router-dom'
import payimg from '../Image/Payment-Gateway.png';

export default function Home() {

    const navigate =useNavigate();
    const onPaymentGatewaysClickHandler =()=>{
        navigate("/paymentsgateway");
    }
    return (
        <div>
            <nav className='Navbar'>
                <h1>Transfer International</h1>
                <ul className='list'>
                    <li>Contact</li>
                    <li>Region</li>
                    <li>
                       <button onClick={onPaymentGatewaysClickHandler}
                         className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                         Payment Gateways
                     </button>
                     </li>
                </ul>
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
