import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Copyrights = () => {
  return (
    <footer id="footer" style={{paddingTop:"100px", paddingBottom:"100px"}}>
      <div className="footer-icons">
        <i className="iconss">
          {" "}
          <a id="foot-ic"
            href="https://www.instagram.com/shawazone"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </i>
        <i className="iconss" >
          {" "}
          <a id="foot-ic"
            href="https://twitter.com/CovPain"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </i>
        <i className="iconss">
          {" "}
          <a id="foot-ic"
             href="https://wa.me/+96171928182" 
             target="_blank" 
             rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </i>
        <i className="iconss">
          {" "}
          <a id="foot-ic"
            href="https://www.linkedin.com/in/farahtaleb"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </i>
      </div>
      <p className="copy">© Copyright iShop</p>
    </footer>
  );
};

export default Copyrights;
