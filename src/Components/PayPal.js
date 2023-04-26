import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';




export default function PayPal() {
    const navigate = useNavigate();
    const cancelHandle =()=>{
      navigate("/paymentsgateway")
    }

    return (
        

        <div className="paypal-body">
        <h1>Payment using PayPal</h1>

        <p>
          <span className="price">$.1</span>
        </p>
        <PayPalScriptProvider
          options={{ "client-id":"Aby38pHVGZbSh5bLpbkKaXBu5uBUJOHKwzPRop8XsLMitgh-XZRAyoDOBKyVC9vCHKZc96X2ZRS81lca" }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: ".1",
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              const name = details.payer.name.given_name;
              alert("Transaction completed by " + name);
            }}
          />
        </PayPalScriptProvider>
        <button onClick={cancelHandle}>Cancel</button>
      </div>
    
                )
}
