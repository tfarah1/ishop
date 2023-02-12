import { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import Sale from "./common/Sale";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { BsFillCartPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const ProductDetails = () => {
  const [datas,setDatas] = useState([]);
  const { id } = useParams();
  const db = getDatabase();
  const Productref = ref(db, "products/" + id) ;
  onValue(Productref, (snapshot) => {
    const data = Object.values(snapshot.val());
    //  console.log(data);
    // dispatch({ type: "products/setProducts", payload: data });
      console.log(data)
      setDatas(data)
  });


  const dispatch = useDispatch();
  const handleClick = (product) => {
    dispatch({ type: "products/addToCart", payload: product });
  };
 
  const [product, setProduct] = useState([]);
  // const url = "https://fakestoreapi.com/products/";

  // useEffect(() => {
  //   fetch(url + id, {
  //     method: "get",
  //     data: {},
  //     headers: {
  //       "access-token": "5353353-5353-535353",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error("Can not connect to the server!.");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setProduct(data);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // }, [url, id]);


  return (
    // <div className="box" key={product.id}>
    //   <h1>{product.title}</h1>
    //   <p>Category: {product.category}</p>
    //   <p>Description: {product.description}</p>
    //   <p>Price: {product.price}$</p>
    //   <img
    //     style={{ height: "250px", width: "250px" }}
    //     src={product.image}
    //     alt="product"
    //   ></img>
    // </div>

    <div className="box" key={product.id}>     
    <div className="row">  
     <img className="img col-lg-6 col-sm-12"
       style={{ height: "500px", width: "500px" }}
       src={product.image}
       alt="product"></img>
     <div className="text col-lg-6 col-sm-12">
     <h1 id="title1">{product.title}</h1>
     <p id="cat1">Category: {product.category}</p><hr className="line"></hr>
     <p id="des1">Description: {product.description}</p><hr className="line"></hr>
     <div id="prod-cart">
      <p id="pr1">Price: {product.price}$</p>       
      <BsFillCartPlusFill
       onClick={() => handleClick(product)}
       cursor="pointer"/>
      </div><hr className="line"></hr> 
     </div>
   </div>
 </div>
  );
};

export default ProductDetails;
