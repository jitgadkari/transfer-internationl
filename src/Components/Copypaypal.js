//Trial
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Copypaypal() {
    return (
    <div className="App">
        <PayPalScriptProvider options={{ "client-id": "Aby38pHVGZbSh5bLpbkKaXBu5uBUJOHKwzPRop8XsLMitgh-XZRAyoDOBKyVC9vCHKZc96X2ZRS81lca" }}>
          <PayPalButtons
                  fundingSource='paypal'
    
                  style={{
                    layout: 'vertical',
                    shape: 'rect'
                  }}
                  createOrder={async (data, actions) => {
                    const response = await fetch("http://localhost:9597/orders", {
                      method: "POST"
                    });
                    const details = await response.json();
                    return details.id;
                  }}
                  onApprove={async (data, actions) => {
                    const response = await fetch(`http://localhost:9597/orders/${data.orderID}/capture`, {
                      method: "POST"
                    });
                    const details = await response.json();
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you
    
                    // This example reads a v2/checkout/orders capture response, propagated from the server
                    // You could use a different API or structure for your 'orderData'
    
                    const errorDetail = Array.isArray(details.details) && details.details[0];
                    if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                      return actions.restart(); // Recoverable state, per:
                      // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                    }
    
                    if (errorDetail) {
                      let msg = 'Sorry, your transaction could not be processed.';
                      if (errorDetail.description) msg += ' ' + errorDetail.description;
                      if (details.debug_id) msg += ' (' + details.debug_id + ')';
                      return alert(msg); // Show a failure message (try to avoid alerts in production environments)
                    }
    
                    // Successful capture! For demo purposes:
                    console.log('Capture result', details, JSON.stringify(details, null, 2));
                    const transaction = details.purchase_units[0].payments.captures[0];
                    alert('Transaction '+ transaction.status + ': ' + transaction.id + 'See console for all available details');
                  }}
                />
              <PayPalButtons
                  fundingSource='paylater'
    
                  style={{
                    layout: 'vertical',
                    shape: 'rect'
                  }}
                  createOrder={async (data, actions) => {
                    const response = await fetch("http://localhost:9597/orders", {
                      method: "POST"
                    });
                    const details = await response.json();
                    return details.id;
                  }}
                  onApprove={async (data, actions) => {
                    const response = await fetch(`http://localhost:9597/orders/${data.orderID}/capture`, {
                      method: "POST"
                    });
                    const details = await response.json();
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you
    
                    // This example reads a v2/checkout/orders capture response, propagated from the server
                    // You could use a different API or structure for your 'orderData'
    
                    const errorDetail = Array.isArray(details.details) && details.details[0];
                    if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                      return actions.restart(); // Recoverable state, per:
                      // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                    }
    
                    if (errorDetail) {
                      let msg = 'Sorry, your transaction could not be processed.';
                      if (errorDetail.description) msg += ' ' + errorDetail.description;
                      if (details.debug_id) msg += ' (' + details.debug_id + ')';
                      return alert(msg); // Show a failure message (try to avoid alerts in production environments)
                    }
    
                    // Successful capture! For demo purposes:
                    console.log('Capture result', details, JSON.stringify(details, null, 2));
                    const transaction = details.purchase_units[0].payments.captures[0];
                    alert('Transaction '+ transaction.status + ': ' + transaction.id + ' See console for all available details');
                  }}
                />
              <PayPalButtons
                  fundingSource='venmo'
    
                  style={{
                    layout: 'vertical',
                    shape: 'rect'
                  }}
                  createOrder={async (data, actions) => {
                    const response = await fetch("http://localhost:9597/orders", {
                      method: "POST"
                    });
                    const details = await response.json();
                    return details.id;
                  }}
                  onApprove={async (data, actions) => {
                    const response = await fetch(`http://localhost:9597/orders/${data.orderID}/capture`, {
                      method: "POST"
                    });
                    const details = await response.json();
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you
    
                    // This example reads a v2/checkout/orders capture response, propagated from the server
                    // You could use a different API or structure for your 'orderData'
    
                    const errorDetail = Array.isArray(details.details) && details.details[0];
                    if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                      return actions.restart(); // Recoverable state, per:
                      // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                    }
    
                    if (errorDetail) {
                      let msg = 'Sorry, your transaction could not be processed.';
                      if (errorDetail.description) msg += ' ' + errorDetail.description;
                      if (details.debug_id) msg += ' (' + details.debug_id + ')';
                      return alert(msg); // Show a failure message (try to avoid alerts in production environments)
                    }
    
                    // Successful capture! For demo purposes:
                    console.log('Capture result', details, JSON.stringify(details, null, 2));
                    const transaction = details.purchase_units[0].payments.captures[0];
                    alert('Transaction '+ transaction.status + ': ' + transaction.id + '  See console for all available details');
                  }}
                />
              <PayPalButtons
                  fundingSource='undefined'
    
                  style={{
                    layout: 'vertical',
                    shape: 'rect'
                  }}
                  createOrder={async (data, actions) => {
                    const response = await fetch("http://localhost:3000/orders", {
                      method: "POST"
                    });
                    const details = await response.json();
                    return details.id;
                  }}
                  onApprove={async (data, actions) => {
                    const response = await fetch(`http://localhost:9597/orders/${data.orderID}/capture`, {
                      method: "POST"
                    });
                    const details = await response.json();
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you
    
                    // This example reads a v2/checkout/orders capture response, propagated from the server
                    // You could use a different API or structure for your 'orderData'
    
                    const errorDetail = Array.isArray(details.details) && details.details[0];
                    if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                      return actions.restart(); // Recoverable state, per:
                      // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                    }
    
                    if (errorDetail) {
                      let msg = 'Sorry, your transaction could not be processed.';
                      if (errorDetail.description) msg += ' ' + errorDetail.description;
                      if (details.debug_id) msg += ' (' + details.debug_id + ')';
                      return alert(msg); // Show a failure message (try to avoid alerts in production environments)
                    }
    
                    // Successful capture! For demo purposes:
                    console.log('Capture result', details, JSON.stringify(details, null, 2));
                    const transaction = details.purchase_units[0].payments.captures[0];
                    alert('Transaction '+ transaction.status + ': ' + transaction.id + 'See console for all available details');
                  }}
                />
              <PayPalButtons
                  fundingSource='card'
    
                  style={{
                    layout: 'vertical',
                    shape: 'rect'
                  }}
                  createOrder={async (data, actions) => {
                    const response = await fetch("http://localhost:9597/orders", {
                      method: "POST"
                    });
                    const details = await response.json();
                    return details.id;
                  }}
                  onApprove={async (data, actions) => {
                    const response = await fetch(`http://localhost:9597/orders/${data.orderID}/capture`, {
                      method: "POST"
                    });
                    const details = await response.json();
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you
    
                    // This example reads a v2/checkout/orders capture response, propagated from the server
                    // You could use a different API or structure for your 'orderData'
    
                    const errorDetail = Array.isArray(details.details) && details.details[0];
                    if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                      return actions.restart(); // Recoverable state, per:
                      // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                    }
    
                    if (errorDetail) {
                      let msg = 'Sorry, your transaction could not be processed.';
                      if (errorDetail.description) msg += '' + errorDetail.description;
                      if (details.debug_id) msg += ' (' + details.debug_id + ')';
                      return alert(msg); // Show a failure message (try to avoid alerts in production environments)
                    }
    
                    // Successful capture! For demo purposes:
                    console.log('Capture result', details, JSON.stringify(details, null, 2));
                    const transaction = details.purchase_units[0].payments.captures[0];
                    alert('Transaction '+ transaction.status + ': ' + transaction.id + 'See console for all available details');
                  }}
                />
    
        </PayPalScriptProvider>
    </div>
    );
}

