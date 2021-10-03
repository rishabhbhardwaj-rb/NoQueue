/* eslint-disable no-unused-vars */

// import bootstrap from 'bootstrap'
import './cart.css'

import Navbar from '../Navbar'
import Card from './cardCart'
import { useLocation } from "react-router";
import axios from "axios";
import {Link} from "react-router-dom"


const Cart = () =>
{
    const location = useLocation();
    const {mobile,sName,cData, shopName} = location.state;
    console.log(sName);
    function handleClick(){
        var i;
        var items=[];
        var qty=[];
        var total=0;
        for(i=0; i<cData.length; i++){
            items[i] = cData[i].name;
            qty[i] = 1;
            total += cData[i].price;
        }
        const customerData={
            Name:sName,
            Phone:mobile,
            Order:{
                Items:items,
                Qt:qty,
                Total:total
            },
            ShopName:shopName,
            Email:"abc@gmail.com"
        }
        console.log(customerData);
        axios.post('https://no-queue-webapp.herokuapp.com/placeorder',customerData).then(response =>{
            console.log(response);
        });

    }

    
    return(
        
        
        <div className="containor_main">
            <Navbar />  
            
            <Card cData={cData}/>
            


            <div className="final_buttons">
                <div className="buttons_main">
                <button  className="proceed">Go Back</button>
                <Link onClick={handleClick} to={{
            pathname:'/placeOrder',
            state: {
              mobile:mobile,
              sName:sName
            }}}  ><button className="Back">Proceed</button></Link>
                </div>
            </div>


           
        </div>

    )
}
export default Cart;