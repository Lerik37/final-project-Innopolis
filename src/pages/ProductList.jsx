import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import ProductCard from "../components/ProductCard";

function ProductList() {
    const product = useSelector(state => state.cards)
    return (
        <ContainerProductList>
            <h1 className={'ProductListTitle'}>All plants</h1>
            <ContainerProductListInner>
            {product.map(item =>
                <ProductCard
                    key={item.id}
                    props = {item}
                />
            )}
            </ContainerProductListInner>
        </ContainerProductList>
    );
};

const ContainerProductList = styled.div`
  width: 1168px;
  margin: 40px auto;
  
  .ProductListTitle {
    margin: 0 auto;
    font-weight: 400;
    font-size: 28px;
    line-height: 80px;
    color: #0e211c;
    text-align: center;
    font-family: 'Edmondsans-medium', sans-serif;
    text-transform: uppercase;
  }

  .ProductListTitle::after {
    content: "";
    display: block;
    margin: 0.5em auto 0;
    border-top: 3px solid #edafa4;
    box-sizing: border-box;
    width: 84px;
  }
`
const ContainerProductListInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 40px auto;
  gap: 20px;
`;

export default ProductList;
