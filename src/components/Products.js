import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SkeletonCustomized from "./common/SkeletonCustomized";

const Products = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [clicked, setClicked] = useState(true);
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

  const showSkeleton = () => {
    return <SkeletonCustomized />;
  };

  // const search = () => {
  //   return products.filter((product) => {
  //     if (query === "") {
  //       return product;
  //     } else if (
  //       product.category.toLowerCase().includes(query.toLowerCase()) ||
  //       product.title.toLowerCase().includes(query.toLowerCase())
  //     ) {
  //       return product;
  //     }
  //     return loading;
  //   });
  // };

  const showProducts = () => {
    return (
      <>
        <div className="card-row">
          {query === ""
            ? // filter
              products.map((product) =>
                product.category === category || !category ? (
                  <ProductCard key={product.id} product={product} />
                ) : null
              )
            : // search
              products.map((product) =>
                product.title.toLowerCase().includes(query.toLowerCase()) ? (
                  <ProductCard key={product.id} product={product} />
                ) : null
              )}
        </div>
      </>
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
        onChange={(event) => setQuery(event.target.value)}
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
