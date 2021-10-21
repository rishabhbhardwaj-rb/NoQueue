import React from "react";
import Navbar from "./Navbar";
import Product from "./Products/Product"
import {productData} from "./Products/Data"
import Footer from "./footer/Footer"
import { useLocation } from "react-router";
function Home(){
    const location = useLocation();
    const {mobile,sName} = location.state;
    console.log(mobile);
    console.log(sName);
    
    return(
        <div>
            <Navbar />
            <div style={{position:"relative"}}>
            <img src="/images/backgroundImage.webp" alt="new" height="700px" width="100%"></img>
            <h1 style={{position:"absolute", top:"270px", left:"100px", color:"white", fontSize:"50px",   textShadow: "2px 2px 4px #000000"}}>Order Tasty Food</h1>
            <h1 style={{position:"absolute", top:"320px", left:"100px", color:"white", fontSize:"50px", textShadow: "2px 2px 4px #000000", textDecoration:"underline",   textDecorationColor:"#f5ba13"}}>from Anywhere in Seconds</h1>
            <h2 style={{position:"absolute", top:"380px", left:"100px", color:"white"}}>Eat Safe, Stay Safe</h2>

            </div>
            
            <Product heading="Choose Your Shop" data={productData} mobile={mobile} sName = {sName}/>
            <Footer />
        </div>
    );
}
export default Home;