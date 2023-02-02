import React, { useEffect } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/productsSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const productsInCart = useSelector((state) => state.products.cart);
  // const productUnits = useSelector(state => state.products.productUnits);
  
  // const [productCount, setProductCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  });

  const handleDelete = (id) => {
    console.log("THIS IS ID", id);
    dispatch({ type: "products/delProductFromCart", payload: id });
  };

  const handleDeleteAll = () => {
    dispatch({ type: "products/delAllFromCart" });
  };

  // const renderCount = (product) => {
  //   if (productsInCart?.includes(product)) {
  //     setProductCount(productCount + 1);
  //   }
  //   return productCount;
  // };
  //console.log(productsInCart);

  // console.log(loading);

  // units replaced by price for now
  const renderTotalPrice = (productsInCart) => {
    // console.log("total", productsInCart[0].price);
    let total = 0;
    if (productsInCart.length > 0) {
      for (let i = 0; i < productsInCart?.length; i++) {
        total += productsInCart[i].price * productsInCart[i].id;
      }
    }
    return total;
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
          {productsInCart.map((product, index) => {
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
