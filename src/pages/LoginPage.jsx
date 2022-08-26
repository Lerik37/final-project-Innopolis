import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    let navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [formValid, setFormValid] = useState(false)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const redirect = () => {
        if (password.length < 3 ||password.length > 8) {
            setPasswordError('Password can be no longer than 8 characters, no shorter than 5 characters')
            if (!password) {
                setPasswordError('You have not entered the password')
            }
        }else {
            setPasswordError('')
        }
        if (!re.test(String(email).toLowerCase())) {
            setEmailError('Incorrect email')
            if(email === ''){
                setEmailError('You have not entered email')
            }
        } else {
            setEmailError('')
            if (email === 'developer123@gmail.com' && password === '12345678') {
                navigate('/account')
            }
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    return (
        <ContainerForm>
            <ContainerFormInner>
                <div className={"FormTitle"}>Login</div>
                <div className={"FormBlockFlex"}>
                    <label>Email</label>
                    {(emailDirty && emailError) && <div style={{color: '#8f4e46'}}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name={"email"}
                           type={"text"} placeholder={"Enter email"}/>
                </div>
                <div className={"FormBlockFlex"}>
                    <label>Password</label>
                    {(passwordDirty && passwordError) && <div style={{color: '#8f4e46'}}>{passwordError}</div>}
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)}
                           name={"password"} type={'password'} placeholder={"Enter password"}/>
                </div>
                <div className={"FormBlock"}>
                    <input type={"checkbox"} checked={true} className={"CheckboxMark"}/>
                    <label>I agree with the privacy policy</label>
                </div>
                    <button onClick={redirect} className="FormButton" type="submit" >Sign in</button>
                </ContainerFormInner>
            <ContainerValues>
                <ContainerValue>
                    <h1>Outside In</h1>
                    <p>We’re here to help re-connect people with the natural world, and to inspire them to build and
                        maintain more beautiful spaces.</p>
                </ContainerValue>
                <ContainerValue>
                    <h1>Quality Plants & Curated Goods</h1>
                    <p>We offer a carefully curated selection of indoor and outdoor plants, hand crafted home goods that
                        put quality ahead of quantity, and living art made right here in the shop: terrariums,
                        landscapes, arrangements, vessels, and holders.</p>
                </ContainerValue>
                <ContainerValue>
                    <h1>Plants for the People</h1>
                    <p>We want our visitors to be inspired to get their hands dirty. We have a passionate and
                        knowledgeable team at your disposal with helpful tips and tricks, and all the supplies you need
                        to get creative at home.</p>
                </ContainerValue>
            </ContainerValues>
        </ContainerForm>
    );
}

const ContainerForm = styled.div`
  width: 1168px;
  height: 600px;
  margin: 80px auto;
  font-family: 'Montserrat', sans-serif;

  a {
    cursor: pointer;
    color: #fdfdfd;
  }
`;

const ContainerFormInner = styled.div`
  width: 400px;
  height: 350px;
  margin: 0 auto;
  border-radius: 20px;
  background: rgba(173, 243, 223, 0.3);
  padding: 40px;

  .FormTitle {
    font-size: 38px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 10px 0;
    color: #2f2f2f;
  }

  .FormTitle::after {
    content: "";
    display: block;
    margin: 0.5em auto 0;
    border-top: 3px solid #edafa4;
    box-sizing: border-box;
    width: 60px;
  }

  .FormBlockFlex label {
    display: block;
    padding: 20px 0 5px 0;
  }

  input {
    padding: 7px 7px 7px 7px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #6bc09f;
    box-shadow: 3px 2px 10px rgb(161, 156, 153, 0.8);
    outline: #124134;
    margin: 0 auto;
  }

  .CheckboxMark {
    border: 2px solid #787878;
    margin: 10px;
    width: auto;
  }

  label {
    color: #312f2f;
    font-size: 14px;
  }

  a {
    color: #312f2f;
  }

  .FormButton {
    width: 50%;
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
    margin: 30px auto;
  }

  button:hover {
    cursor: pointer;
    transition: color 500ms ease;
    background: rgba(21, 105, 99, 0.8);
  }
`;
const ContainerValues = styled.div`
  width: 1168px;
  height: 200px;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;
const ContainerValue = styled.div`
  h1 {
    font-size: 24px;
    text-align: center;
    color: #2f2f2f;
  }

  p {
    width: 350px;
    font-size: 14px;
    text-align: center;
    color: rgb(161, 156, 153);
  }
`
export default LoginPage;
