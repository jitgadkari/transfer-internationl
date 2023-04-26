// import { async } from '@firebase/util';
import Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Copyrazorpay() {
  const [amount, setamount] = useState('');
  const navigate = useNavigate();
  const cancelHandle = () => {
    navigate("/paymentsgateway")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      let options = {
        key: "rzp_test_yAbw3tTnVxxsiy",
        key_secret: "p8IhNgl3CQthryQIjY2NP4pZ",
        amount: amount * 100,
        currency: "INR",
        name: "Transfer International",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          var values = {
            razorpay_signature: response.razorpay_signature,
            razorpay_order_id: response.razorpay_order_id,
            transactionid: response.razorpay_payment_id,
            transactionamount: amount,
          }
          console.log(values);
          Axios.post('http://localhost:8080/api/orders', values)
            .then(res => { alert("Success") })
            .catch(e => console.log(e))


        },
        prefill: {
          name: "ajit",
          email: "ajitgadkari12@gmail.com",
          contact: "8412867582"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      Axios.post('http://localhost:8080/api/orders', { amount: amount })
        .then(res => {
          options.order_id = res.data.id;
          options.amount = res.data.amount;
          console.log(options)
          var rzp1 = new window.Razorpay(options);
          rzp1.open();
          // rzp1.on('payment.failed', function (response){
          //   console.log(response.error.code);
          //   console.log(response.error.description);
          //   console.log(response.error.source);
          //   console.log(response.error.step);
          //   console.log(response.error.reason);
          //   console.log(response.error.metadata.order_id);
          //   console.log(response.error.metadata.payment_id);
          //   alert("please check payment failed")
          // });
        })
        .catch(e => console.log(e))
      // var pay = new window.Razorpay(options);
      // pay.open();

    }    // await Axios.post("http://localhost:8080/api/orders",
    // {
    //     amount:amount


    // }).then((response) => {
    //     console.log(response);
    //     if (response.status == 200) {
    //         const amount =response.options.options.amount;
    //         console.log(amount);
    //         // localStorage.setItem('token', token);
    //         // setTimeout(() => {
    //         //   navigate('/dashboard');
    //         // }, 1000);

    //     }
    //     else{
    //       alert("Invalid Credentials");
    //       // navigate('/signin');
    //     }

    // }).catch(error => {
    //     alert("Invalid Credentials");
    //     // navigate('/signin');

    // });
    // return;
  }

  // $.ajax(
  //   {
  //     url:'api/orders',
  //     data:JSON.stringify({amount:amount,info:'order_request'}),
  //     contentType:'application/json',
  //     type:'POST',
  //     dataType:'json',
  //     success:function(response){
  //       console.log(response);
  //     },
  //     error:function(error){
  //       console.log(error)
  //       alert("something went wrong")
  //     }
  //   }
  // )
  return (
    <div className="razorpay">
      <h2>Razorpay Payment </h2>
      <br />
      <input type="text" placeholder='Enter Amount' value={amount} onChange={(e) => setamount(e.target.value)} />
      <br /><br />
      <button onClick={handleSubmit}>submit</button>
      <button onClick={cancelHandle}>Cancel</button>
    </div>
  )
}
