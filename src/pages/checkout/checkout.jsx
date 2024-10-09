import React from 'react'
import { PageLayout } from '../../components/layouts/page-layout'
import styles from './checkout.module.scss'
import CartProducts from './cart-product';
import CheckoutSummary from './checkout-summary'

const Checkout = () => {
  return (
    <>
          <PageLayout>

<div className='container my-5 py-5'>


          <table className={`${styles.table_container} table align-middle table-borderless`}>
  <thead>
    <tr>
      <td scope="col">Prodcut</td>
      <td scope="col">Price</td>
      <td scope="col">Quantity</td>
      <td scope="col">Subtotal</td>
    </tr>
  </thead>
  <tbody>
    <CartProducts></CartProducts>
    <CartProducts></CartProducts>
    
  </tbody>
</table>
<div className='d-flex justify-content-end'>
  <CheckoutSummary></CheckoutSummary>
</div>

</div>
          </PageLayout>

    
    
    </>
  )
}

export default Checkout;