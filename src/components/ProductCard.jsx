import React from 'react';
import {useDispatch} from "react-redux";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

function ProductCard({props}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const removeProduct = (id) => {
        dispatch({type: "REMOVE_PRODUCT", id})
    }
    return (
        <ProductWrap>
            <ProductPhoto>
                <img className={'card'} src={props.img}/>
            </ProductPhoto>
            <h1 className={"productTitle"} onClick={() => navigate('/' + props.id)}>
                {props.title}</h1>
            <div className={"description"}>
                {props.desc}
            </div>
            <div className={"productPrice"}>{props.price}</div>
            <div className={"productButtons"}>
                <button
                    onClick={() => {removeProduct(props.id)
                    }}>
                    Add to cart
                </button>
            </div>
        </ProductWrap>
    );
};

const ProductWrap = styled.div`
  width: 300px;
  background: rgba(255, 255, 255, .8);
  padding: 10px;
  text-align: center;
  border-width: 1px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Montserrat', sans-serif;

  &:hover {
    transform: scale(1.05);
  }

  .productTitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000000;
  }

  .description {
    padding: 10px;
    font-size: 14px;
    color: rgb(66, 64, 64);
  }

  .productPrice {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin: 10px;
    color: #000000;
  }

  .productButtons button {
    color: white;
    background: #edafa4;
    font-size: 14px;
    line-height: 40px;
    margin: 0 auto;
    border-radius: 10px;
    border: none;
    width: 200px;
  }

  button:hover {
    background-color: #f3d4cf;
  }
`;
const ProductPhoto = styled.div`
  .card {
    width: 310px;
    height: 330px;
  }
`;

export default ProductCard;
