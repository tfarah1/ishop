import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    fetch(url + id, {
      method: "get",
      data: {},
      headers: {
        "access-token": "5353353-5353-535353",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Can not connect to the server!.");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [url, id]);

  return (
    <div className="box" key={product.id}>
      <h1>{product.title}</h1>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}$</p>
      <img
        style={{ height: "250px", width: "250px" }}
        src={product.image}
        alt="product"
      ></img>
    </div>
  );
};

export default ProductDetails;
