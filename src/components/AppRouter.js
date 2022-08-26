import React from 'react';
import {Route, Routes, Outlet} from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import ProductList from "../pages/ProductList";
import Header from "./Header";
import Footer from "./Footer";
import About from "../pages/About";
import AccountPage from "../pages/AccountPage";
import ProductPage from "../pages/ProductPage";



function AppRouter() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={'/auth'} element={<LoginPage/>}/>
                <Route path={'/catalog'} element={<ProductList/>}/>
                <Route path={'/:id'} element={<ProductPage/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/account'} element={<AccountPage/>}/>
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <div className='AppRouter'>
            <Header/>
            <main className={'content'}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default AppRouter;
