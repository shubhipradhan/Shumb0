import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getProductDetails } from "../../redux/actions/product.action";
import {addToCart} from "../../redux/actions/cart.actions";

const SingleItem = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
  
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;
  
    useEffect(() => {
      if (product && match.params.id !== product._id) {
        dispatch(getProductDetails(match.params.id));
      }
    }, [dispatch, match, product]);
  
    const addToCartHandler = () => {
      dispatch(addToCart(product._id, qty));
      history.push(`/cart`);
    };
  
    return (
      <div className="productscreen row">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className="productscreen__left col-lg-8 col-md-7 col-sm-12">
              <div className='row'>
              <div className="left__image col-lg-4 col-md-3 col-sm-12">
                <img src={product.imageUrl? (product.imageUrl).replace('./','/'):product.imageUrl} alt={product.name} />
              </div>
              <div className="left__info col-lg-8 col-md-9 col-sm-12">
                <p className="left__name">{product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
              </div>
              </div>
            </div>
            <div className="productscreen__right col-lg-4 col-md-5 col-sm-12">
              <div className="right__info">
                <p>
                  Price:
                  <span>${product.price}</span>
                </p>
                <p>
                  Status:
                  <span>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
                <p>
                  Qty
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </p>
                <p>
                  <button type="button" className="btn primary-btn" onClick={addToCartHandler}>
                    Add To Cart
                  </button>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default SingleItem;