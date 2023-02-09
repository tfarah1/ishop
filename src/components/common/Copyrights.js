import React from "react";
import { FaFacebook ,FaInstagram,FaTwitter,FaLinkedinIn} from 'react-icons/fa';

const Copyrights = () => {
  return (
    <footer id="footer">
    <div className="footer-icons">
    <i  className="iconss" aria-hidden="true"> <FaInstagram/></i>
    <i  className="iconss" aria-hidden="true"> <FaFacebook/></i>
    <i  className="iconss" aria-hidden="true"> <FaTwitter/></i>
    <i  className="iconss" aria-hidden="true"> <FaLinkedinIn/></i>
    </div>
    <p className="copy">© Copyright iShop</p>


  </footer>

  );
};

export default Copyrights;