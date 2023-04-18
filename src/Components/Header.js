import React, { } from 'react'
// import Timer from '../Timer';
import { Link } from 'react-router-dom';
// import Timer from './Timer';
export default function Header({name,isLoggedIn}) {



    // const navigate =useNavigate();
    // const onPaymentGatewaysClickHandler =()=>{
    //     navigate("/paymentsgateway");
    // }
    // const onSignInClickHandler =()=>{
    //     navigate("/SignIn");
    // }
    // const onSignUpClickHandler =()=>{
    //     navigate("/SignUp");
    // }
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [timerDays, setTimerDays] = useState();
    // const [timerHours, setTimerHours] = useState();
    // const [timerMinutes, setTimerMinutes] = useState();
    // const [timerSeconds, setTimerSeconds] = useState();


    // let interval;

    // const startTimer = () => {
    //     const countDownDate = new Date("Apr 15,2023").getTime();

    //     interval = setInterval(() => {
    //         const now = new Date().getTime();

    //         const distance = countDownDate - now;

    //         const days = Math.floor(distance / (24 * 60 * 60 * 1000));
    //         const hours = Math.floor(
    //             (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    //         );
    //         const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (60 * 1000)) / 1000);

    //         if (distance < 0) {
    //             // Stop Timer

    //             clearInterval(interval.current);
    //         } else {
    //             // Update Timer
    //             setTimerDays(days);
    //             setTimerHours(hours);
    //             setTimerMinutes(minutes);
    //             setTimerSeconds(seconds);
    //         }
    //     });
    // };
    // useEffect(() => {
    //     startTimer();
    // });
  return (
    <>
         <nav className='Navbar'>
                <h1>Transfer International</h1>
                <ul className='list'>
                    {/* <li>Region    <select >
                        <option value='Asia Pacific'>Asia Pacific</option>
                        <option value='North America'>North America</option>
                        <option value='Europe'>Europe</option>
                    </select> */}
                    {/* </li> */}
                    {/* <li>
                       <button onClick={onSignInClickHandler}
                         className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                         SignIn
                     </button>
                     </li>
                     <li>
                       <button onClick={onSignUpClickHandler}
                         className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                         SignUp
                     </button>
                     </li>
                    <li>
                       <button onClick={onPaymentGatewaysClickHandler}
                         className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                         Payment Gateways
                     </button>
                     </li> */}




                    {/* {isLoggedIn &&(<Link to="/SignIn" >SignIn</Link>)}
                    {isLoggedIn &&(<Link to="/SignUp">SignUp</Link>)} */}

                    {(<Link to="/SignIn" >SignIn</Link>)}
                    {(<Link to="/SignUp">SignUp</Link>)}


                </ul>
                <h4>{name ? `Welcome - ${name}` : "Login Please"}</h4>
               { !isLoggedIn &&(<Link to="/paymentsgateway">Payment Gateway
                    {/* <Timer timerDays={timerDays}
                        timerHours={timerHours}
                        timerMinutes={timerMinutes}
                        timerSeconds={timerSeconds} /> */}
                </Link>)}
                {!isLoggedIn &&(<Link to="/Signout">Signout</Link>)}
            </nav>
    </>
  )
}
