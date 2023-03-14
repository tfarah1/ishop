import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HiShoppingCart, HiMinusCircle } from "react-icons/hi";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productsSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const productsInCart = useSelector((state) => state.products.cart) || [];
  const totalPrice = useSelector((state) => state.products.totalPrice);
  // console.log(totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleDelete = (id) => {
    // console.log("THIS IS ID", id);
    dispatch({ type: "products/delProductFromCart", payload: id });
  };

  const handleDeleteAll = () => {
    dispatch({ type: "products/delAllFromCart" });
  };

  const handleAddProduct = (id) => {
    dispatch({ type: "products/addAnotherToCart", payload: id });
  };

  const cartEmptyMessage = () => {
    return (
      // <>
      //   <h3 className="cart-empty">
      //     You haven't added any products to your cart yet...
      //   </h3>
      // </>
      <div className="notFoundContainer">
      <div className="notFound">
        <h1>You haven't added any products to your cart yet...</h1>
      </div>
      <div className="notFound">
        <h5>
          Consider adding some from the{" "}
          <Link to="/" style={{ color: "rgb(107, 105, 105)" }}>
            {" "}
            Home
          </Link>{" "}
          Page
        </h5>
      </div>
    </div>
    );
  };

  return productsInCart.length > 0 ? (
    <div className="cart-container">
      <div className="cart-top-container">
        <h1 id="cart-title">Your Cart</h1><HiShoppingCart className="cart-cart" cursor="pointer" />
      </div>
      <Container className="cart-table">
        <Row className="cart-row">
          <Col>Title</Col>
          <Col>Image</Col>
          <Col>price</Col>
          <Col>Units</Col>
          <Col>Add</Col>
          <Col>Delete</Col>
          <Col>
            <button
              className="btn btn-outline-danger"
              onClick={handleDeleteAll}
            >
              Delete all
            </button>
          </Col>
        </Row>
        {productsInCart?.map((product) => {
          return (
            <Row className="cart-row" key={product?.id}>
              <Col>{product?.title}</Col>
              <Col>
                <img
                  className="cart-image"
                  src={product?.image}
                  alt={product?.category}
                />
              </Col>
              <Col>{product?.price}$</Col>
              <Col>{product?.productUnits}</Col>
              <Col>
                <BsPlusCircleFill
                  className="cart-add"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleAddProduct(product)}
                ></BsPlusCircleFill>
              </Col>
              <Col>
                <HiMinusCircle
                  className="cart-delete"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDelete(product.id)}
                ></HiMinusCircle>
              </Col>
              <Col></Col>
            </Row>
          );
        })}
      </Container>

      <br />
      <div className="cart-total-price">
        <label>Total price to pay:</label>
        <br />
        <span className="total-price"><strong>${Math.round(totalPrice * 100) / 100}</strong></span>
      </div>

      <br />
      <div className="buy-button">
      <Link
        to="checkout"
        className="btn btns"
        style={{
          backgroundColor: "rgba(138,43,226, 0.6)",
          color: "white",
          width: "1000px",
        }}
      >
        Proceed to checkout
      </Link></div>
    </div>
  ) : (
    cartEmptyMessage()
  );
};

export default Cart;
