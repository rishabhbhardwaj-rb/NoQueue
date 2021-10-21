/* eslint-disable no-unused-vars */

// import bootstrap from 'bootstrap'
import './cart.css'
import {useState} from "react"
import Navbar from '../Navbar'
import Card from './cardCart'
import { useLocation } from "react-router";
import axios from "axios";
import {Link} from "react-router-dom"


const Cart = () =>
{
    const location = useLocation();
    const {mobile,sName,cData, shopName} = location.state;
    const [data, setData] = useState(cData);
    console.log(sName);
    var isChecked = false;
    var qty = [];
    function qtys(q){
        qty = q;
    }
    function deleteCart(index){
        // cData.splice(index, 1);
        var newArray = [...data];
        newArray.splice(index, 1);
        setData(newArray);
        
    }
    function handleClick(){
        isChecked = true;
        var i;
        var items=[];
        console.log(qty)
        var total=0;
        for(i=0; i<cData.length; i++){
            items[i] = cData[i].name;
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
            
            <Card cData={data} isChecked={isChecked} qtys={qtys} deleteCart={deleteCart}/>
            


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