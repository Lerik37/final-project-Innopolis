import React from 'react';
import styled from "styled-components";

function Footer(){
    return (
        <Container>
            <ContainerFooter>
                <AddressColumn>
                    <h1>PLANTKU</h1>
                    <h5>Plantku House</h5>
                    <p>Jl. Laksda Adisucipto No.51, Demangan, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta
                        55282</p>
                </AddressColumn>
                <CompanyColumn>
                    <h5>Perusahaan</h5>
                    <ul>
                        <li>Tentang Kami</li>
                        <li>Hubungi Kami</li>
                    </ul>
                </CompanyColumn>
                <ProductColumn>
                    <h5>Produk</h5>
                    <ul>
                        <li>Tanaman</li>
                        <li>Tanaman Lain</li>
                    </ul>
                </ProductColumn>
                <EmailColumn>
                    <h5>Berlangganan Email Kami</h5>
                    <form>
                        <input type={"text"} id={"submitButton"} placeholder="Masukan Alamat Email"/>
                    </form>
                    <button>Submit</button>
                </EmailColumn>
            </ContainerFooter>
        </Container>
    );
};

const Container = styled.div`
  width: 1280px;
  height: 268px;
  border-top: 1px solid rgba(21, 105, 99, 0.3);
`;
const ContainerFooter = styled.div`
  width: 946px;
  height: 137px;
  margin-top: 60px;
  margin-left: 167px;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  font-family: 'Work Sans', sans-serif;
  text-align: left;

  h5 {
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    color: #000000;
    margin: 0 0 20px 0;
  }

  ul {
    padding: 0;
    margin-top: 20px;
  }

  li {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    list-style: none;
    margin-top: 14px;
  }
`;
const AddressColumn = styled.div`
  h1 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #156963;
    margin: 0;
  }

  h5 {
    line-height: 19px;
    color: #333333;
    margin-top: 24px;
    margin-bottom: 0;
  }

  p {
    width: 282px;
    height: 60px;
    color: #4F4F4F;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    margin-top: 10px;
  }
`;
const CompanyColumn = styled.div`
`;
const ProductColumn = styled.div`
`;
const EmailColumn = styled.div`
  h5 {
    margin-bottom: 0;
  }

  input {
    width: 234px;
    height: 32px;
    border: 1px solid #F2F2F2;
    border-radius: 2px;
    box-sizing: border-box;
    background: #fff;
    margin-top: 14px;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.5);
    padding-left: 13px;
  }

  button {
    width: 51px;
    height: 22px;
    padding: 4px 12px;
    background: #156963;
    color: #FFFFFF;
    border: none;
    border-radius: 2px;
    font-family: 'Raleway', sans-serif;
    font-size: 8px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 14px;
  }

  button:hover {
    cursor: pointer;
    transition: color 500ms ease;
    background: rgba(21, 105, 99, 0.8);
  }
`;

export default Footer;