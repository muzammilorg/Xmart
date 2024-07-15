import React from 'react'
import cartIcon from '../../assets/icons/cart-icon.svg'
import styles from './shopping-cart.module.scss'

export const ShoppingCart = () => {
    return (
        <div className={styles.cart_icon}>
            <img src={cartIcon} alt="Cart Icon" />

        </div>)
}
