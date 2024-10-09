import React from 'react'
import styles from  './product-info.module.scss'

export const ProductShippingCard = (props) => {
    return (
        <>
            <div className={`${styles.shipping_card}`}>
                <figure>
                    <img src={props.iconSrc} alt="return" />
                </figure>
                <div>
                    <h5>{props.title}</h5>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}
