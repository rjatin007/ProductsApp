import React, { Component } from "react";
import styled from "styled-components";

const ProductsContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
`;
const ProductsList = styled.div`
  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 45% 45%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 30% 30% 30%;
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 23% 23% 23% 23%;
  }
  padding:20px;
`;
const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  box-shadow: 1px 2px 3px #ccc;
  margin:10px;
`;

const ProductImage = styled.img`
  height: 60%;
  width: 90%;
  object-fit:contain;
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`;
const Text = styled.h5`
  @media (max-width: 640px) {
    font-size: ${props=>props.type === "title" ? "22px" : "18px"};
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: ${props=>props.type === "title" ? "22px" : "18px"};
  }

  @media (min-width: 1024px) {
    font-size: ${props=>props.type === "title" ? "18px" : "16px"};
  }
`;
const Button = styled.button`
  outline:none;
  
  border: 1px solid #ccc;
  color: blue;
  padding: 10px;
  text-align:center;
  
  border-radius:10px;
`;
const ListProducts = ({ products , showMore, totalCount}) => {
    
  return (
    <ProductsContainer>
      <ProductsList>
       {products &&
        products.length > 0 &&
        products.map(product => (
          <Product>
            <ProductImage src={product.image}/>
            {/* <ProductImage src='https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg'/> */}
            <ProductDetailsContainer>
              <Text type="title">{product.title}</Text>
              <Text type="price">{product.price}</Text>
            </ProductDetailsContainer>
          </Product>
        ))}
      </ProductsList>
     {((products&& products.length > 0)&&(totalCount===products.length) ? null : <Button onClick={showMore}>
        <Text type="button">Show More</Text>
     </Button>)}
    </ProductsContainer>
  );
};
export default ListProducts;