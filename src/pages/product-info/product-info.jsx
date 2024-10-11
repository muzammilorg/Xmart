import React, { useEffect, useState } from 'react'
import styles from './product-info.module.scss'
import { PageLayout } from '../../components/layouts/page-layout'
import { SectionHeading } from '../../components/section-headings/section.heading'
import BestProductSlider from '../../components/slider/best.product.slider'
import { singleProduct } from '../../services/single-data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from 'react-simple-star-rating'
import { ProductColorVariant } from './product-color-variant'
import { PrimaryButton } from '../../components/buttons/primary-button'
import { ProductCartCounter } from '../../components/cart/product-cart-counter';
import deliveryIcon from '../../assets/icons/icon-delivery.svg';
import returnIcon from '../../assets/icons/icon-return.svg'
import { ProductShippingCard } from './product-shipping-card'
import ProductImagesSlider from '../../components/slider/product_images_slider'
import useShoppingCart from '../../hooks/use-shoppingcart'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Helpers } from '../../services/helpers'

const ProductInfoPage = () => {

    

    const [quantity, setQuantity] = useState(0)


    const [activeColor, setActiveColor] = useState(singleProduct.colors?.[0] ?? null)

    const { addToCart, decreaseProductFromCart, removeFromCart, getCartSingleProducts, getCartProductQuantity, getCartProducts, getCartCount, clearCart, } = useShoppingCart()

    useEffect(() => {
        const q = getCartProductQuantity(singleProduct.id);
        setQuantity(q)
    }, [getCartProductQuantity, addToCart, decreaseProductFromCart])

    

    return (
        <>
            <PageLayout>
                <section className='container my-4 py-4'>
                    <div className='row'>
                        <div className="col-lg-7">
                            <div className={styles.product_image_container}>
                                <figure>
                                    <img src={singleProduct.images?.[0]} alt="" />
                                </figure>

                                <div className={`${styles.product_images_slider} mt-lg-0  mt-3 `}>

                                    <ProductImagesSlider images={singleProduct.images}></ProductImagesSlider>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-lg-0  mt-5">
                            <div className={styles.product_content_container}>
                                <h1 className={`${styles.product_title} `}>{singleProduct.name}</h1>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div><Rating initialValue={singleProduct.rating} readonly={false} size={20} /></div>
                                    <span className={styles.in_stock}>In Stock</span>
                                </div>
                                <p className={`${styles.product_price}  mt-lg-0 mt-2`}>{Helpers.priceFormater(singleProduct.price)}</p>
                                <p className={styles.product_desc}>{singleProduct.description}</p>

                                <div className={`${styles.product_color_variant} d-flex gap-2 aling-items-center`}>
                                    <span className={styles.product_color_title}>Colors:</span>

                                    <div className='d-flex gap-2 align-items-center'>

                                        {activeColor && <ProductColorVariant colorsList={singleProduct.colors} activeColor={activeColor} onChangeColor={setActiveColor} ></ProductColorVariant>}                                        </div>
                                </div>

                                <div className={`${styles.product_buy_counter} d-flex gap-2 mt-5 align-items-center`}>
                                    <div>{quantity > 0 ? <ProductCartCounter qty={quantity} onIncrement={() => addToCart(singleProduct)} onDecrement={() => decreaseProductFromCart(singleProduct)}></ProductCartCounter>
                                        : <div><PrimaryButton onClick={() => addToCart(singleProduct)}>Add to Cart</PrimaryButton> </div>}
                                    </div>
                                    <div><PrimaryButton onClick={() => null}>Buy Now</PrimaryButton></div>
                                </div>

                                <div className={`${styles.product_shipping_card} d-flex flex-column my-5`}>


                                    <ProductShippingCard iconSrc={deliveryIcon} title={"Free Delivery"} desc={"Enter your postal code for Delivery Availablity"} ></ProductShippingCard>

                                    <ProductShippingCard iconSrc={returnIcon} title={"Return Delivery"} desc={"Free 30 Days Return Delivery"} ></ProductShippingCard>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>



                <div className={`${styles.best_product_section} container my-5 py-5`}>
                    <SectionHeading title={"Related Items"}>Explore More</SectionHeading>
                    <BestProductSlider></BestProductSlider>
                </div>


            </PageLayout>

        </>
    )
}


export default ProductInfoPage;