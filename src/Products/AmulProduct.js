/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import useState from 'react-usestateref'
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductPrice,
    ProductButton
  } from './ProductsElements';
import {Link} from "react-router-dom";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Product = ({heading, data, mobile, sName, shopName}) => {
  const [cartData, setCartData] = useState([]);

   console.log(cartData);

    return (
<ProductsContainer>
<Link to={{
            pathname:'/cart',
            state: {
              mobile:mobile,
              sName: sName,
              cData: cartData,
              shopName: shopName
            }
  
}}><div style={{marginLeft:"1200px", marginTop:"-40px"}}><ShoppingCartIcon color="primary" sx={{fontSize:50}}  /></div></Link>
      <ProductsHeading>{heading}</ProductsHeading>
      
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.ImageURL} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.Name}</ProductTitle>
                <ProductPrice>Rs. {product.Price}</ProductPrice>
                <ProductButton onClick={event => {
                  const obj = {
                    name:product.Name,
                    price:product.Price,
                    image:product.ImageURL
                  }
                  var isThere = false;
                  var i;
                  for(i=0; i<cartData.length; i++){
                    if(cartData[i].name === obj.name){
                      isThere = true;
                      break;
                    }
                  }
                  if(!isThere){

                  
                  setCartData(prevValue =>{
                    return[...prevValue, obj];
                  });}
                  
                }}>Add to Cart</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
    )
}

export default Product


// { () =>{
//   console.log(product.Name);
//   // useEffect(() => {                   
//   //   setCartData({
//   //   name:product.Name,
//   //   price:product.Price,
//   //   image:product.ImageURL
//   // }); }, []);
//   setCartData({
//     name:product.Name,
//     price:product.Price,
//     image:product.ImageURL
//   });
//   console.log(cartData);
//   console.log(cartData);

//   // onAdd(cartData);
//   // setCartData({
//   //   name:"",
//   //   price:0,
//   //   image:""
//   // });
// }}