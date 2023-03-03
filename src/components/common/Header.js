import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="logo-box">
        <img src="img/logo-white.png" alt="Logo" className="logo" />
      </div> */}

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Luminosa</span>
          <span className="heading-primary-sub">
            Where shopping meets convenience
          </span>
        </h1>
        <a href="#products" className="btnn btnn-white">
          Shop Now!
        </a>
      </div>
    </header>
  );
};

export default Header;
