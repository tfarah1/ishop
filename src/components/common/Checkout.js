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
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");

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
      "Full Name": firstName + " " + lastName,
      "Phone Number": phone,
      "Full Address": address,
      "Zip Code": zip,
      "Order Date": date,
      "Total Price": totalPrice,
      Order: productsInCart,
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
        className="check-main"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h2 className="check-header">Checkout</h2>

        <div className="input-containers">
          <input
            required
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>First Name</label>
        </div>

        <div className="input-containers">
          <input
            required
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Last Name</label>
        </div>

        <div className="input-containers">
          <input
            required
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Phone Number</label>
        </div>

        <div className="input-containers">
          <input
            required
            name="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label>Full Address</label>
        </div>

        <div className="input-containers">
          <input
            required
            name="zip"
            type="number"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
          <label>Zip Code</label>
        </div>

        <div className="input-containers">
          <input
            required
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Date</label>
        </div>
       
          <label id="checkout-total">
            <strong>Total: ${totalPrice}</strong>
          </label>
       

        <div className="button-container">
          <button
            type="submit"
            value="checkout"
            className="btn btn-dark btn-block"
          >
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
