import { createSlice } from "@reduxjs/toolkit";

// const getProducts = () => {
//   let products = [];
//   fetch("https://fakestoreapi.com/products/")
//     .then((response) => {
//       if (!response.ok) {
//         throw Error("Can't connect to the server!");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       products = data;
//     })
//     .catch((e) => {
//       console.log(e.message);
//     });
// };

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      // console.log("action", action);
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
