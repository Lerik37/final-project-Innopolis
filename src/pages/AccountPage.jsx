import React from 'react';
import styled from "styled-components";
import {FaCheckCircle} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import BackImage from '../assets/background_auth.jpeg';

export default function AccountPage(){
    return (
        <ContainerPage>
            <ContainerCongrats>
                <FaCheckCircle className={'FaCheckIcon'}/>
                <p>Congratulations, Valeria!<br/>You have successfully signed in.<br/>Wish you have a nice experience!</p>
                <NavLink to="/catalog"><button>Visit Shop</button> </NavLink>
            </ContainerCongrats>
        </ContainerPage>
    );
};

const ContainerPage = styled.div`
  height: 500px;
  background: url(${BackImage})no-repeat;
  background-size: cover;
`;
const ContainerCongrats = styled.div`
  width: 500px;
  height: 250px;
  margin: 50px 350px;
  background: rgba(253, 253, 253, 0.8);
  border-radius: 20px;
  padding: 20px;
  position: absolute;

  p {
    width: 300px;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    top: 80px;
    right: 100px;
  }

  button {
    width: 300px;
    height: 40px;
    background: #156963;
    border: 1px solid #156963;
    border-radius: 2px;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FAFEFE;
    margin: 0 auto;
    position: absolute;
    top: 200px;
    right: 100px;
  }

  button:hover {
    cursor: pointer;
    transition: color 500ms ease;
    background: rgba(21, 105, 99, 0.8);
  }

  .FaCheckIcon {
    width: 100px;
    height: 100px;
    color: #67a250;
  }
`





