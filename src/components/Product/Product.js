import React from 'react';
import style from './Product.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
   const {img,name,seller,price, stock} = props.item;
    return (
        
        <div className={style.product}>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className={style.product_name}>{name}</h4><br />
                <p>by: {seller} </p>
                <p>${price}</p>
                <p>Only {stock} left in the stock - order soon</p>
                <button onClick={()=>props.handaler(props.item)} className={style.add_to_cart_btn}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;