import React from 'react'
import './Banner.scss'

function Banner() {
    let url = "";
    return (
        <>
        <section>
        <div className="banner-box" role="Banner and Text">
            <div className="aem-Grid aem-Grid--12">

                {/* womens Text box start for desktop */}
                <div className="aem-GridColumn aem-GridColumn--default--3 desktop-view" aria-label="Banner Description">
                    <span className='banner-text'>
                        <h4>Women's <br />Outerwear</h4>
                    </span>
                </div>
                {/* womens Text box end */}

                {/* Banner Image Start */}
                    <div className="aem-GridColumn aem-GridColumn--default--9 desktop-view">
                        <span className="banner-image" aria-label='Banner Image' tabIndex={0}>
                            <img src={require('../../assets/images/banner.jpg')} alt='Banner Image' tabIndex={0} />
                        </span>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--phone--12 mobile-view">
                        <span className="banner-image" aria-label='Banner Image' tabIndex={0}>
                            <img src={require('../../assets/images/banner.jpg')} alt='Banner Image' tabIndex={0} />
                        </span>
                    </div>
                {/* Banner Image End*/}

                {/* womens Text box start for mobile */}
                <div className="aem-GridColumn  aem-GridColumn--phone--12 mobile-view">
                    <span className='banner-text'>
                        <h4>Women's <br />Outerwear</h4>
                    </span>
                </div>
                {/* womens Text box end */}

                </div>
            </div>  
            </section>          
        </>
    )
}

export default Banner
