import React,{useState, useEffect} from 'react';
import Navbar from "../Navbar";
import Footer from "../footer/Footer"
import AmulProduct from "../Products/AmulProduct"
// import { NescafeData } from '../Products/NescafeData';
import axios from "axios";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router';
function Nescafe() {
    const [info, setInfo] = useState([]);
    const location = useLocation();
    const {mobile, sName} = location.state;
    useEffect(() => {
        axios.get('https://no-queue-webapp.herokuapp.com/Nescafe/items')
  .then((response) => {
       setInfo(response.data);

  });
    }, []);
    return (
        <div>
            <Navbar />
            {/* <Link to="/"><div style={{marginLeft:"1200px", marginTop:"40px"}}><ShoppingCartIcon color="primary" sx={{fontSize:50}}  /></div></Link> */}
            <AmulProduct heading="Welcome to Nescafe" data={info} mobile={mobile} sName={sName} shopName="Nescafe"/>


            <Footer />
        </div>
    )
}

export default Nescafe
