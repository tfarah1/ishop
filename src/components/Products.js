import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Products = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
          setLoading(false);
        })
        .catch((e) => {
          console.log(e.message);
          setLoading(false);
        });
    }, 2000);
  }, [url]);

  const showSkeleton = () => {
    return (
      <div className="skeleton-row">
        {Array(10)
          .fill()
          .map((index) => {
            return (
              <div key={index}>
                <SkeletonTheme color="gray" highlightColor="white">
                  <div className="skeletonn">
                    <Skeleton height={350} />
                  </div>
                  <div className="skeletonn">
                    <Skeleton height={350} />
                  </div>
                  <div className="skeletonn">
                    <Skeleton height={350} />
                  </div>
                  <div className="skeletonn">
                    <Skeleton height={350} />
                  </div>
                </SkeletonTheme>
              </div>
            );
          })}
      </div>
    );
  };

  const filtered = () => {
    return products.filter((product) => {
      if (query === "") {
        return product;
      } else if (
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.title.toLowerCase().includes(query.toLowerCase())
      ) {
        return product;
      }
      return loading;
    });
  };

  // onClick={()=>filteredByCat("men's clothing")}

  const showProducts = () => {
    return (
      <>
        <div className="card-row">
          {products.map((product) =>
            product.category === category || !category ? ( //||categor==="all"
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
            setClicked(false);
          }}
        >
          Women
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setCategory("men's clothing");
            setClicked(false);
          }}
        >
          Men
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setCategory("jewelery");
            setClicked(false);
          }}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            setCategory("electronics");
            setClicked(false);
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
