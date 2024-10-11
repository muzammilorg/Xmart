import React from 'react'
import { PageLayout } from '../../components/layouts/page-layout'
import styles from './checkout.module.scss'
import CartProducts from './cart-product';
import CheckoutSummary from './checkout-summary'
import useShoppingCart from '../../hooks/use-shoppingcart';

const Checkout = () => {  

  const { addToCart, decreaseProductFromCart, removeFromCart, getCartSingleProducts, getCartProductQuantity, getCartProducts, getCartCount, clearCart, } = useShoppingCart();

  const cart_products = getCartProducts();



  return (
    <>
          <PageLayout>

<div className='container my-5 py-5'>


          <table className={`${styles.table_container} table align-middle table-borderless`}>
  <thead>
    <tr>
      <td scope="col"><strong>Prodcut</strong></td>
      <td scope="col"><strong>Price</strong></td>
      <td scope="col"><strong>Quantity</strong></td>
      <td scope="col"><strong>Subtotal</strong></td>
    </tr>
  </thead>
  <tbody>
    {cart_products && cart_products.length > 0 && 
    cart_products.map(item =>  <CartProducts key={item.product_id} data={item}></CartProducts>)
    }
  
    
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