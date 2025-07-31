import React from 'react'
import '../Footer/Footer.css'
import gp from '../../assets/icons/gp.png'
import appstore from '../../assets/icons/appstore.png'
import fb from '../../assets/icons/fb.png'
import insta from '../../assets/icons/insta.png'
import twt from '../../assets/icons/twt.png'
import utube from '../../assets/icons/utube.png'
import ori from '../../assets/icons/ori.png'
import onefour from '../../assets/icons/onefour.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="list">
                <div className="onshop">
                    <h5>ONLINE SHOPPING</h5>
                    <br />
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Home</li>
                    <li>Beauty</li>
                    <li>Genz</li>
                    <li>Gift Cards</li>
                    <li>Myntra Insider</li>
                </ul>
                </div>
                <div className="cp">
                    <h5>CUSTOMER POLICIES</h5>
                    <br />
                <ul>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>T&C</li>
                    <li>Terms of Use</li>
                    <li>Track Orders</li>
                    <li>Shipping</li>
                    <li>Cancellation</li>
                    <li>Returns</li>
                    <li>Privacy policy</li>
                    <li>Grievance Redressal</li>
                </ul>
                </div>
                
                <div className="useful">
                    <h5>USEFUL LINKS</h5>
                    <br />
                <ul>
                <li>Blog</li>
                <li>Careers</li>
                <li>Site Map</li>
                <li>Corporate Information</li>
                <li>Whitehat</li>
                <li>Cleartrip</li>
                <li>Myntra Global</li>
                </ul>
                </div>
                <div className="play">
                    <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                    <br />
                    <img src={gp} alt="" />
                    <img src={appstore} alt="" />
                </div>
                <div className="keep">
                    <h3>KEEP IN TOUCH</h3>
                    <br />
                    <img src={fb} alt="" />
                    <img src={twt} alt="" />
                    <img src={utube} alt="" />
                    <img src={insta} alt="" />
                </div>
                <span className="original">
                    <img src={ori} alt="" />
                    <p><b>100% ORIGINAL</b>guarantee for all products at myntra.com</p>
                </span>
                <span className="return">
                    <img src={onefour} alt="" />
                    <p><b>Return within 14days</b>of receiving your order</p>
                </span>
            </div>
            
           
        </div>
    )
}

export default Footer