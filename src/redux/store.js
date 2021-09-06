import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cart.reducer';
import {getProductsReducer, getProductDetailsReducer} from './reducers/productReducers';

const reducer = combineReducers({
    cart:cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer

});

const middleware = [thunk];

const  cartFromLocalStorage = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]
const INITIAL_STATE = {
    cart:{
        cartItems:cartFromLocalStorage
    }
}
const store = createStore(reducer,INITIAL_STATE,composeWithDevTools(applyMiddleware(...middleware)));

export default store;