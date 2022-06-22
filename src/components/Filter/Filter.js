import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Filters.scss';

function Filters() {
    let url = "";
    return (
    <>  
        {/* Page Navigation section */} 
        <nav className="crumbs">
            <Link to="/" aria-label='Clothing url'>Clothing</Link> /
            <Link to="/" aria-label='Womens url'>Women's</Link> /
            <Link to="/" aria-label='Outerwear url'>Outerwear</Link>    
        </nav>

         {/* filters section start */}   
        <div className="filters">
             <div className="filters-mobile">
                    <div className='filter-title'>
                        Filters
                    </div>
                     <div className='colors-names-row'>
                        <span className='colors-name'>Black</span>
                       <a href={url}>Clear all</a> 
                     </div>
                </div> 
                <div className='filter-title filters-desktop'>Filters</div>

                 {/* Color checks section */}   
                <fieldset className='color-group' role="Color Checks">
                <h6>Color</h6>
                    <div role="CheckboxGroup">
                      <span className='checkbox'>
                        <input id="option" name='Option' value="val" checked type="checkbox" />
                      </span>
                      <span className='checkbox1'>
                        <input id="option1" type="checkbox" name='Option1' value="val" />
                      </span>  
                      <span className='checkbox2'>
                        <input id="option" name='Option' value="val" type="checkbox" />
                      </span>
                      <span className='checkbox3'>
                        <input id="option1" type="checkbox" name='Option1' value="val" />
                      </span>                     
                    </div>
             </fieldset>

             {/* Brands section start */}   
            <fieldset>
                <h6>Brand</h6>
                    <div role="CheckboxGroup">
                      <input id="option" name='Option' value="val" type="checkbox" />
                      <label for="option">Option</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="option1" type="checkbox" name='Option1' value="val" />
                      <label for="option1">Option</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="option2" type="checkbox" name='Option2' value="val" />
                      <label for="option2">Option</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="option3" type="checkbox" name='Option3' value="val" />
                      <label for="option3">Option</label>
                    </div>
                    <a href={url} aria-label='Show More Link' className="shoremore">Show more</a>   
             </fieldset>  
            
             {/* Sizes section start */}   
             <fieldset>
                <h6>Size</h6>
                    <div role="CheckboxGroup">
                      <input id="option" name='Option' value="val" type="checkbox" />
                      <label for="option">Option</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="option1" type="checkbox" name='Option1' value="val" />
                      <label for="option1">Option</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="option2" type="checkbox" name='Option2' value="val" />
                      <label for="option2">Option</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="option3" type="checkbox" name='Option3' value="val" />
                      <label for="option3">Option</label>
                    </div>
                    <a href={url} aria-label='Show More Link' className="shoremore">Show more</a>       
             </fieldset>   
             
             <fieldset>
                <h6>Brand</h6>
                    <div role="CheckboxGroup">
                      <input id="option" name='Option' value="val" type="checkbox" />
                      <label for="option">Option</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="option1" type="checkbox" name='Option1' value="val" />
                      <label for="option1">Option</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="option2" type="checkbox" name='Option2' value="val" />
                      <label for="option2">Option</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="option3" type="checkbox" name='Option3' value="val" />
                      <label for="option3">Option</label>
                    </div>
                    <a href={url} aria-label='Show More Link' className="shoremore">Show more</a>       
             </fieldset>    
        </div>
        {/* filters section end */}
    </>
    )
}

export default Filters


