import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { FiTag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);
  const [units, setUnits] = useState(0);
  const [showUnits, setShowUnits] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUnits(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [units]);

  const handleAddProduct = (product) => {
    //POST product in CART
    dispatch({ type: "products/addToCart", payload: product });
    setClicked(true);
    setShowUnits(true);
    setUnits(units + 1);
  };

  // console.log(product)

  return (
    <div className="card-box" key={product.id} >
      <div className="card-top">
        <FiTag className="card-tag" />
        <span className="card-category">{product.category?.toUpperCase()}</span>
      </div>

      <div>
        <p className="card-title">{product.title?.substring(0, 42)}...</p>
      </div>
      {showUnits && units >= 1 ? (
        <span className="card-units">{units}x</span>
      ) : (
        <></>
      )}

      <div className="card-img-container">
        <Link to={"/products/" + product.id}>
          <img className="card-image" src={product.image} alt={product.title} />
        </Link>
      </div>

      <div className="card-bottom">
        <span className="card-price">
          <strong>${product?.price}</strong>
        </span>

        {clicked ? (
          <BsFillCartCheckFill
            className="card-cart"
            onClick={() => handleAddProduct(product)}
          />
        ) : (
          <BsFillCartPlusFill
            className="card-cart"
            onClick={() => handleAddProduct(product)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
