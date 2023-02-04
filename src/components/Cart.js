import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cart = () => {
  const [products, setProducts] = useState([]);
  // let [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Can not connect to the server!.");
          }
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          setProducts(data);
          setLoading(true);
        })
        .catch((e) => {
          console.log(e.message);
          setLoading(true);
        });
    }, 2000);
  }, [url]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    console.log(updatedProducts)
    setProducts(updatedProducts);
  };

  const handleDeleteAll = () => {
    setProducts([]);
  };
// Cart-table / 
  return loading ? (
    <>
    <div className="cart-container">
      <div className="cart-top-container">
        {/* <p className="cart-title">Cart</p> */}
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
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>
                  <img
                    className="cart-image"
                    alt={product.category}
                    src={product.image}
                  ></img>
                </td>
                <td>${product.price}</td>
                <td>{product.rating.count}</td>
                <td>
                  <AiFillDelete
                    className="cart-delete"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(product.id)}
                  ></AiFillDelete>
                </td>
              </tr> */ }
      </Container>
    </div>
    </>
  ) : (
    <p className="three-dots">...</p>
  );
};
{/* <button
                className="btn btn-dark"
                onClick={() => {
                  handleDeleteAll();
                }}
              ></button> */}
export default Cart;
