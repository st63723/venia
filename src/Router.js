import React from "react";
import App from "./App";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Home from './components/Home/Home';
import ProductDetail from './components/Products/ProductDetail';
import ShoppingBag from './components/ShoppingBag/ShoppingBag';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

 const Router = () => (
  <BrowserRouter>
    <App>
    <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/Home" element={ <Home/> } />
          <Route path="/products/:productId" element={ <ProductDetail/>} />
          <Route path="/ShoppingBag" element={ <ShoppingBag /> } />
      </Routes>
    </App>
  </BrowserRouter>
 );

 const Users = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/ShoppingBag')
  }

  return (
    <>
    <Header />
    <div className="dashboard">
      <h3>
        <span onClick={navigateToDashboard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16.828" viewBox="0 0 16 16.828">
            <g id="arrow-left" transform="translate(-4 -3.586)">
              <line id="Line_372" data-name="Line 372" x1="14" transform="translate(5 12)" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
              <path id="Path_37878" data-name="Path 37878" d="M12,19,5,12l7-7" fill="none" stroke="#172026" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </g>
          </svg>
          &nbsp;&nbsp;
        </span>
  
        Dummy Page!!
      </h3>
    </div>
    </>
  )
}


export default Router;
