import "./FooterStyles.css";
import React from 'react';
import {FaHome,FaMailBulk, FaPhone, FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    <div>
                        <p> Hno. D272 DownTown Street  </p>
                        <p> India </p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    +91 8978966970</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    aili.shivaprasad@gmail.com</h4>
                </div>
                </div>

                <div className="right">
                    <h4>About me</h4>
                    <p>I am a react front-end developer. I create responsive 
            secure websites.</p>
                    <div className="social">
                        <FaFacebook size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                        <FaTwitter size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                        <FaLinkedin size={20} style={{color:"#fff",marginRight: "2rem"}}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;