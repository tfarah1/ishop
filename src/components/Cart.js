import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

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
    setProducts(updatedProducts);
  };

  const handleDeleteAll = () => {
    setProducts([]);
  };

  return loading ? (
    <div className="cart-container">
      <div className="cart-top-container">
        {/* <p className="cart-title">Cart</p> */}
        <HiShoppingCart className="cart-cart" cursor="pointer" />
      </div>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Units</th>
            <th></th>
            <th>
              <button
                className="btn btn-dark"
                onClick={() => {
                  handleDeleteAll();
                }}
              >
                Delete All
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="three-dots">...</p>
  );
};

export default Cart;
