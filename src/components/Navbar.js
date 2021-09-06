import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../../node_modules/bootstrap/dist/css/boostrap'
const Navbar = () => {

    const cart = useSelector((state)=>state.cart);
    const {cartItems} = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
      };
    
    return (
        <div className="container-fluid">
            
        <nav className="navbar">
            <div className="container">
            <div className="navbar__title">Shumb0</div>
            <ul className="navbar__links">
                <li className="navbar__link">
                    <Link to="/">
                        Products
                    </Link>
                </li>
                <li className="navbar__link">
                    <Link to="/cart">
                        Cart
                        <span className="cartlogo">
                            <img src="/images/shopping-cart.png" alt="cart logo" />
                        </span>
                        <span className="cartlogo__badge">{getCartCount()}</span>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
        
        </div>
    )
}

export default Navbar;