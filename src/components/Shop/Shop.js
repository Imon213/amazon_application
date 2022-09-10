import React, { useEffect, useState } from "react";
import style from "./Shop.module.css";
import fakeData from "../../fakeData/products.JSON";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => setProduct(data.slice(0, 10)));
  }, []);
  const EventHandaler = (element) => {
    const newCart = [...cart, element];
    setCart(newCart);
    console.log(cart);
  };

  
  return (
    <div className={style.shop_container}>
      <div className={style.product_container}>
        {product.map((item) => (
          <Product handaler={EventHandaler} item={item}></Product>
        ))}
      </div>
      <div className="cart_container">
       <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
