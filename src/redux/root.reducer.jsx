import { combineReducers } from "@reduxjs/toolkit";
import userReducer  from './features/user.slice';
import cartReducer from './features/cart.slice';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})

export default rootReducer; 