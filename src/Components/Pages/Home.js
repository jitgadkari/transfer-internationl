import React from 'react'

import Footer from '../Footer';
import Header from '../Header';
// import { useNavigate } from 'react-router-dom'
import payimg from '../Image/Payment-Gateway.png';


export default function Home({name,isLoggedIn}) {

    return (
        <div>
            <Header name={name} isLoggedIn={isLoggedIn}/>
            <div className='containerimg'>
                <img className="image" src={payimg} alt="react logo" />
            </div>
            <Footer />
        </div>
    )
}
