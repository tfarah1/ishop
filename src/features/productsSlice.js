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
      let index = state.cart.findIndex((p) => p.id === action.payload.id);
      if (index > -1) {
        state.cart[index].productUnits++;
      } else {
        let item = Object.assign({}, action.payload);
        item.productUnits = 1;
        state.cart = [...state.cart, item];
      }
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
      }
    },
    addAnotherToCart: (state, action) => {
      let index = state.cart.findIndex((p) => p.id === action.payload);
      if (index > -1) {
        state.cart[index].productUnits++;
      }
    },
    totalPrice: (state, action) => {
      let total = 0;
      if (state.cart.length > 0) {
        for (let i = 0; i < state.cart.length; i++) {
          total += state.cart[i].price * state.cart[i].productUnits;
        }
        return total;
      }
    },
    delAllFromCart: (state) => {
      state.cart = [];
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
