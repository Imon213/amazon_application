import React from "react";
import style from "./Cart.module.css";
const Cart = (props) => {
  const cart = props.cart;
  const product_price = cart.reduce((total, item) => total + item.price, 0);
  let shipping = 0;
  if (product_price > 35) {
    shipping = 0;
  } else if (product_price > 15) {
    shipping = 4.22;
  } else if (product_price > 0) {
    shipping = 33.33;
  }
  const tax = product_price / 10;
  const total = (product_price + shipping + tax).toFixed(2);
  return (
    <div className={style.cart_container}>
      <h3>Order Summary</h3>
      <p>Items ordered {cart.length}</p>
      <div className={style.cart_item}>
        <div className={style.cart_title}>
          <span>Items: </span>
          <br />
          <span>Shipping & Handing: </span>
          <br />
          <span>Estimated Tax: </span>
          <br />
          <h2>Total Cost:</h2>
        </div>
        <div>
          <span> ${product_price}</span>
          <br />
          <span>${shipping}</span>
          <br />
          <span>${tax}</span><br />
          
          <h2>{total}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
