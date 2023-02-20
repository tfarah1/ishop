import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const db = getDatabase();
  const Productref = ref(db, "products/" + id);

  useEffect(() => {
    onValue(Productref, (snapshot) => {
      const data = snapshot.val();
      // dispatch({ type: "products/setProducts", payload: data });
      setProduct(data);
    });
  }, []);

  const dispatch = useDispatch();
  const handleClick = (product) => {
    dispatch({ type: "products/addToCart", payload: product });
  };

  // console.log(product);
  return (
    <div className="box" key={product?.id}>
      <div className="row" style={{ paddingLeft: "100px" }}>
        <img
          className="img col-lg-6 col-sm-12"
          style={{ height: "500px", width: "500px" }}
          src={product?.image}
          alt="product"
        ></img>
        <div
          className="text col-lg-6 col-sm-40"
          style={{ paddingLeft: "70px" }}
        >
          <h1 id="title1">{product?.title}</h1>
          <p id="cat1">
            <strong>Category:</strong> {product?.category}
          </p>
          <hr className="line"></hr>
          <p id="des1">
            <i>
              <strong>Description: </strong>
              {product?.description}
            </i>
          </p>
          <hr className="line"></hr>
          <div id="prod-cart">
            <p id="pr1">Price: {product?.price}$</p>
            <button
              className="btn"
              onClick={() => handleClick(product)}
              cursor="pointer"
              style={{
                backgroundColor: "blueviolet",
                color: "white",
                width: "200px",
              }}
            >
              add to cart
            </button>
          </div>
          <hr className="line"></hr>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
