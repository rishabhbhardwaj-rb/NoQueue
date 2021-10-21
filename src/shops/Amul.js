import React,{useEffect, useState} from 'react';
import Navbar from "../Navbar";
import Footer from "../footer/Footer"
import AmulProduct from "../Products/AmulProduct"
// import { amulData } from '../Products/AmulData';
import { useLocation } from 'react-router';
// import { getListSubheaderUtilityClass } from '@mui/material';
import axios from "axios";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import {Link} from "react-router-dom";
function Amul() {
    const [info, setInfo] = useState([]);
    const location = useLocation();
    const {mobile, sName} = location.state;


    useEffect(() => {
        axios.get('https://no-queue-webapp.herokuapp.com/Amul/items')
  .then((response) => {
       setInfo(response.data);

  });
    }, []);

    return (
        <div>
            <Navbar mobile={mobile} sName={sName}/>
            {/* <Link to="/"><div style={{marginLeft:"1200px", marginTop:"40px"}}><ShoppingCartIcon color="primary" sx={{fontSize:50}}  /></div></Link> */}
            <AmulProduct heading="Welcome to Amul" data={info} mobile={mobile} sName={sName} shopName="Amul"/>


            <Footer mobile={mobile} sName={sName}/>
        </div>
    )
}

export default Amul
