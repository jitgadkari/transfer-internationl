import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

import Razorpay from './Razorpay';
import Stripe from './Stripe';

export default function Paymentmethods() {
    const [isUsingRazorpay, setIsUsingRazorpay] = useState(false);
    const [isUsingStripe, setIsUsingStripe] = useState(false);

    // const navigate = useNavigate();
    const onRazorpayClickHandler = () => {
      setIsUsingRazorpay(true);
    }
    const onStripeClickHandler = () => {
        setIsUsingStripe(true);
      }


    return (
        <div>
            {isUsingRazorpay && (
                <Razorpay setIsUsingRazorpay={setIsUsingRazorpay} />
            )}
            {isUsingStripe && (
                <Stripe setIsUsingStripe={setIsUsingStripe} />
            )}
            <div className='containerpaymentpage'>
                {!isUsingRazorpay && !isUsingStripe && (
                    <>
                        <h2 className='text-align'>Make payment in any region using prefferd gateway</h2>
                        <h1 className='text-align'>PaymentGateway</h1>
                        <button className='btn btn-primary space' onClick={onRazorpayClickHandler}>Razorpay</button>
                        <button className='btn btn-primary space' onClick={onStripeClickHandler}>Stripe</button>

                    </>
                )}

            </div>
        </div>
    )
}
