import './cart.css'
import { useState} from 'react'
import CartQty from './CartQty'
const Cartcard = ({cData, isChecked, qtys, deleteCart})=>
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
    console.log(cData);
    var arr = [];
    for(var i=0; i< cData.length ; i++){
        arr.push(1);
    }
    const [qtyData, setQtyData] = useState(arr);
    function update(ind, val){
        var arr2 = qtyData;
        arr2[ind] = val+1;
        setQtyData(arr2);
        qtys(qtyData);
        console.log(qtyData);
    }
    // function handleClick(ind){
    //     deleteCart(ind);
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
                    <CartQty index={index} update={update}/>
                    <div className="cross">
                        <button className="bin" onClick={()=> {deleteCart(index)}}><i class="fas fa-trash-alt" ></i></button>
                        
                    </div>
                </div>
                
            

                
            
            </div>
                )
        })} 
            </div>
    )
}

export default Cartcard