/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {Link} from "react-router-dom"
const Navbar = ({mobile}) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#2d3436"}}>
        <div class="container-fluid">
          <Link style={{textDecoration:"none"}} to={{
            pathname:'/Home',
            state: {
              mobile:mobile
            }}} ><a class="navbar-brand navHead" href="#" style={{fontSize:"27px"}}>NoQueue</a> </ Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <Link to="/cart"><div style={{marginRight:"40px"}}><AddShoppingCartIcon color="primary" fontSize="large" /></div></Link> */}
          

        </div>
      </nav>
    </>
  );
};

export default Navbar;
