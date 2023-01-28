import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setProducts as setProds } from "../features/products";
import { getProducts } from "../features/products";
import SkeletonCustomized from "./common/SkeletonCustomized";
import Filter from "./common/Filter";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const products = useSelector((state) => state.products.products);

  const [category, setCategory] = useState(null);
  const [clicked, setClicked] = useState(true);
  // const url = "https://fakestoreapi.com/products/";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    // fetch(url)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw Error("Can not connect to the server!.");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // console.log(data);
    //     dispatch(setProds(data));
    //   })
    //   .catch((e) => {
    //     console.log(e.message);
    //   });
    // // added dispatch
  }, []);

  const showSkeleton = () => {
    return <SkeletonCustomized />;
  };

  const showProducts = () => {
    return (
      <Filter
        products={products}
        searchQuery={searchQuery}
        category={category}
      />
    );
  };

  const btnDecorator = () => {
    return clicked ? "btn btn-dark" : "btn btn-outline-dark";
  };

  return (
    <div className="main">
      <input
        style={{ paddingBottom: "20" }}
        placeholder="Search..."
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <div className="buttons">
        <button
          className={btnDecorator()}
          onClick={() => {
            setCategory(null);
            setClicked(true);
          }}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setCategory("women's clothing");
          }}
        >
          Women
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setCategory("men's clothing");
          }}
        >
          Men
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setCategory("jewelery");
          }}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setCategory("electronics");
          }}
        >
          Electronics
        </button>
      </div>
      {products.length > 0 ? showProducts() : showSkeleton()}
    </div>
  );
};

export default Products;
