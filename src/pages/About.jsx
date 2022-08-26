import React from 'react';
import styled from 'styled-components';
import About1 from '../assets/about1.webp';
import PhotoGallery from '../assets/photogallery.webp';

function About(){
    return (
        <ContainerAbout>
            <h1>About</h1>
            <img src={About1} className={'About1'}/>
            <p>Hey there. Valeria here. Welcome to our Plant Shop. A little bit about us...</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s</p>
            <img src={PhotoGallery} className={'PhotoGallery'}/>
        </ContainerAbout>
    );
};

const ContainerAbout = styled.div`
  width: 750px;
  height: 1750px;
  margin: 100px auto;

  h1 {
    width: 525px;
    margin: 0 auto;
    font-weight: 400;
    font-size: 68px;
    line-height: 80px;
    color: #757977;
    text-align: center;
    font-family: 'Edmondsans-medium', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1rem;
  }
h1::after{
  content: "";
  display: block;
  margin: 0.5em auto 0;
  border-top: 3px solid #edafa4;
  box-sizing: border-box;
  width: 84px;
}
  .About1 {
    width: 750px;
    height: 358px;
    margin-top: 50px;
  }

  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 28px;
    color: #000000;
    text-align: center;
    font-family: 'Edmondsans-regular', sans-serif;
  }
  .PhotoGallery{
    width: 750px;
    height: 1110px;
  }
`;
export default About;