import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiMinusCircle, HiShoppingCart } from "react-icons/hi";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productsSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const productsInCart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

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

  // const renderTotalPrice = () => {
  //   let total = 0;
  //   if (productsInCart.length > 0) {
  //     for (let i = 0; i < productsInCart?.length; i++) {
  //       total += productsInCart[i].price * productsInCart[i].productUnits;
  //     }
  //   }
  //   dispatch({ type: "products/renderTotalPrice" , payload: total});
  // };
  const renderTotalPrice = () => {
    dispatch({ type: "products/renderTotalPrice" });
  };

  const cartEmptyMessage = () => {
    return (
      <>
        <h3 className="cart-empty">
          You haven't added any products to your cart yet...
        </h3>
      </>
    );
  };

  return productsInCart.length > 0 ? (
    <div className="cart-container">
      <div className="cart-top-container">
        <HiShoppingCart className="cart-cart" cursor="pointer" />
      </div>
      <Container className="cart-table">
        <Row>
            <Col>Title</Col>
            <Col>Image</Col>
            <Col>price</Col>
            <Col>Units</Col>
            <Col>Delete Items </Col>
        </Row>
        {products.map(product=>{
        return(
          <Row key={product.id}>
               <Col>{product.title}</Col>
               <Col><img className="cart-image" src={product.image} alt={product.category}/></Col>
               <Col>{product.price}$</Col>
               <Col>{product.rating.count}</Col>
               <Col><AiFillDelete
                    className="cart-delete"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(product.id)}
                  ></AiFillDelete></Col>
          </Row>
        )
        })
        }
           
        {/* /* <tbody>
          {products.map((product) => {
            return (
              <tr key={index}>
                <td>{product.title}</td>
                <td>
                  <img
                    className="cart-image"
                    alt={product.category}
                    src={product.image}
                  ></img>
                </td>
                <td>${product.price}</td>
                <td>{product.productUnits}</td>
                <td>
                  <HiMinusCircle
                    className="cart-delete"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(product.id)}
                  ></HiMinusCircle>
                  <IoMdAddCircle
                    className="cart-delete"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleAddProduct(product.id)}
                  ></IoMdAddCircle>
                </td>
              </tr> */ }
      </Container>
              

      <br />
      <div className="cart-total-price">
        <label>Total price to pay:</label>
        <br />
        <span>${renderTotalPrice(productsInCart)}</span>
      </div>

      {/*Payment checkout */}
      <br />
      <Link to="checkout" className="btn btn-dark">
        Buy Now
      </Link>
    </div>
  ) : (
    cartEmptyMessage()
  );
};

export default Cart;
