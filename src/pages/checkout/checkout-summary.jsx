import React from 'react'
import styles from './checkout.module.scss'
import { PrimaryButton } from '../../components/buttons/primary-button'

const CheckoutSummary = () => {
    return (

        <>
            <div className={` ${styles.checkout_summary}`}>
                <h4>Cart Total</h4>

                <div className={`${styles.card_details} d-flex justify-content-between border-bottom py-2`}>
                    <div>Subtotal:</div>
                    <div>$1750</div>
                </div>

                <div className={`${styles.card_details} d-flex justify-content-between border-bottom py-2`}>
                    <div>Pay by:</div>
                    <div>Card</div>
                </div>

                <div className={`${styles.card_details} d-flex justify-content-between py-2`}>
                    <div>Total</div>
                    <div>$1750</div>
                </div>

<div className='mt-5'>
    <PrimaryButton>Process to Checkout</PrimaryButton>
</div>

            </div>

        </>

    )
}



export default CheckoutSummary;