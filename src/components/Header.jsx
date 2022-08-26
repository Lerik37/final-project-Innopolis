import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';



function Header() {
    return (
        <Nav>
            <NavLink to="/" className={'logo'}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 1.44338C17.047 0.550211 18.953 0.550212 20.5 1.44338L31.0885 7.55662C32.6355 8.44979 33.5885 10.1004 33.5885 11.8868V24.1132C33.5885 25.8996 32.6355 27.5502 31.0885 28.4434L20.5 34.5566C18.953 35.4498 17.047 35.4498 15.5 34.5566L4.91154 28.4434C3.36454 27.5502 2.41154 25.8996 2.41154 24.1132V11.8868C2.41154 10.1004 3.36454 8.44979 4.91154 7.55662L15.5 1.44338Z" fill="#156963"/>
                    <path d="M16.2995 22.072C15.9635 22.072 15.6955 21.976 15.4955 21.784C15.3035 21.584 15.2075 21.316 15.2075 20.98V14.56C15.2075 14.232 15.2955 13.98 15.4715 13.804C15.6475 13.628 15.8995 13.54 16.2275 13.54H19.2995C20.2355 13.54 20.9635 13.78 21.4835 14.26C22.0035 14.732 22.2635 15.392 22.2635 16.24C22.2635 17.08 21.9995 17.74 21.4715 18.22C20.9515 18.7 20.2275 18.94 19.2995 18.94H17.4155V20.98C17.4155 21.316 17.3155 21.584 17.1155 21.784C16.9155 21.976 16.6435 22.072 16.2995 22.072ZM18.9995 17.284C19.4075 17.284 19.7075 17.2 19.8995 17.032C20.0995 16.864 20.1995 16.604 20.1995 16.252C20.1995 15.556 19.7995 15.208 18.9995 15.208H17.4155V17.284H18.9995Z" fill="white"/>
                </svg>
            </NavLink>
            <NavUnlisted>
                <NavLink to="/about" className={'about'}>
                    <li>About us</li>
                </NavLink>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/catalog">
                    <li>Shop</li>
                </NavLink>
                <NavLink to='/cart'>
                    <li>
                        <FaShoppingCart>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_102)">
                                <path d="M7.50002 18.3333C7.96026 18.3333 8.33335 17.9602 8.33335 17.5C8.33335 17.0397 7.96026 16.6666 7.50002 16.6666C7.03978 16.6666 6.66669 17.0397 6.66669 17.5C6.66669 17.9602 7.03978 18.3333 7.50002 18.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.6666 18.3333C17.1269 18.3333 17.5 17.9602 17.5 17.5C17.5 17.0397 17.1269 16.6666 16.6666 16.6666C16.2064 16.6666 15.8333 17.0397 15.8333 17.5C15.8333 17.9602 16.2064 18.3333 16.6666 18.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M0.833313 0.833374H4.16665L6.39998 11.9917C6.47618 12.3754 6.6849 12.72 6.9896 12.9653C7.2943 13.2106 7.67556 13.3409 8.06665 13.3334H16.1666C16.5577 13.3409 16.939 13.2106 17.2437 12.9653C17.5484 12.72 17.7571 12.3754 17.8333 11.9917L19.1666 5.00004H4.99998" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_102">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        </FaShoppingCart>
                    </li>
                </NavLink>
                <NavLink to="/auth">
                    <li>
                        <button>Sign in</button>
                    </li>
                </NavLink>
            </NavUnlisted>
        </Nav>
    );
}

const Nav = styled.div`
  margin-top: 40px;
  border-bottom: 1px solid rgba(21, 105, 99, 0.3);
  .logo{
    position: absolute;
    top: 56px;
    left: 56px;
    z-index: 1000;
  }
`;
const NavUnlisted = styled.ul`
  display: flex;
  justify-content: flex-end;
  height:40px;
  a {
    text-decoration: none;
  }
    svg {
      padding: 8px;
    }
  li {
    list-style: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #156963;
    overflow: hidden;
    font-family: "Nunito Sans", sans-serif;
    margin-left: 45px;

    &:active {
      color: #68ac93;
    }
  }

  img {
    width: 36px;
    height: 36px;
  }

  button {
    outline: 0;
    border: none;
    width: 111px;
    height: 36px;
    background: #156963;
    color: white;
    justify-content: center;
  }

  button:hover {
    cursor: pointer;
    transition: color 500ms ease;
    background: rgba(21, 105, 99, 0.8);
  }  
`;
const FaShoppingCart = styled.div`
`;
// const ShoppingCartContainer = styled.div`
//     width: 450px;
//     z-index: 1000;
//     background: #fafafa;
//     box-shadow: 6px 7px 6px 0 rgba(158, 155, 155, 0.75);
//     -webkit-box-shadow: 6px 7px 6px 0 rgba(158, 155, 155, 0.75);
//     -moz-box-shadow: 6px 7px 6px 0 rgba(158, 155, 155, 0.75);
//     `;

export default Header;
