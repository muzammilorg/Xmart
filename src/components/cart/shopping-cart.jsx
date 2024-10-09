import React from 'react'
import cartIcon from '../../assets/icons/cart-icon.svg'
import styles from './shopping-cart.module.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const ShoppingCart = () => {

    const isLogin = useSelector(state => state.user.isLogin); 
    const navigate = useNavigate()
    return (
        <div className={styles.cart_icon}>
            <img onClick={()=> isLogin ? navigate("checkout") : navigate("/auth/login")} src={cartIcon} alt="Cart Icon" />

        </div>)
}
