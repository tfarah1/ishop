import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Copyrights = () => {
  return (
    // <footer id="footer" style={{paddingTop:"100px", paddingBottom:"100px"}}>
    //   <div className="footer-icons">
    //     <i className="iconss">
    //       {" "}
    //       <a id="foot-ic"
    //         href="https://www.instagram.com/shawazone"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </i>
    //     <i className="iconss" >
    //       {" "}
    //       <a id="foot-ic"
    //         href="https://twitter.com/CovPain"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <FaTwitter />
    //       </a>
    //     </i>
    //     <i className="iconss">
    //       {" "}
    //       <a id="foot-ic"
    //          href="https://wa.me/+96171928182" 
    //          target="_blank" 
    //          rel="noreferrer"
    //       >
    //         <FaWhatsapp />
    //       </a>
    //     </i>
    //     <i className="iconss">
    //       {" "}
    //       <a id="foot-ic"
    //         href="https://www.linkedin.com/in/farahtaleb"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <FaLinkedinIn />
    //       </a>
    //     </i>
    //   </div>
    //   <p className="copy">© Copyright iShop</p>
    // </footer>
    <footer class="footer" id="footer">
    <div class="footer__logo-box">
      <img src="img/logo-green-2x.png" alt="full logo" class="footer__logo" />
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="#" class="footer__link">Company</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Contact us</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Careers</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Privacy policy</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-1-of-2">
        <p class="footer__copyright">
          Built by Farah Taleb, Omar Abbas, Baker Lawzi, and Mohammad Shawa for their 
          MFE-Tash8eel Final Project. &nbsp; &nbsp; &copy; 2023 LUMINOSA. All rights reserved. 
        
        </p>
      </div>
    </div>
  </footer>

  );
};

export default Copyrights;