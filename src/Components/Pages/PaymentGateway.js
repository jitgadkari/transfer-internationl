import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Payment from '../Payment';
// import Paymentmethods from '../Paymentmethods'
import Region from '../Region'

export default function PaymentGateway(props) {
    const [filteredRegion, setFilteredRegion] = useState("Asia");

    const filterChangeHandler = selectedRegion => {
      setFilteredRegion(selectedRegion);
    }
    const filteredRegions = props.Region_data.filter(Region_data=>{
        return Region_data.region===filteredRegion
      });
    return (
        <div>
             <nav className='Navbar'>
                <h1>Transfer International</h1>
                <h4>{props.name ? `Welcome - ${props.name}` : ""}</h4>
                <ul className='list'>
                   <li><Region selected={filteredRegion} onChangeFilter={filterChangeHandler}/></li> 
                   {(<Link to="/Signout">Signout</Link>)}
                </ul>
            
                
            </nav>
            {filteredRegions.map((Region_data)=><Payment key={Region_data.id} paymentMethod={Region_data.paymentMethod} url={Region_data.url} region={Region_data.region} button={Region_data.button} nav={Region_data.nav} imageurl={Region_data.imageurl}/>)}
               
       
            {/* <Paymentmethods  /> */}
            
        </div>
    )
}
