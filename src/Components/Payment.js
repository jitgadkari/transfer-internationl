import React from 'react'
import { useNavigate } from 'react-router-dom';
import ReactGA from "react-ga";

export default function Payment({ url, paymentMethod,button,nav }) {
    const navigate = useNavigate();
    const cancelHandle=()=>{
        navigate("/")
    }
    const okHandle=()=>{
        navigate(nav);
        // navigate to particular payment gateway
        ReactGA.event({
            category:`${paymentMethod}`,
            action: `made payment using${paymentMethod}`
        })
        alert("payment initiated");

    }
  
    return (
        <div className='listpayment'>
        <div className='maintain'>
            <div className='card' style={{backgroundImageUrl :"../Components/Image/paypal.png"}}>
                <ul className='payyy'>
                    <b>Make payment with </b>
                    {/* <a href={url} onClick={paymentHandler}> {paymentMethod} </a> */}
                    {/* {button} */}
                    <br></br>
                    <br></br>
                    <button className='btn btn-primary' onClick={okHandle} >{paymentMethod}</button>
                    <button className='btn btn-primary' onClick={cancelHandle}>Cancel</button>
                </ul>
            </div>
            </div>
        </div>
    )
}