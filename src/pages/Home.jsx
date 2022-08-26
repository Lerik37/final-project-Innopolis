import React from 'react';
import styled from 'styled-components';
import homePage from '../assets/homepage_header.png';
import PlantsImage1 from '../assets/plants_img1.png';
import PlantsImage2 from '../assets/plants_img2.png';
import PlantsImage3 from '../assets/plants_img3.png';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

function Home() {
    const product = useSelector(state => state.cards)
    return (
        <Container>
            <ContainerWrapper>
                <ContainerHeader>
                    <img className={'homePage'} src={homePage} alt={'home_page picture'}/>
                    <ContainerText>
                        <h1>Kembang Flower Mantap</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s. </p>
                    </ContainerText>
                    <ContainerSlider>
                        <ContainerPrevious>
                            <svg className={'previousIcon'} width="22" height="20" viewBox="0 0 22 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.3331 8.66665H4.51982L9.35982 2.85331C9.58614 2.58103 9.69502 2.22998 9.66251 1.87742C9.63001 1.52485 9.45877 1.19963 9.18649 0.973314C8.9142 0.746996 8.56315 0.638114 8.21059 0.67062C7.85802 0.703126 7.5328 0.874359 7.30648 1.14665L0.639819 9.14665C0.594967 9.21028 0.554858 9.27713 0.519819 9.34665C0.519819 9.41331 0.51982 9.45331 0.426486 9.51998C0.366051 9.67286 0.334408 9.83559 0.333153 9.99998C0.334408 10.1644 0.366051 10.3271 0.426486 10.48C0.426486 10.5466 0.426486 10.5866 0.519819 10.6533C0.554858 10.7228 0.594967 10.7897 0.639819 10.8533L7.30648 18.8533C7.43185 19.0038 7.58883 19.1249 7.76628 19.2078C7.94373 19.2908 8.13727 19.3336 8.33315 19.3333C8.64469 19.3339 8.9466 19.2254 9.18649 19.0266C9.3215 18.9147 9.4331 18.7772 9.5149 18.6221C9.5967 18.467 9.6471 18.2972 9.6632 18.1226C9.6793 17.948 9.66079 17.7719 9.60873 17.6044C9.55667 17.4369 9.47209 17.2814 9.35982 17.1466L4.51982 11.3333H20.3331C20.6868 11.3333 21.0259 11.1928 21.276 10.9428C21.526 10.6927 21.6665 10.3536 21.6665 9.99998C21.6665 9.64636 21.526 9.30722 21.276 9.05717C21.0259 8.80712 20.6868 8.66665 20.3331 8.66665Z"
                                    fill="#b7b3b3"/>
                            </svg>
                            <span className={'previousText'}>Previous</span>
                            <h2>Kaktus Plant</h2>
                        </ContainerPrevious>
                        <ContainerNext>
                            <span className={'nextText'}>Next</span>
                            <svg className={'nextIcon'} width="22" height="20" viewBox="0 0 22 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.6666 11.3334H17.4799L12.6399 17.1467C12.4136 17.419 12.3047 17.77 12.3372 18.1226C12.3697 18.4752 12.541 18.8004 12.8133 19.0267C13.0856 19.253 13.4366 19.3619 13.7892 19.3294C14.1417 19.2969 14.4669 19.1256 14.6933 18.8534L21.3599 10.8534C21.4048 10.7897 21.4449 10.7229 21.4799 10.6534C21.4799 10.5867 21.4799 10.5467 21.5733 10.48C21.6337 10.3271 21.6653 10.1644 21.6666 10C21.6653 9.83563 21.6337 9.6729 21.5733 9.52002C21.5733 9.45335 21.5733 9.41335 21.4799 9.34669C21.4449 9.27717 21.4048 9.21032 21.3599 9.14669L14.6933 1.14669C14.5679 0.996177 14.4109 0.875137 14.2335 0.792175C14.056 0.709214 13.8625 0.666369 13.6666 0.666687C13.3551 0.666078 13.0531 0.774578 12.8133 0.973353C12.6783 1.08529 12.5666 1.22275 12.4848 1.37788C12.403 1.53301 12.3526 1.70275 12.3365 1.87739C12.3204 2.05203 12.339 2.22812 12.391 2.39559C12.4431 2.56307 12.5277 2.71862 12.6399 2.85335L17.4799 8.66669H1.6666C1.31298 8.66669 0.973837 8.80716 0.723789 9.05721C0.47374 9.30726 0.333265 9.6464 0.333265 10C0.333265 10.3536 0.47374 10.6928 0.723789 10.9428C0.973837 11.1929 1.31298 11.3334 1.6666 11.3334Z"
                                    fill="#F2F2F2"/>
                            </svg>
                            <h2>Rahasia Plant</h2>
                        </ContainerNext>
                    </ContainerSlider>
                </ContainerHeader>
                <ContainerFeatures>
                    <ContainerItem>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_20)">
                                <path
                                    d="M13.0001 38H9.00006C8.44806 38 8.00006 37.552 8.00006 37C8.00006 36.448 8.44806 36 9.00006 36H13.0001C13.5521 36 14.0001 36.448 14.0001 37C14.0001 37.552 13.5521 38 13.0001 38Z"
                                    fill="#156963"/>
                                <path
                                    d="M45.5 38H43C42.448 38 42 37.552 42 37C42 36.448 42.448 36 43 36H44.67L46.018 28.816C46 25.14 42.86 22 39 22H32.434L29.252 36H35C35.552 36 36 36.448 36 37C36 37.552 35.552 38 35 38H28C27.696 38 27.408 37.862 27.218 37.624C27.028 37.388 26.956 37.076 27.024 36.78L30.66 20.78C30.764 20.322 31.168 20 31.636 20H39C43.962 20 48 24.038 48 29L46.482 37.184C46.394 37.658 45.982 38 45.5 38Z"
                                    fill="#156963"/>
                                <path
                                    d="M38.9999 42C36.2439 42 33.9999 39.758 33.9999 37C33.9999 34.242 36.2439 32 38.9999 32C41.7559 32 43.9999 34.242 43.9999 37C43.9999 39.758 41.7559 42 38.9999 42ZM38.9999 34C37.3459 34 35.9999 35.346 35.9999 37C35.9999 38.654 37.3459 40 38.9999 40C40.6539 40 41.9999 38.654 41.9999 37C41.9999 35.346 40.6539 34 38.9999 34Z"
                                    fill="#156963"/>
                                <path
                                    d="M17 42C14.244 42 12 39.758 12 37C12 34.242 14.244 32 17 32C19.756 32 22 34.242 22 37C22 39.758 19.756 42 17 42ZM17 34C15.346 34 14 35.346 14 37C14 38.654 15.346 40 17 40C18.654 40 20 38.654 20 37C20 35.346 18.654 34 17 34Z"
                                    fill="#156963"/>
                                <path
                                    d="M12.9999 20H4.99994C4.44794 20 3.99994 19.552 3.99994 19C3.99994 18.448 4.44794 18 4.99994 18H12.9999C13.5519 18 13.9999 18.448 13.9999 19C13.9999 19.552 13.5519 20 12.9999 20Z"
                                    fill="#156963"/>
                                <path
                                    d="M13.0001 26H3.00006C2.44806 26 2.00006 25.552 2.00006 25C2.00006 24.448 2.44806 24 3.00006 24H13.0001C13.5521 24 14.0001 24.448 14.0001 25C14.0001 25.552 13.5521 26 13.0001 26Z"
                                    fill="#156963"/>
                                <path
                                    d="M13 32H1C0.448 32 0 31.552 0 31C0 30.448 0.448 30 1 30H13C13.552 30 14 30.448 14 31C14 31.552 13.552 32 13 32Z"
                                    fill="#156963"/>
                                <path
                                    d="M28.0001 38H21.0001C20.4481 38 20.0001 37.552 20.0001 37C20.0001 36.448 20.4481 36 21.0001 36H27.2021L31.7461 16H9.00006C8.44806 16 8.00006 15.552 8.00006 15C8.00006 14.448 8.44806 14 9.00006 14H33.0001C33.3041 14 33.5921 14.138 33.7821 14.376C33.9721 14.612 34.0441 14.924 33.9761 15.22L28.9761 37.22C28.8721 37.678 28.4661 38 28.0001 38Z"
                                    fill="#156963"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_20">
                                    <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Fast Delivery</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard </p>
                    </ContainerItem>
                    <ContainerItem>
                        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22 0C10.3689 0 0.90625 9.46266 0.90625 21.0938C0.90625 22.3827 0.90625 32.3539 0.90625 32.5312C0.90625 34.8575 2.79878 36.75 5.125 36.75H6.77313C7.35363 38.3867 8.91672 39.5625 10.75 39.5625C13.0762 39.5625 14.9688 37.67 14.9688 35.3438V23.9062C14.9688 21.58 13.0762 19.6875 10.75 19.6875C8.91672 19.6875 7.35363 20.8633 6.77313 22.5H5.125C4.63197 22.5 4.15891 22.5858 3.71875 22.7419V21.0938C3.71875 11.0135 11.9197 2.8125 22 2.8125C32.0803 2.8125 40.2812 11.0135 40.2812 21.0938V22.7419C39.8411 22.5858 39.368 22.5 38.875 22.5H37.2269C36.6464 20.8633 35.0833 19.6875 33.25 19.6875C30.9238 19.6875 29.0312 21.58 29.0312 23.9062V35.3438C29.0312 37.67 30.9238 39.5625 33.25 39.5625C33.6757 39.5625 34.0867 39.4986 34.4745 39.3807C33.9484 41.1115 32.338 42.375 30.4375 42.375H25.9769C25.3964 40.7383 23.8333 39.5625 22 39.5625C19.6738 39.5625 17.7812 41.455 17.7812 43.7812C17.7812 46.1075 19.6738 48 22 48C23.8333 48 25.3964 46.8242 25.9769 45.1875H30.4375C34.3145 45.1875 37.4688 42.0333 37.4688 38.1562V36.75H38.875C41.2012 36.75 43.0938 34.8575 43.0938 32.5312C43.0938 32.3565 43.0938 22.3817 43.0938 21.0938C43.0938 9.46266 33.6311 0 22 0ZM9.34375 23.9062C9.34375 23.1308 9.97459 22.5 10.75 22.5C11.5254 22.5 12.1562 23.1308 12.1562 23.9062V35.3438C12.1562 36.1192 11.5254 36.75 10.75 36.75C9.97459 36.75 9.34375 36.1192 9.34375 35.3438V23.9062ZM5.125 25.3125H6.53125V33.9375H5.125C4.34959 33.9375 3.71875 33.3067 3.71875 32.5312V26.7188C3.71875 25.9433 4.34959 25.3125 5.125 25.3125ZM22 45.1875C21.2246 45.1875 20.5938 44.5567 20.5938 43.7812C20.5938 43.0058 21.2246 42.375 22 42.375C22.7754 42.375 23.4062 43.0058 23.4062 43.7812C23.4062 44.5567 22.7754 45.1875 22 45.1875ZM34.6562 35.3438C34.6562 36.1192 34.0254 36.75 33.25 36.75C32.4746 36.75 31.8438 36.1192 31.8438 35.3438V23.9062C31.8438 23.1308 32.4746 22.5 33.25 22.5C34.0254 22.5 34.6562 23.1308 34.6562 23.9062V35.3438ZM40.2812 32.5312C40.2812 33.3067 39.6504 33.9375 38.875 33.9375H37.4688V25.3125H38.875C39.6504 25.3125 40.2812 25.9433 40.2812 26.7188V32.5312Z"
                                fill="#156963"/>
                        </svg>
                        <span>Great Customer Service</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard </p>
                    </ContainerItem>
                    <ContainerItem>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_45)">
                                <path
                                    d="M19.2976 6.88197C15.1042 2.69072 6.89824 2.20471 1.0898 2.20471C0.488251 2.20471 0 2.69286 0 3.29441C0 9.10285 0.483858 17.3088 4.67726 21.5023C6.44708 23.2721 9.16061 24.0633 11.8501 24.0633C14.7729 24.0633 17.6695 23.1283 19.2976 21.5002C22.4209 18.3769 22.9942 10.5763 19.2976 6.88197ZM17.7567 19.9614C15.4246 22.2912 8.94922 22.6901 6.22047 19.9614C2.83562 16.5766 2.24928 9.70011 2.18604 4.39076C7.4954 4.454 14.3719 5.04022 17.7566 8.42508C20.4855 11.1538 20.0866 17.6315 17.7567 19.9614Z"
                                    fill="#156963"/>
                                <path
                                    d="M46.9104 6.51575C41.102 6.51575 32.896 6.9996 28.7025 11.193C25.0061 14.8873 25.5792 22.6879 28.7025 25.8112C30.3306 27.4372 33.2251 28.3722 36.1479 28.3722C38.8374 28.3722 41.5488 27.5832 43.3229 25.8135C47.5141 21.6201 48.0001 13.4141 48.0001 7.60555C48.0002 7.004 47.512 6.51575 46.9104 6.51575ZM41.7776 24.2702C39.0489 26.999 32.5712 26.6001 30.2414 24.2702C27.9115 21.9403 27.5126 15.4627 30.2414 12.734C33.6262 9.34911 40.5026 8.76289 45.812 8.69965C45.7488 14.0111 45.1625 20.8876 41.7776 24.2702Z"
                                    fill="#156963"/>
                                <path
                                    d="M39.0397 15.9489C38.7825 15.4018 38.0458 15.2144 37.5031 15.4671C29.1446 19.3969 25.0383 26.2493 23.1726 33.2936C20.8644 18.3157 14.1885 13.7496 11.3573 11.8121C11.0042 11.5701 10.7296 11.3936 10.5771 11.2432C10.152 10.8182 9.46109 10.8182 9.03608 11.2432C8.61107 11.6682 8.61107 12.3592 9.03608 12.7842C9.25186 12.9978 9.62456 13.2659 10.128 13.6102C13.3189 15.7919 21.7951 21.5917 21.7951 44.7057C21.7951 45.3073 22.2833 45.7955 22.8849 45.7955C23.4864 45.7955 23.9747 45.3073 23.9747 44.708C23.9747 35.3687 26.4834 23.0564 38.4316 17.4419C38.4316 17.4398 38.6081 17.3569 38.6081 17.3569C39.1508 17.0997 39.2968 16.4937 39.0397 15.9489Z"
                                    fill="#156963"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_45">
                                    <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Original Plants</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard </p>
                    </ContainerItem>
                    <ContainerItem>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_0_61)">
                                <path
                                    d="M24 47.9999C37.2341 47.9999 48 37.234 48 23.9999C48.0058 20.8256 47.3782 17.6821 46.1531 14.7536C46.0244 14.4379 45.7357 14.2149 45.3978 14.171C45.0593 14.1265 44.723 14.2668 44.5169 14.5386C44.3114 14.8108 44.2669 15.1726 44.4015 15.4861C45.5297 18.1826 46.1075 21.0772 46.1017 23.9999C46.1017 36.1869 36.187 46.1016 24 46.1016C11.813 46.1016 1.8983 36.1869 1.8983 23.9999C1.8983 11.8129 11.813 1.8982 24 1.8982C26.4767 1.89502 28.9364 2.30922 31.2754 3.12384C31.5959 3.23771 31.9534 3.17098 32.2113 2.94905C32.4693 2.72765 32.589 2.38443 32.5249 2.05021C32.4608 1.716 32.2225 1.44163 31.9004 1.33146C29.3602 0.446928 26.6896 -0.00328333 24 -0.000105363C10.7659 -0.000105363 0 10.7658 0 23.9999C0 37.234 10.7659 47.9999 24 47.9999Z"
                                    fill="#156963"/>
                                <path
                                    d="M33.4094 6.17269C33.0387 5.80193 32.4375 5.80193 32.0667 6.17269C31.6965 6.54345 31.6965 7.14462 32.0667 7.51538L36.4836 11.9322C36.8485 12.2972 37.4375 12.3035 37.8104 11.9471L45.5969 4.51009C45.8459 4.27651 45.9502 3.92746 45.8708 3.59589C45.7908 3.26432 45.5392 3.00055 45.2113 2.90574C44.884 2.81093 44.5307 2.89939 44.286 3.1372L37.17 9.93381L33.4094 6.17269Z"
                                    fill="#156963"/>
                                <path
                                    d="M24 14.8194C26.2405 14.822 28.0562 16.6377 28.0588 18.8782C28.0588 19.4025 28.4836 19.8273 29.008 19.8273C29.5323 19.8273 29.9571 19.4025 29.9571 18.8782C29.9534 15.956 27.8332 13.4666 24.9492 12.9974V11.1186C24.9492 10.5943 24.5244 10.1695 24 10.1695C23.4756 10.1695 23.0509 10.5943 23.0509 11.1186V12.9974C19.9862 13.4936 17.8162 16.2595 18.0646 19.3543C18.3125 22.4486 20.8957 24.8337 24 24.8347C26.232 24.8347 28.0456 26.6372 28.0583 28.8697C28.0715 31.1017 26.2791 32.9253 24.0472 32.9513C24.0313 32.9502 24.0159 32.9486 24 32.9486C23.9841 32.9486 23.9688 32.9502 23.9529 32.9513C21.7309 32.9232 19.9439 31.1155 19.9412 28.8935C19.9412 28.3692 19.5164 27.9444 18.9921 27.9444C18.4677 27.9444 18.0429 28.3692 18.0429 28.8935C18.0466 31.8157 20.1663 34.3051 23.0509 34.7744V36.8814C23.0509 37.4057 23.4756 37.8305 24 37.8305C24.5244 37.8305 24.9492 37.4057 24.9492 36.8814V34.7744C28.0143 34.2797 30.1854 31.5127 29.937 28.4179C29.6891 25.3231 27.1049 22.9375 24 22.9375C22.5445 22.9454 21.1955 22.1737 20.4656 20.9147C19.7352 19.6552 19.7352 18.1017 20.4656 16.8422C21.1955 15.5832 22.5445 14.8114 24 14.8199V14.8194Z"
                                    fill="#156963"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_0_61">
                                    <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Affordable Price</span>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard </p>
                    </ContainerItem>
                </ContainerFeatures>
                <ContainerPlants>
                    <ContainerPlantsHeader>
                        <p>Featured Plants</p>
                        <ContainerFilterBox>
                            <select>
                                <option defaultValue={"cheaper first"} >Cheaper first</option>
                                <option value="expensive first">Expensive first</option>
                            </select>
                        </ContainerFilterBox>
                    </ContainerPlantsHeader>
                    <ContainerPlantsItems>
                        {product.map(item =>
                            <ContainerPlantsItem>
                                <img className={'card'} src={item.img} />
                                <h1 className={"plantTitle"} >
                                    {item.title}</h1>
                                <div className={"plantPrice"}>{item.price}</div>
                            </ContainerPlantsItem>
                        )}
                    </ContainerPlantsItems>
                </ContainerPlants>
                <ContainerInfo>
                    <h1>Buy more plants, it helps you to be relaxed </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam.
                        Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim.
                        Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.</p>
                    <img src={PlantsImage1} className={"PlantsImage1"}/>
                    <img src={PlantsImage2} className={"PlantsImage2"}/>
                </ContainerInfo>
                <ContainerVisitShop>
                    <h1>Get your favourites plant on our shop now</h1>
                    <NavLink to="/catalog"><button>Visit Shop</button> </NavLink>
                    <img src={PlantsImage3} className={"PlantsImage3"}/>
                </ContainerVisitShop>
            </ContainerWrapper>
        </Container>
    );
};

const Container = styled.div`
  overflow: hidden;
  max-width: 1280px;
  font-family: 'Montserrat', sans-serif;
`;
const ContainerWrapper = styled.div`
  width: 1168px;
  height: 1797px;
  margin: 0 auto;
`;
const ContainerHeader = styled.div`
  width: 1280px;

  .homePage {
    width: 608px;
    height: 740px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;
const ContainerText = styled.div`
  position: absolute;
  top: 186px;
  right: 72px;

  h1 {
    width: 523px;
    height: 166px;
    font-weight: 500;
    font-size: 68px;
    line-height: 83px;
    color: #156963;
  }

  p {
    width: 493px;
    height: 96px;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #2C1500;
    opacity: 0.8;
  }
`;
const ContainerSlider = styled.div`
  width: 586px;
  height: 160px;
  position: absolute;
  top: 586px;
  right: 0;
  display: flex;

  h2 {
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    position: absolute;
    top: 83px;
    margin: 0;
  }

  span {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    position: absolute;
    top: 40px;
  }

  svg {
    margin-top: 45px;
  }

  svg:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: color 500ms ease;
  }
`;
const ContainerPrevious = styled.div`
  width: 320px;
  height: 160px;
  background: #fff;
  color: #156963;

  .previousText {
    color: #b7b3b3;
  }

  .previousIcon {
    margin-right: 14px;
    color: #817d7d;
  }
`
const ContainerNext = styled.div`
  width: 320px;
  height: 160px;
  background: #156963;
  color: #fff;
  padding-left: 49px;

  .nextText {
    color: #F2F2F2;
  }

  .nextIcon {
    margin-left: 70px;
  }
`
const ContainerFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-top: 800px;
`
const ContainerItem = styled.div`
  width: 268px;
  height: 155px;
  border: 1px solid #E0E0E0;
  position: relative;

  svg {
    position: absolute;
    top: 22px;
    left: 16px;
  }

  span {
    width: 137px;
    height: 48px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #156963;
    position: absolute;
    top: 22px;
    left: 80px;
  }

  p {
    width: 236px;
    height: 48px;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #2C1500;
    position: absolute;
    top: 86px;
    left: 16px;
  }
`
const ContainerPlants = styled.div`
  margin-top: 84px;
`;
const ContainerPlantsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 47px;
  border-bottom: 1px solid #E0E0E0;
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin: 0;
  }
`
const ContainerFilterBox = styled.select`
  select {
    width: 130px;
    height: 31px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
  }
`
const ContainerPlantsItems = styled.div`
  height: 281px;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`
const ContainerPlantsItem = styled.div`
  width: 180px;
  height: 260px;
  text-align: center;
  color: #000000;
  .card {
    width: 180px;
    height: 180px;
    background: #F3F4F6;
  }

  .plantTitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 8px;
  }

  .plantPrice {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }
`;
const ContainerInfo = styled.div`
  height: 610px;
  margin-top: 80px;
  position: relative;
  box-sizing: border-box;

  h1 {
    width: 522px;
    height: 112px;
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    color: #2C1500;
    margin: 0;
  }

  p {
    width: 506px;
    height: 140px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: rgba(44, 21, 0, 0.8);
    margin: 16px 0 0 0;

  }

  .PlantsImage1 {
    width: 568px;
    height: 250px;
    margin-top: 74px;
  }

  .PlantsImage2 {
    width: 513px;
    height: 610px;
    float: right;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
const ContainerVisitShop = styled.div`
  height: 360px;
  margin-top: 80px;
  background: #F3F4F6;
  position: relative;

  h1 {
    width: 585px;
    height: 112px;
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    color: #2C1500;
    margin: 88px 0 0 97px;
    position: absolute;
  }

  button {
    width: 152px;
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
    margin-top: 232px;
    margin-left: 97px;
    position: absolute;
  }

  button:hover {
    cursor: pointer;
    transition: color 500ms ease;
    background: rgba(21, 105, 99, 0.8);
  }

  .PlantsImage3 {
    width: 480px;
    height: 360px;
    float: right;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default Home;
