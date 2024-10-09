import React from 'react'
import styles from './shopping-cart.module.scss'
import { PiPlus } from "react-icons/pi";
import { PiMinus } from "react-icons/pi";




export const ProductCartCounter = ({qty,  onIncrement, onDecrement, small}) => {
  // console.log(small, "yes");
  

  return (
    <>
    <div className={`${styles.product_quantity_counter} ${small && styles.product_quantity_counter_small} d-flex align-items-center justify-content-between`}>
        <div className={`${styles.product_update_counter}  `} onClick={onDecrement}><PiMinus size={small ? 14 : 25} />



        </div>
        <div className={`${styles.counter_value} `}>{qty ?? 0}</div>
        <div className={`${styles.product_update_counter} `} onClick={onIncrement}><PiPlus size={small ? 14 : 25} />

        </div>
    </div>
    </>
  )
}
