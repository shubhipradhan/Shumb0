import React from 'react';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';

import Product from './Product/Product';

import { getProducts as listProducts} from '../../redux/actions/product.action';
const Products = ()=>{
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const {products,loading,error} = getProducts;

    useEffect(()=>{
        dispatch(listProducts());
    },[dispatch]);

    return (
        <div className="products">
          <h2 className="products__title">Latest Products</h2>
          <div className="products__products row">
            {loading ? (
              <h2>Loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : (
                products.map((product) => (
                <Product
                  key={product._id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  productId={product._id}
                />
              ))
            )}
          </div>
        </div>
      );
};

export default Products;

