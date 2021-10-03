import './cart.css'
import {useEffect, useState} from 'react'
import CartQty from './CartQty'
const Cartcard = ({cData})=>
{
    // const button = document.getElementById('subtract');
    // const [value, setValue] = useState([1]);
   
    // const add =(index) =>
    
    // {
    //     // if(value > -1 )
    //     // {
    //     //     button.disabled = false;
    //     // }
    //     setValue(value+1)
    // }
    // const subtract = () =>
    // {
    //     if(value > 1)
    //     {
    //         // button.disabled = true;
    //         setValue(value-1);

    //     }
        
    // }
    
    
    return(
            <div>
            {cData.map((cd,index) => {
                return(
            <div className="contents_main">

            
                
            
                <div className="cartContent">

                    <div className="imagecontainor">
                        <img src={cd.image} alt="itemImage" />

                    </div>
                    <div className="description">
                        <div className="content_containor">
                            <h2>{cd.name}</h2>
                            <h3>Rs. {cd.price}</h3>

                        </div>

                    </div>
                    {/* <div className="items">
                        
                        <div className="containor_items">

                            <button id={index} className="add" onClick={add}>+</button>
                            <p>{value}</p>
                            <button id={cd.name} className= "subtract" onClick={subtract}>-</button>

                        </div>

                    </div> */}
                    <CartQty />
                    <div className="cross">
                        <button className="bin"><i class="fas fa-trash-alt"></i></button>
                        
                    </div>
                </div>
                
            

                
            
            </div>
                )
        })} 
            </div>
    )
}

export default Cartcard