import React from "react";
import {Link} from "react-router-dom"

const OrderPlaced = ({mobile, sName}) =>{
    return(
        <div>
            <img alt="Thank you" src="https://www.creativefabrica.com/wp-content/uploads/2018/07/Thank-you-for-your-order-7-580x386.jpg" />
            <h2>Owner will contact you when your Order is Ready!!!</h2>
            <Link to={{
            pathname:'/Home',
            state: {
              mobile:mobile,
              sName:sName
            }}}><button className="btn btn3">Home</button></Link>
        </div>
    );
}

export default OrderPlaced