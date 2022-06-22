import React from 'react'
import './Footer.scss';
import InstagramIcon from '../../assets/svg/instagram.svg';
import FacebookIcon from '../../assets/svg/facebook.svg';
import TwitterIcon from '../../assets/svg/twitter.svg';
import { Link } from "react-router-dom";

function Footer() {
    let url = "";
    return (
    <>
        <footer>

             {/* Footer all menus start */}
            <section className='footer'>
                <article className='footer-box'>
                    <h4>Account</h4>
                    <a href={url} aria-label='Sign in Link'>Sign in</a>
                    <a href={url} aria-label='Register Link'>Register</a>
                    <a href={url} aria-label='Order Status Link'>Order Status</a>
                </article>
                <article className='footer-box'>
                    <h4>About Us</h4>
                    <a href={url} aria-label='Our History Link'>Our History</a>
                    <a href={url} aria-label='Careers Link'>Careers</a>
                </article>
                <article className='footer-box'>
                    <h4>Help</h4>
                    <a href={url} aria-label='Contact Us Link'>Contact Us</a>
                    <a href={url} aria-label='Order Status Link'>Order Status</a>
                    <a href={url} aria-label='Returns Link'>Returns</a>
                </article>
                <article className='footer-box'>
                    <h4>Follow Us!</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className='social-media' role="Social Media">
                        <a href={url} aria-label='Instagram Link'>
                            <img src={InstagramIcon} alt="Instagram Icon" />
                        </a>
                        <a href={url} aria-label='Facebook Link'>
                            <img src={FacebookIcon} alt="Facebook Icon" />
                        </a>
                        <a href={url} aria-label='Twitter Link'>
                            <img src={TwitterIcon} alt="Twitter Icon" />
                        </a>
                     </div>   
                </article>
            </section>
            {/* Footer all menus end */}

             {/* Terms and Policies start */}
            <section className='terms-policy' aria-label='Terms and Policies'>
            <div className='aem-Grid aem-Grid--12'>
                <div className="footer-logo aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--hide">
                <img src={require('../../assets/images/venia-logo.png')} alt='Venia Logo' />
                </div>
                <div className="footer-links aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 mobile-view">
                     <nav role="footer links">
                        <Link to="/">Terms of Usage</Link>
                        <Link to="/">Privacy Policy</Link>    
                     </nav>      
                </div> 
                <div className="company-add aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                    © Company Name Address Ave, City Name, State ZIP
                </div>
                <div className="footer-links aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--hide">
                     <nav role="footer links">
                        <Link to="/">Terms of Usage</Link>
                        <Link to="/">Privacy Policy</Link>    
                     </nav>      
                </div>     
            </div>    
            </section>
            {/* Terms and Policies end */}

        </footer>
    </>
    )
}

export default Footer;

