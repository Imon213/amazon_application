import React from 'react';
import logo from '../../images/logo.png';
import style from './Header.module.css';
const Header = () => {
    return (
        <div className={style.header}>
           <img src={logo} alt="" />     
           <nav>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/manage">Manage Inventory</a>
           </nav>
        </div>
    );
};

export default Header;