import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductIntoCart, decreaseProductIntoCart, removeAllProduct, removeProductFromCart } from '../redux/features/cart.slice';
import { useNavigate } from 'react-router-dom';

const useShoppingCart = () => {
    const isLogin = useSelector(state => state.user.isLogin);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products) ?? [];

    function addToCart(p) {
        if (!isLogin) {
            navigate('/auth/signup');
            return;
          }
        if (!p) return;
        dispatch(addProductIntoCart(p))
    }

    function decreaseProductFromCart(p) {
        if (!p);
        dispatch(decreaseProductIntoCart(p))
    }

    function removeFromCart(p) {
        if (!p);
        dispatch(removeProductFromCart(p))
    }

    function clearCart(p) {
        if (!p);
        dispatch(removeAllProduct(p))
    }

    function getCartCount() {
        return products.reduce((acc, item) => acc+=item.quantity, 0);
    }

    function getCartProducts() {
        return products;
    }


    function getCartProductQuantity(id) {
        if (!id) return;
        return products.find(item => item.product_id === id)?.quantity ?? 0;
    }

    function getCartSingleProducts(id) {
        if (!id) return;
        return products.find(item => item.product_id === id)
    }


    return { addToCart, decreaseProductFromCart, removeFromCart, getCartSingleProducts, getCartProductQuantity, getCartProducts, getCartCount, clearCart, };
}

export default useShoppingCart;