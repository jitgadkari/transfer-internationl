
import './App.css';
// import Payments from './Components/Payments';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import PaymentGateway from './Components/Pages/PaymentGateway';
import Home from './Components/Pages/Home';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import { useEffect, useState } from 'react';
import { auth } from './Components/Firebase';
import Razorpay from './Components/Razorpay';
import Signout from './Components/Pages/Signout';
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
const [userName,setUserName]=useState("");
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      setUserName(user.displayName)
    }else{
      setUserName("");
    }
    console.log(user)
  })
})

  return (
    // <div className="App">
    // <Payments/>
    // </div>
    // <RouterProvider router={router} />
    <div>
      <Router>
        <Routes>
          <Route path="/" element ={<Home name={userName}/>}/>
          <Route path="/SignIn" element ={<SignIn/>}/>
          <Route path="/SignUp" element ={<SignUp/>}/>
          <Route path="/paymentsgateway" element ={<PaymentGateway/>}/>
          <Route path="/razorpay" element ={<Razorpay/>}/>
          <Route path="/Signout" element ={<Signout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
