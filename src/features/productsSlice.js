import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, onValue, set, push } from "firebase/database"
import { useEffect } from "react";
import {  useSelector } from "react-redux";

export const getProducts = () => (dispatch) => {
  const db = getDatabase();
  const Productref = ref(db, "products");
  onValue(Productref, (snapshot) => {
    const data = Object.values(snapshot.val());
    console.log(data);
    dispatch({ type: "products/setProducts", payload: data });
    console.log(data);
    
  });

  // db.ref('https://laser-c7594-default-rtdb.firebaseio.com/products')
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw Error("Can't connect to the server!");
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     dispatch({ type: "products/setProducts", payload: data });
  //   })
  //   .catch((e) => {
  //     console.log(e.message);
  //   });
};

const calculateTotal = (cart) => {
  
  // console.log("calcu total");
  let total = 0;
  let initialValue = 0
  //calculating te Total price by multipling the price by the units
  if (cart.length > 0) {

     total  = cart.reduce(
        
      (sumCart,currentCartItem)=>{
        sumCart+=currentCartItem.price*currentCartItem.productUnits;
        return sumCart;
        
         
        
      }, initialValue
     )
     

     console.log(total)

    // for (let i = 0; i < cart.length; i++) {
    //   total += cart[i].price * cart[i].productUnits;
    // }
    // return total;
    // dispatch({ type: "SET_TOTAL_PRICE", payload: total });
  }
};

const initialState = {
  products: [],
  cart: [],
  totalPrice: 0,
  searchQuery: "",
  // productUnits: 1,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    addToCart: (state, action) => {
      let index = state.cart.findIndex((p) => p.id === action.payload.id);
      if (index > -1) {
        state.cart[index].productUnits++;
      } else {
        let item = Object.assign({}, action.payload);
        item.productUnits = 1;
        state.cart = [...state.cart, item];
      }
      state.totalPrice = calculateTotal(state.cart);

      //write
      //product.id
      const db = getDatabase();
      const Productref = ref(db, "Cart/");
      const data = action.payload;
      function writeUserData(data) {
        push(Productref, {
          data: data,
        });
      }
      writeUserData(data);
    },
    delProductFromCart: (state, action) => {
      let index = state.cart.findIndex((p) => p.id === action.payload);
      // console.log("index", index);
      if (index > -1) {
        if (state.cart[index].productUnits > 1) {
          state.cart[index].productUnits--;
        } else {
          state.cart = state.cart.filter((p) => p.id !== action.payload);
        }
        state.totalPrice = calculateTotal(state.cart);
      }
    },
    addAnotherToCart: (state, action) => {
      let index = state.cart.findIndex((p) => p.id === action.payload.id);
      // check count in database
      // units >= 
      if (index > -1) {
        state.cart[index].productUnits++;
        state.totalPrice = calculateTotal(state.cart);
      }
    },
    delAllFromCart: (state) => {
      console.log("del all");
      state.cart = [];
      state.totalPrice = calculateTotal(state.cart);
      console.log("after del all");
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
