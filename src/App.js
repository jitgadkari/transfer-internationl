
import './App.css';
// import Payments from './Components/Payments';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PaymentGateway from './Components/Pages/PaymentGateway';
import Home from './Components/Pages/Home';
// import Razorpay from './Components/Razorpay';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/paymentsgateway',
    element: <PaymentGateway/>
  },
  // {
  //   path: '/razorpay',
  //   element: <Razorpay/>
  // }
  // {
  //   path: '/signin',
  //   element: <Signin/>
  // },
  // {
  //   path: '/signup',
  //   element: <Signup/>
  // },
  // {
  //   path: '/dashboard',
  //   element: <Dashboard/>
  // },
])

function App() {
  return (
    // <div className="App">
    // <Payments/>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
