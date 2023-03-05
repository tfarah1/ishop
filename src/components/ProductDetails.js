import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import Sale from "./common/Sale";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { useDispatch } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const db = getDatabase();
  const Productref = ref(db, "products/" + id);
  // let name = ''

  useEffect(() => {
    onValue(Productref, (snapshot) => {
      const data = snapshot.val();
      // dispatch({ type: "products/setProducts", payload: data });
      setProduct(data);
    });
  }, []);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch({ type: "products/addToCart", payload: product });
  };

  // console.log(product);
  return (
    <div className="box" key={product?.id}>
      <div className="row" style={{ paddingLeft: "100px" }}>
        <img
          className="img col-lg-6 col-sm-12"
          style={{ height: "500px", width: "500px" }}
          src={product?.image}
          alt="product"
        ></img>
        <div
          className="text col-lg-6 col-sm-40"
          style={{ paddingLeft: "70px" }}
        >
          <h1 id="title1">{product?.title}</h1>
          <p id="cat1">
            <strong>Category:</strong> {product?.category}
          </p>
          <hr className="line"></hr>
          <p id="des1">
            <i>
              <strong>Description: </strong>
              {product?.description}
            </i>
          </p>
          <hr className="line"></hr>
          <div id="prod-cart">
            <p id="pr1">Price: {product?.price}$</p>
            <button
              className="btn"
              onClick={() => handleAddToCart(product)}
              cursor="pointer"
              style={{
                backgroundColor: "blueviolet",
                color: "white",
                width: "200px",
              }}
            >
              Add to cart
            </button>
            <p id="pr1">Price: {product.price}$</p>
          <button className="buy-now" 
            onClick={() => handleClick(product)}
            cursor="pointer">Buy Now</button>
          </div>
          <hr className="line"></hr>
          { product ?
          <Link
            to="/cart"
            className="btn"
            style={{
              backgroundColor: "blueviolet",
              color: "white",
              width: "640px",
            }}
            onClick={() => handleAddToCart(product)}
          >
            Buy now 
          </Link>
          : ""
          }
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
