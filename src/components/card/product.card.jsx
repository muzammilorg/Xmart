import React from 'react'
import styles from './cards.module.scss'
import p1 from '../../assets/product-images/Frame-605.png'
import { FaCartPlus } from "react-icons/fa6";
import { Rating } from 'react-simple-star-rating'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




export const ProductCard = ({data}) => {
  const isLogin = useSelector(state => state.user.isLogin)
  const navigate = useNavigate() 



  return (
    <>
      <div className={`${styles.product_card_container} `}>
        <div className={styles.product_image_container}>
          <img src={data.images} alt="" />
        </div>
        <div className={styles.content_container}>
          <div className={styles.product_detail}>
            <div style={{width: '170px'}}><h6>{data.name}</h6></div>
            <p>{`Price $${data.price}`}</p>

            <Rating initialValue={`${data.rating}`} readonly={false} allowFraction={true} size={20} />
          </div>
          <div className={styles.cart_icon}>
            <FaCartPlus onClick={()=> (isLogin ? alert('Item added to cart successfully') : navigate("/auth/signup"))} />          
          </div>
        </div>
      </div>
    </>
  )
}
