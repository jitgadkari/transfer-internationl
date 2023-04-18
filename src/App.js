
import './App.css';
import React,{useEffect} from 'react';
import ReactGa from "react-ga";
// import Payments from './Components/Payments';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentGateway from './Components/Pages/PaymentGateway';
import Home from './Components/Pages/Home';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import { useState } from 'react';
import { auth } from './Components/Firebase';
import Razorpay from './Components/Razorpay';
import Signout from './Components/Pages/Signout';
import PayPal from './Components/PayPal';
import Stripe from './Components/Stripe';
// import Razorpay from './Components/Razorpay';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/paymentsgateway',
//     element: <PaymentGateway/>
//   },
// {
//   path: '/razorpay',
//   element: <Razorpay/>
// }
// {
//   path: '/signin',
//   element: <SignIn/>
// },
// {
//   path: '/signup',
//   element: <SignUp/>
// }
// {
//   path: '/dashboard',
//   element: <Dashboard/>
// },
// ])

function App() {
  useEffect(()=>{
    ReactGa.initialize("UA-263969836-1")
    ReactGa.pageview("/")
  },[]);


   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else {
        setUserName("");
      }
      console.log(user)
    })
  })
  const Region_data = [
    {
      id: 'r1',
      paymentMethod: 'Razorpay',
      region: "Asia Pacific",
      url:"https://rzp.io/i/FtXiFGYFO",
      // button:<Razorpay/>,
      nav:"/razorpay"
    },
    {
      id: 'r2',
      paymentMethod: 'Paypal',
      url:"https://buy.stripe.com/test_14k4i63vz5uW9Ve4gg",
      region: "North America",
      // button:<PayPal/>,
      nav:"/paypal"
    },
    {
      id: 'r3',
      paymentMethod: 'Razorpay',
      region: "Europe",
      url:"https://rzp.io/i/FtXiFGYFO",
      nav:"/razorpay"
    },
    {
      id: 'r4',
      paymentMethod:"Stripe",
      url:"https://buy.stripe.com/test_14k4i63vz5uW9Ve4gg",
      region: "Asia Pacific",
      nav:"/stripe"
    },
  ];
  return (
    // <div className="App">
    // <Payments/>
    // </div>
    // <RouterProvider router={router} />
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} isLoggedIn={isLoggedIn}/>} />
          <Route path="/SignIn" element={<SignIn setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/SignUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/paymentsgateway" element={<PaymentGateway Region_data={Region_data} />} />
          <Route path="/razorpay" element={<Razorpay />} />
          <Route path="/paypal" element={<PayPal />} />
          <Route path="/stripe" element={<Stripe/>} />
          <Route path="/Signout" element={<Signout setIsLoggedIn={setIsLoggedIn}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
