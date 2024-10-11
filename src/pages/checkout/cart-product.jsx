import React from 'react'
import styles from './checkout.module.scss'
import productImg from '../../assets/product-images/pc.svg'
import crossIcon from '../../assets/product-images/cancel-icon.svg'
import { ProductCartCounter } from '../../components/cart/product-cart-counter'
import useShoppingCart from '../../hooks/use-shoppingcart'
import { Helpers } from '../../services/helpers'

const CartProducts = ({data}) => {
  const { addToCart, decreaseProductFromCart, removeFromCart, getCartSingleProducts, getCartProductQuantity, getCartProducts, getCartCount, clearCart, } = useShoppingCart();



  const totalPrice = data.product.price * data.quantity;

  return (
    <>
      <tr className={styles.table_row}>
        <td>
          <div className={`${styles.product_cell}`}>

          <div className={`${styles.img_container} `}>
            <img src={crossIcon} className={`${styles.cross_icon}`} onClick={()=> removeFromCart(data.product) } alt="crossIcon" />
            <img src={data.product.images} className={styles.product_img} alt="proImg" />
          </div>
          <p className='my-0 ps-2 '>{data.product.name}</p>
          </div>

        </td>
        <td>{Helpers.priceFormater(data.product.price)}</td>
    <td><ProductCartCounter small qty={data.quantity} onIncrement={() => addToCart(data?.product)} onDecrement={()=> decreaseProductFromCart(data?.product)}></ProductCartCounter></td>
        <td>{Helpers.priceFormater(totalPrice)}</td>
      </tr>

    </>
  )
}

export default CartProducts;