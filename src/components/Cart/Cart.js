import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import Cartitems from './CartItems';
import {addToCart,removeFromCart} from '../../redux/actions/cart.actions';

const Cart = ()=>{

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const [isshowCheckout, setCheckout] = useState(false);
  const [order,setOrder]=useState({});

    useEffect((
        
    ) => {}, []);
  
    const qtyChangeHandler = (id, qty) => {
      dispatch(addToCart(id, qty));
    };
  
    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
      setCheckout(false);
    };
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };
  
    const getCartSubTotal = () => {
      return cartItems
        .reduce((price, item) => price + item.price * item.qty, 0)
        .toFixed(2);
    };

    const handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

     const createOrder = (e) => {
        e.preventDefault();
        const order = {
          name: this.state.name,
          email: this.state.email,
          address: this.state.address,
          cartItems: cartItems,
        };
        setOrder(order);
      };
    return (
        <>
          <div className="cartscreen row">
            <div className="cartscreen__left col-lg-8 col-md-6 col-sm-12">
              <h2>Shopping Cart</h2>
    
              {cartItems.length === 0 ? (
                <div>
                  Your Cart Is Empty <Link to="/">Go Back</Link>
                </div>
              ) : (
                cartItems.map((item) => (
                  <Cartitems
                    key={item.product}
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeHandler={removeFromCartHandler}
                  />
                ))
              )}
            </div>
    
            <div className="cartscreen__right col-lg-4 col-md-6 col-sm-12">
              <div className="cartscreen__info">
                <p>Subtotal ({getCartCount()}) items</p>
                <p>${getCartSubTotal()}</p>
              </div>
              <div>
                <button className="btn primary-btn" onClick={()=>setCheckout(!isshowCheckout)}>Proceed To Checkout</button>
              </div>
            </div>
          </div>
       
          {isshowCheckout && (
              <div>
                  <h2>Checkout Form</h2>
                  <div className="cart">
                  <form onSubmit={(e)=>{createOrder()}}>
                    <ul className="form-container">
                      <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={(e)=>handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          onChange={(e)=>handleInput}
                        ></input>
                      </li>
                      <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          onChange={(e)=>handleInput}
                        ></input>
                      </li>
                      <li>
                        <button className="btn primary-btn" type="submit">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              </div>
          )} 
        </>
      );
};

export default Cart;

