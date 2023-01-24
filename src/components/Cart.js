import React, { useEffect, useState } from "react";
// import { BsFillCartPlusFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const [products, setProducts] = useState([]);
  let [totalPrice, setTotalPrice] = useState(0);
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
          console.log(data);
          setProducts(data);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }, 2000);
  }, [url]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  };

  const calcTotalPrice = () => {
    for (let i = 0; i < products.length; i++) {
      setTotalPrice(totalPrice + products[i].price);
      console.log(products[i].price);
    }
    console.log(totalPrice);
    return totalPrice;
  };


  return (
    <div className="cart-container">
      <div className="cart-top-container">
        <p className="cart-title">Cart</p>
        {/* <BsFillCartPlusFill className="cart-cart" cursor="pointer" /> */}
      </div>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Units</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, key) => {
            return (
              <tr key={product.id}>
                <td>{product.title.substring(0, 40)}</td>
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
  );
};

export default Cart;
