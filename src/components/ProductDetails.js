import { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import Sale from "./common/Sale";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const db = getDatabase();
  const Productref = ref(db, "products/" + id);

  useEffect(() => {
    onValue(Productref, (snapshot) => {
      const data = snapshot.val();
      // dispatch({ type: "products/setProducts", payload: data });
      setProduct(data);
    });
  }, []);

  const dispatch = useDispatch();
  const handleClick = (product) => {
    dispatch({ type: "products/addToCart", payload: product });
  };

  return (
    // <div className="box" key={product.id}>
    //   <h1>{product.title}</h1>
    //   <p>Category: {product.category}</p>
    //   <p>Description: {product.description}</p>
    //   <p>Price: {product.price}$</p>
    //   <img
    //     style={{ height: "250px", width: "250px" }}
    //     src={product.image}
    //     alt="product"
    //   ></img>
    // </div>

    <div className="box" key={product.id}>
      <div className="row" style={{paddingLeft: "100px"}}>
        <img
          className="img col-lg-6 col-sm-12"
          style={{ height: "500px", width: "500px" }}
          src={product.image}
          alt="product"
        ></img>
        <div className="text col-lg-6 col-sm-40" style={{paddingLeft: "70px"}}>
          <h1 id="title1">{product.title}</h1>
          <p id="cat1">
            <strong>Category:</strong> {product.category}
          </p>
          <hr className="line"></hr>
          <p id="des1">
            <strong>Description:</strong> {product.description}
          </p>
          <hr className="line"></hr>
          <div id="prod-cart">
            <p id="pr1">Price: {product.price}$</p>
            <BsFillCartPlusFill
              onClick={() => handleClick(product)}
              cursor="pointer"
            />
          </div>
          <hr className="line"></hr>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
