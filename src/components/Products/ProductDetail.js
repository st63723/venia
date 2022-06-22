import React from "react"
import {useParams} from "react-router-dom"
import HeartIcon from '../../assets/svg/heart.svg';
import ShareIcon from '../../assets/svg/share.svg';
import SweatwickIcon from '../../assets/svg/layers.svg';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import './ProductDetails.scss';
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../reducers/products";

function ProductDetail() {
    const cartItems = useSelector(store => store.products.cart);
    const dispatch = useDispatch();
    const {productId} = useParams();
    const [products, setProducts] = useState([]);

    //fetching products
    const fetchProducts = async () => {
        const { data } = await Axios.get(
        "https://fakestoreapi.com/products"
        );
        const products = data;
        setProducts(products);
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    //fetch add cart item
    const thisProduct = products.filter(prod => prod.id == productId)
    useEffect(() => {
        if (cartItems.length >= 1) {
            document.title = `Cart (${cartItems.length})`
        }
    }, [cartItems.length])
    const addItemToCart = (product) => {
        dispatch(addToCart(product));
    }

    return (
        thisProduct.length ?
        <div>
           {thisProduct.map((product) => (
             <><div className='product-details aem-Grid aem-Grid--12' aria-label="Product Details">
                
                   {/* Product Thumbnails start*/} 
                   <div className="product-thumbnails aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--hide">
                       <img src={product.image} alt="Product Thumbnail" />
                       <img src={product.image} alt="Product Thumbnail" />
                   </div>
                   {/* Product Thumbnails end */}

                   {/* Product Big image */}
                   <div className="product-image aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <nav className="crumbs mobile-view">
                                <Link to="/" aria-label='Clothing url'>Clothing</Link> /
                                <Link to="/About" aria-label='Womens url'>Women's</Link> /
                                <Link to="/About" aria-label='Outerwear url'>Outerwear</Link>
                        </nav>
                       <img src={product.image} alt="Product Image" />
                   </div>

                   {/* Product all details start */}
                   <div className="details aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                       <nav className="crumbs desktop-view">
                           <Link to="/" aria-label='Clothing url'>Clothing</Link> /
                           <Link to="/" aria-label='Womens url'>Women's</Link> /
                           <Link to="/" aria-label='Outerwear url'>Outerwear</Link>
                       </nav>
                       <h2 className="product-name" role="Product Name">{product.title}</h2>
                       <h6 className="product-price" role="Product Price">${product.price}</h6>
                       <div className="product-rating" role="Product star Rating">{product.rating.rate}&nbsp; {product.rating.count}</div>
                       <div className="description" role="Product Description">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna. 
                           <span class="readmore">Read more</span>
                       </div>
                       <div className="product-colors" role="Product multiple colors">
                           <h6 className="p-details-heading">Color</h6>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                       </div>
                       <div className="size" role="Product Sizes">
                           <h6 className="p-details-heading" role="Product Size Title">Size</h6>
                           <button type="button">XS</button>
                           <button type="button">S</button>
                           <button type="button">M</button>
                           <button type="button">L</button>
                           <button type="button">XL</button>
                       </div>
                       <div className="quantity" role="Product Quantity">
                           <h6 className="p-details-heading">quantity</h6>
                          <div> 
                           <button type="button"> - </button>
                            <input type="number" />
                           <button type="button" > + </button>
                          </div>  
                       </div>

                        {/* Product Add to Cart and share buttons */}
                       <div className="addToCart" role="Product Add To Cart">
                           <button type="button" onClick={() => addItemToCart(product)}>ADD TO CART</button>
                       </div>
                       <div className="save-share" role="product save and share">
                           <div>
                               <img src={HeartIcon} className="heart-icon" alt="Heart icon" />
                               <span className="save-title">Save</span>
                           </div>
                           <div>
                               <img src={ShareIcon} className="share-icon" alt="Share icon" />
                               <span className="share-title">Share</span>
                           </div>
                       </div>

                   </div>
               </div>

                {/* Product summary */}
               <div className='bottom-row-details aem-Grid aem-Grid--12' aria-label="Product Details">
                       <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                           <h2 className="product-name" role="Product Name">{product.title}</h2>
                           <h6 className="product-description" role="Product Description Name">Description</h6>
                           <p role="Product Description">
                               {product.description}
                           </p>
                       </div>
                       <div className="details-row aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                           <div className="details">Details</div>
                           <div>
                               <span className="sweat-wicking">
                                <img src={SweatwickIcon} alt="Sweat Wicking" />
                                <span>Sweat-wicking</span> 
                               </span>
                               <span className="sweat-wicking">
                               <img src={SweatwickIcon} alt="Sweat Wicking" />
                               <span> Breathable</span> 
                               </span>
                           </div>
                           <div>
                               <span className="sweat-wicking">
                                    <img src={SweatwickIcon} alt="Sweat Wicking" />
                                    <span>Lightweight-fabric</span> 
                               </span>
                               <span className="sweat-wicking">
                                    <img src={SweatwickIcon} alt="Sweat Wicking" />
                                    <span> 69% nylon, 31% lycra</span> 
                               </span>
                           </div>
                       </div>
                   </div></>
           ))} 
        </div> 
        : <div style={{ textAlign: 'center' }}>
            <img src={require('../../assets/images/loader.gif')} alt="Loading..." />
        </div>
    )
}
let id = 0;
const createRandomItem = () => {
  id = id + 1;
  return {
    id,
    qty: 1,
    desc: `Item number: ${id}`,
    price: Number((Math.random() * 10 + 1).toFixed(2))
  };
};
export default ProductDetail
