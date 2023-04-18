import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';

export default function Razorpay() {
    const [amount, setamount] = useState('');
    const navigate = useNavigate();
const cancelHandle =()=>{
  navigate("/paymentsgateway")
}
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_yAbw3tTnVxxsiy",
        key_secret:"p8IhNgl3CQthryQIjY2NP4pZ",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"ajit",
          email:"ajitgadkari12@gmail.com",
          contact:"8412867582"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="razorpay">
     <h2>Razorpay Payment </h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
     <button onClick={cancelHandle}>Cancel</button>
    </div>
  )
}
