import { createSlice, current } from "@reduxjs/toolkit";
// import { createReducer, createAction, current } from '@reduxjs/toolkit'

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
const calculateTotal = (cart) => {
  console.log("calcu total");
  let total = 0;
  let len = cart.length;
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      total += cart[i].price * cart[i].productUnits;
    }
    return total;
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
      let index = state.cart.findIndex((p) => p.id === action.payload);
      if (index > -1) {
        state.cart[index].productUnits++;
        state.totalPrice = calculateTotal(state.cart);
      }
    },
    delAllFromCart: (state) => {
      state.cart = [];
      state.totalPrice = calculateTotal(state.cart);
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
