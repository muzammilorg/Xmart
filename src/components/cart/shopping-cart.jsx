import React from 'react'
import cartIcon from '../../assets/icons/cart-icon.svg'
import styles from './shopping-cart.module.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useShoppingCart from '../../hooks/use-shoppingcart'

export const ShoppingCart = () => {
    const { addToCart, decreaseProductFromCart, removeFromCart, getCartSingleProducts, getCartProductQuantity, getCartProducts, getCartCount, clearCart, } = useShoppingCart()

    const isLogin = useSelector(state => state.user.isLogin); 
    const navigate = useNavigate()
    const counter = getCartCount();
    return (

        <div className={styles.cart_icon}>
            {counter > 0 && <span className={`${styles.cart_product_quantity}`}>{counter}</span> }
            
            <img onClick={()=> isLogin ? navigate("checkout") : navigate("/auth/login")} src={cartIcon} alt="Cart Icon" />

        </div>)
}
