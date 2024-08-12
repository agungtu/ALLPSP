import React from "react";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer id="footer">
       
        <NewsletterForm />

        <div className="footer-bottom" style={{backgroundColor: '#c19a6b'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <p className="copyright" style={{color:'#FFFF'}}>
                  Copyright {currentYear} Jibo. all rights by{" "}
                  <a href="http://envytheme.com/" target="_blank" style={{color:'#FFFF'}}>
                    EnvyTheme
                    
                  </a>
                </p>
              </div>

              <div className="col-md-6 col-lg-6">
                <ul className="social-links"  >
                  <li style={{color:'#FFFF'}}>Follow us :</li>
                  <li >
                    <a href="https://facebook.com/" target="_blank" >
                      <i className="icofont-facebook" style={{color:'#FFFF'}}></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="icofont-twitter"  style={{color:'#FFFF'}}></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="icofont-instagram"  style={{color:'#FFFF'}}></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="icofont-pinterest" style={{color:'#FFFF'}}></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
