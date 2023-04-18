import React from 'react'
import {  useNavigate } from 'react-router-dom';
// import StripeChecout from 'react-stripe-checkout';

export default function Stripe() {
    const navigate = useNavigate();
    // const onToken = (token) => {
    //     console.log(token);
    // }

    const cancelHandle =()=>{
        navigate("/paymentsgateway");
    }
    return (
        <div className='listpayment'>
               <h5>Make payment with Stripe Gateway</h5>
               <div>
                <ul className='strippe'>
                   
                    <a href="https://buy.stripe.com/test_14k4i63vz5uW9Ve4gg">Stripe Payment</a>
                    {/* <script async
                        src="https://js.stripe.com/v3/buy-button.js">
                    </script>
                    <stripe-buy-button
                        buy-button-id="buy_btn_1MtmjbSCRGbr1h21k1kVSVkR"
                        publishable-key="pk_test_51Mtkd6SCRGbr1h21RPZG5l3xV4dSEdJURqXS76FXNRZjvISWb4ZR5HbDRN2VuYWYtfAyu7hRmlEc3L8HjpLnN8yj00UX4aw7w1"
                    >
                    </stripe-buy-button>
                
                    <button class="GFG"
                        onclick="window.location.href = 'https://buy.stripe.com/test_14k4i63vz5uW9Ve4gg';">
                        make payment
                    </button>
                    <StripeChecout
                        token={onToken}
                        name="Traveling amount"
                        currency='Inr'
                        amount="10000"
                        stripekey="sk_test_51Mtkd6SCRGbr1h21kl0PnasVGdkruYAv1TvrZ807d1bXbtl9cjxkGzEZ8LOax3wOnPYt3DghZtB0iEUZ1wL6HxoK001WD7yqvi"
                    /> */}
                </ul>
                </div>
                <div>
                <button onClick={cancelHandle}>Cancel</button>
                </div>
            </div>
    
    )
}
