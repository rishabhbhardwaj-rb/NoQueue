import { Update } from '@material-ui/icons';
import React, { useState } from 'react'

const CartQty = ({index, update}) =>{
    const [value, setValue] = useState(1);
   
    const add =() =>
    
    {
        // if(value > -1 )
        // {
        //     button.disabled = false;
        // }
        setValue(value+1)
        update(index, value);
    }
    const subtract = () =>
    {
        if(value > 1)
        {
            // button.disabled = true;
            setValue(value-1);
            Update(index, value);
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
