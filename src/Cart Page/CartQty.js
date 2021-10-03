import React, { useState } from 'react'

const CartQty = () =>{
    const [value, setValue] = useState(1);
   
    const add =(index) =>
    
    {
        // if(value > -1 )
        // {
        //     button.disabled = false;
        // }
        setValue(value+1)
    }
    const subtract = () =>
    {
        if(value > 1)
        {
            // button.disabled = true;
            setValue(value-1);

        }
        
    }
    return(
        <div className="items">
                        
        <div className="containor_items">

            <button  className="add" onClick={add}>+</button>
            <p>{value}</p>
            <button  className= "subtract" onClick={subtract}>-</button>

        </div>

    </div>
    )
}

export default CartQty
