// import Axios from 'axios';
import React, { useState } from 'react'

export default function Paytm() {
    const [amount, setamount] = useState('');
 const  paytmHandle=(e)=>{
        e.preventDefault();
        if (amount === "") {
          alert("please enter amount");
        } else{
            // Axios.post('http://localhost:8080/api/startpayment', amount)
            // .then(res => { alert("Success") })
            // .catch(e => console.log(e))

        }

    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h3>Payment using Paytm</h3>
                        <div className='m-2'>
                            <label htmlFor='user_amount'>Amount</label>
                            <input id="user_amount" type="text" value={amount} onChange={(e) => setamount(e.target.value)} className='form-control'/>
                        </div>
                        <div className='container text-center'>
                        <button className='btn btn-primary btn-sm' onClick={paytmHandle}>Proceed to pay</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
