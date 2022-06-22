import React from "react";
import './ShoppingBag.scss';
import SaveForIcon from '../../assets/svg/heart.svg';
import EditIcon from '../../assets/svg/edit.svg';
import RemoveIcon from '../../assets/svg/trash.svg';
import { useSelector } from "react-redux";

function ShoppingBag() {
  const cartItems = useSelector(state => state.products.cart);
  return (
    cartItems.length ?
    <div>
            <h1 className="sh-bag-heading">Your Shopping Bag</h1>
            <div className='shopping-bag aem-Grid aem-Grid--12' aria-label="Add Cart Details">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">

                {/* Added Cart items list start*/} 
                <section>     
                    {cartItems.map((product) => ( 
                    <> 
                    <div className="shopping-thumbnails aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12" role="Added Cart items">
                            <img src={product.image} alt="Product Image" />
                            <div className="bag-product-details" role="Added Cart item Details">
                                <span className="bag-p-name">{product.title}</span>
                                <span className="bag-p-size">Size: Medium</span>
                                <span className="bag-p-color">Color: Storm</span>
                                <span className="bag-p-price">${product.price}</span>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                <div className="quantity" role="Product Quantity">
                                    <button type="button"> - </button>
                                    <input type="text" />
                                    <button type="button"> + </button>
                                </div>
                                <div className="product-modify" role="Product Modification">
                                    <div className="edit">
                                        <img src={EditIcon} className="Edit-icon" alt="Edit Icon" />
                                        <span className="edit-title" role="Edit Cart Item">Edit item</span>
                                    </div>
                                    <div className="remove">
                                        <img src={RemoveIcon} className="remove-icon" alt="Remove Icon" />
                                        <span className="remove-title" role="Remove Cart Item">Remove</span>
                                    </div>
                                    <div className="savefor">
                                        <img src={SaveForIcon} className="savefor-icon" alt="Save for later" />
                                        <span className="save-later" role="Save for later Cart Item">Save for later</span>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </>
                    ))}
                </section>
                {/* Added Cart items list end*/}
                </div>

                {/* Cart items Pricing details start*/}  
                <div className="pricing-summary-box aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    <div className="pricing-summary" role="Added Cart items Total Values">
                        <aside>
                        <h6>Pricing Summary</h6>
                        <div className="price-row">
                            <span className="left-val">Subtotal</span>
                            <span className="left-val">$388</span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Coupon</span>
                            <span className="left-val">- $77</span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Gift Cart</span>
                            <span className="left-val">- $100</span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Estimated Tax</span>
                            <span className="left-val">$ 23.28</span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Estimated Shipping</span>
                            <span className="left-val">Free</span>
                        </div>
                        <div className="price-row">
                            <span className="left-val">Estimated Total</span>
                            <span className="left-val">$233</span>
                        </div>
                        <div className="buttons" role="Checkout and Paypal buttons">
                            <button type="button" className="checkout">
                                <img src={require('../../assets/images/lock.png')} alt="Checkout" />
                                Checkout
                            </button>
                            <button type="button" className="paypal">
                            <img src={require('../../assets/images/PayPal.png')} alt="Paypal" />
                            </button>
                        </div>
                       </aside> 
                    </div>
                </div>
                {/* Cart items Pricing details end*/}  

            </div>    
    </div> : <p className="no-cart" aria-label="No Products Description">No Products added in your Cart</p>
  );
}

export default ShoppingBag;

