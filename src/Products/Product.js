import React from 'react';
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductButton
  } from './ProductsElements';
import {Link} from "react-router-dom";
const Product = ({heading, data, mobile, sName}) => {
    return (
<ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                
                <Link to={{
            pathname:product.route,
            state: {
              mobile:mobile,
              sName:sName
            }
          }}><ProductButton>{product.button}</ProductButton></Link>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
    )
}

export default Product
