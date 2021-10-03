import React from "react";
import {Link} from "react-router-dom";
function LogIn() {
  return (
    <div style={{backgroundColor:"#F3F1F5", minHeight:"100vh", backgroundImage:`url(${"https://www.transparenttextures.com/patterns/padded-light.png"})`}}>
    <div style={{position:"relative", height:"100%", backgroundColor:"pink"}}>
       
      <Link to="/studentLogin" ><button className="btn btn1">Students</button></Link>
      <Link to="/ownerLogin" ><button className="btn btn2">Owner</button></Link>

    </div>
    </div>
  );
}

export default LogIn;

