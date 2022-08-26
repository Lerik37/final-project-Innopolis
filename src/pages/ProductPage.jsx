import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import BackImage from '../assets/background_auth.jpeg';


const ProductPage = () => {
    const params = useParams()
    const id = params.id - 1
    const product = useSelector(state => state.cards[id])
    return (
        <ProductPageContainer>
            <CardWrapper>
                <ProductCard
                    key={product.id}
                    props={product}
                />
            </CardWrapper>
        </ProductPageContainer>
    );
};

const ProductPageContainer = styled.div`
  height: 700px;
`;
const CardWrapper = styled.div`
    margin: 100px 500px;
`;

export default ProductPage;