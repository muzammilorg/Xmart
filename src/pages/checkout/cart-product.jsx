import React from 'react'
import styles from './checkout.module.scss'
import productImg from '../../assets/product-images/pc.svg'
import crossIcon from '../../assets/product-images/cancel-icon.svg'
import { ProductCartCounter } from '../../components/cart/product-cart-counter'

const CartProducts = () => {
  return (
    <>
      <tr className={styles.table_row}>
        <td>
          <div className={`${styles.product_cell}`}>

          <div className={`${styles.img_container} `}>
            <img src={crossIcon} className={`${styles.cross_icon}`} alt="crossIcon" />
            <img src={productImg} className={styles.product_img} alt="proImg" />
          </div>
          <p className='my-0 ps-2 '>LCD Monitor</p>
          </div>

        </td>
        <td>$650</td>
    <td><ProductCartCounter small></ProductCartCounter></td>
        <td>$650</td>
      </tr>

    </>
  )
}

export default CartProducts;