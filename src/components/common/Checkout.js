import { getDatabase, push, ref } from "@firebase/database";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const productsInCart = useSelector((state) => state.products.cart);
  const totalPrice = useSelector((state) => state.products.totalPrice);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState(0);

  // get date
  const dateObj = new Date();
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  const day = ("0" + dateObj.getDate()).slice(-2);
  const year = dateObj.getFullYear();
  const defaultDate = `${year}-${month}-${day}`;
  const [date, setDate] = useState(defaultDate);

  // user info obj
  let userData = {};

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const db = getDatabase();
  const Productref = ref(db, "order/");

  function writeUserData(userData) {
    push(Productref, userData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    userData = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      zip: zip,
      date: date,
      productsInCart: productsInCart,
      totalPrice: totalPrice,
    };

    //write to db
    writeUserData(userData);

    dispatch({ type: "products/delAllFromCart" });
    alert("Your order is on its way...");
    setTimeout(() => {
      navigate("/");
    }, 1500);
    console.log(userData);
  };

  return (
    <div className="check-form">
    <form
      
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2 className="check-header">Checkout</h2> 
      
      <div className="input-container">
      <input
        required
        name="firstName"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>First Name</label>
      </div>

      <div className="input-container">
      
      <input
        required
        name="lastName"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label>Last Name</label>
      </div>
      <div className="input-container">
      <input
        required
        name="address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label>Full Address</label>
      </div>

      <div className="input-container">
      <input
        required
        name="zip"
        type="number"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <label>Zip</label>
      </div>
      
      <div className="input-container">
      <input
        required
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label>Date</label>
      </div>
      <div className="button-container">
      <button type="submit" value="checkout" className="btn btn-dark btn-block">
        Checkout
      </button></div>
    </form></div>
  );
}

export default Checkout;
