import { createSlice } from "@reduxjs/toolkit";

export const getProducts = () => (dispatch) => {
  fetch("https://fakestoreapi.com/products/")
    .then((response) => {
      if (!response.ok) {
        throw Error("Can't connect to the server!");
      }
      return response.json();
    })
    .then((data) => {
      dispatch({ type: "products/setProducts", payload: data });
    })
    .catch((e) => {
      console.log(e.message);
    });
};

const initialState = {
  products: [],
  cart: [],
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
      // state = current(state) whenever you want to use state
        console.log("products",state.products)

        console.log("cart",state.cart)

       console.log("action", action)
      let index = state.cart.findIndex((p) => p.id === action.payload.id);
      // console.log(index);
      // console.log(found);
      // if ( state.cart[index].productUnits){
      if (index > -1) {
        // console.log("INDEXXX", state.cart[index])
        state.cart[index].productUnits = state.cart[index].productUnits + 1;
      } else {
        let item = Object.assign({}, action.payload);
        item.productUnits = 1;
        state.cart = [...state.cart, item];
      }
      // console.log("after adding to cart", current(state));
    },
    delProductFromCart: (state, action) => {
      console.log("PAYLOADD", action);
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
    delAllFromCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
