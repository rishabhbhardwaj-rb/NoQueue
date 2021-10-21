import React,{useState, useEffect} from 'react';
import Navbar from "../Navbar";
import Footer from "../footer/Footer"
import AmulProduct from "../Products/AmulProduct"
// import { CanteenData } from '../Products/CanteenData';
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router';


function Canteen() {
    const [info, setInfo] = useState([]);
    const location = useLocation();
    const {mobile, sName} = location.state;
    useEffect(() => {
        axios.get('https://no-queue-webapp.herokuapp.com/Canteen/items')
  .then((response) => {
       setInfo(response.data);

  });
    }, []);
    return (
        <div>
            <Navbar />
            {/* <Link to="/"><div style={{marginLeft:"1200px", marginTop:"40px"}}><ShoppingCartIcon color="primary" sx={{fontSize:50}}  /></div></Link> */}
            <AmulProduct heading="Welcome to Canteen" data={info} mobile={mobile} sName={sName} shopName="Canteen"/>


            <Footer />
        </div>
    )
}

export default Canteen
