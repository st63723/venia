import React from 'react'
import axios from "axios";
import './Header.scss'
import { Link } from "react-router-dom";
import MenuIcon from '../../assets/svg/menu.svg'
import SearchIcon from '../../assets/svg/search.svg'
import CartIcon from '../../assets/svg/cart.svg'
import UserIcon from '../../assets/svg/user.svg'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../reducers/products";
import { useNavigate } from "react-router-dom";

function Header() {
    const [hideLightbox, setHideLightbox] = useState(false);
    let url = "";
    const [selectedItems, setSelectedItems] = useState(0);
    const cartItems = useSelector(state => state.products.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //navigate to cart items page
    const getCartValue = () => {
        navigate('/ShoppingBag')
    } 

    //fetching all products
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            const data = res.data;
            dispatch(setProducts(data));
        })
    }, [dispatch]);

    useEffect(() => {
        if (cartItems.length >= 1) {
            setSelectedItems(cartItems.length);
        }
    }, [cartItems])
    
    return (
        <>
        <header>
            <div className="inner-wrapper aem-Grid">
              <div className='mobile-view'>  {/* show only in mobile */}
               <div className='aem-Grid aem-Grid--12'>
                
                {/* menu start for mobile */}
                <div className="menuicon aem-GridColumn aem-GridColumn--default--3">
                    <div className='menuicon'>
                        <img src={MenuIcon} alt='menu icon' onClick={() => setHideLightbox(true)} tabIndex={0} />
                    </div>
                    <nav className={`menu-mobile ${hideLightbox ? "show-lightbox" : "hide-lightbox"}`}>
                        <span className='menu-title'>
                            Shop Categories <span className='cross' onClick={() => setHideLightbox(false)}> X </span>
                        </span>
                        <span className='categories' role="Menu Navigation Links">
                            <Link to="/" aria-label='Link to Women'>Women</Link>
                            <Link to="/Home" aria-label='Link to Men'>Men</Link>
                            <Link to="/Home" aria-label='Link to Smart Gear'>Smart Gear</Link>
                            <Link to="/Home" aria-label='Link to Accessories'>Accessories</Link>  
                        </span>     
                    </nav>   
                </div>
                {/* menu end for mobile */}

                {/* logo */}
                    <div className="aem-GridColumn aem-GridColumn--default--6">
                        <span className="logo" aria-label='Venia Logo' tabIndex={0}>
                        <img src={require('../../assets/images/venia-logo.png')} alt='Venia Logo' />
                        </span>
                    </div>

                    {/* Cart icon and Search icon */}
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <div className="right-nav" role="navigation">
                            <a href={url} aria-label='Search Link' className="search">
                                <img src={SearchIcon} alt='Search icon' />
                            </a>
                           
                            <button type='button' onClick={getCartValue} className="cart">
                                <img src={CartIcon} alt='Shopping Cart icon' />
                                <span> ({selectedItems})</span>
                            </button>
                        </div>
                    </div>
                </div>
              </div>  

              <div className='desktop-view aem-GridColumn'>  {/* show only in desktop */}
                <div className='aem-Grid aem-Grid--12 '>
                {/* logo */}
                <div className="aem-GridColumn aem-GridColumn--default--2">
                            <span className="logo" aria-label='Company Logo' tabIndex={0}>
                            <img src={require('../../assets/images/venia-logo.png')} alt='Venia Logo' />
                            </span>
                        </div>

                    {/* menu start */}
                    <div className="aem-GridColumn aem-GridColumn--default--7">
                        <nav className="menu-desktop">
                                <Link to="/">Women</Link>
                                <Link to="/Home">Men</Link>
                                <Link to="/Home">Smart Gear</Link>
                                <Link to="/Home">Accessories</Link>  
                        </nav>   
                    </div>
                    {/* menu end */}

                        <div className="aem-GridColumn aem-GridColumn--default--3">
                            <div className="right-nav" role="navigation">
                                <a href={url} aria-label='Search Link'>
                                    <img src={SearchIcon} alt='Search icon' />
                                    <span>Search</span>
                                </a>
                                <a href={url} aria-label='Sign in Link'>
                                    <img src={UserIcon} alt='User Sign in' />
                                    <span>Sign in</span>
                                </a>
                                <button type='button' className="cart"  onClick={getCartValue}>
                                    <img src={CartIcon} alt='Shopping Cart icon' />
                                <span> ({selectedItems})</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 

                </div>
            </header>            
        </>
    )
}

export default Header
