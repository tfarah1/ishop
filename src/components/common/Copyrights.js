import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Copyrights = () => {
  return (
    <footer id="footer">
      <div className="footer-icons">
        <i className="iconss" aria-hidden="true">
          {" "}
          <a
            href="https://www.instagram.com/shawazone"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </i>
        <i className="iconss" aria-hidden="true">
          {" "}
          <a
            href="https://www.twitter.com/covpain"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </i>
        <i className="iconss" aria-hidden="true">
          {" "}
          <a href="https://wa.me/+96171928182" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </i>
        <i className="iconss" aria-hidden="true">
          {" "}
          <a
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
