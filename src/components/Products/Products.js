// import React from 'react'
import Filters from '../Filter/Filter';
import FiltersIcon from '../../assets/svg/filters.svg';
import ArrowUpIcon from '../../assets/svg/arrow-up.svg';
import ArrowDownIcon from '../../assets/svg/arrow-down.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import './Products.scss';
import './PaginationComponent.scss';
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Axios from "axios";
import Pagination from "react-js-pagination";

function Products() {
    const [hideLightbox, setHideLightbox] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [products, setProducts] = useState([]);
    
    //fetch products list
    const fetchProducts = async () => {
        const { data } = await Axios.get(
        "https://fakestoreapi.com/products"
        ).catch((error)=>{
            console.log("Error", error);
    });
    const products = data;
    setProducts(products);
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //pagination 
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    let url = "";
    
    return (
      products.length ?
        <div className='products aem-Grid aem-Grid--12' aria-label="Cloth Products">
        
         {/* Left Filters section start */}
         
         <div className={`${hideLightbox ? "show-lightbox" : "hide-lightbox"}`}>
            <span className='cross-mobile' onClick={() => setHideLightbox(false)}> X </span>
            <div className="left-filters-box aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 min768px">
              <aside>
                <Filters />
               </aside>  
            </div> 
          </div>
          <div className="left-filters-box aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 min768px">
            <aside> 
             <Filters />
            </aside> 
          </div> 
          
        {/* Left Filters section end */}
     
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 min768pxx">
         
         {/* Filter resultsand sort products for mobile view */}   
            <div className='filters-sort mobile-view'>
                <span className='filters-pro' onClick={() => setHideLightbox(true)}>
                   <img src={FiltersIcon} alt="Filters icon" />
                    Filter Results
                </span>
                <span className='sort'>
                    <img src={ArrowDownIcon} alt="Sort Products icon" />
                    <img src={ArrowUpIcon} alt="Sort Products icon" />
                    Sort Products
                </span>
            </div>
            {/* Filter resultsand sort products for mobile view end*/}  

             {/* products length and sort dropdown start*/}  
            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                <div className='aem-Grid aem-Grid--12'>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <span className='dark-gunmental semi-bold'> {products.length} Results</span>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide">
                        <select>
                            <option>Sort by Latest</option>
                        </select>
                    </div>
                 </div>   
             </div>  
              {/* products length and sort dropdown end*/}  

             {/* products List start*/}  
             <section>
                <div className='products-box'>
                        {currentPosts.map((product) => (     
                            <Link to={`/products/${product.id}`}>
                            <article> 
                                <div className='product'>
                                    <img src={product.image} alt="Product" /> 
                                    <span className='product-name'>{product.title}</span>
                                    <span className='product-price'>${product.price}</span>
                                    <img src={HeartIcon} className="heart-icon" alt="Heart icon" />                   
                                </div>
                            </article>
                            </Link>
                        ))} 
                </div>
             </section>
             {/* products List end*/}   

            {/* Pagination start*/}          
             <div className="pagination-background" role="Pagination">
                <Pagination
                activePage={products}
                itemsCountPerPage={postsPerPage}
                totalItemsCount={products.length}
                pageRangeDisplayed={products.length / postsPerPage}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
                />
            </div>   {/* Pagination end*/}      
        </div>   
    </div>   
    : <div style={{ textAlign: 'center' }}>     {/* Loader image*/}  
        <img src={require('../../assets/images/loader.gif')} width={200} alt="Loading..." />
    </div>
    )
}

export default Products