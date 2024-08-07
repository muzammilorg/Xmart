import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Pagination, Navigation } from 'swiper/modules';
import { CategoryCard } from '../card/category.card';
import dummyData from '../../services/dummy.product.data.json'
import { ProductCard } from '../card/product.card';



export default function BestProductSlider() {
    return (
        <>
            <div className={styles.swiper_button_container}>
                <div className={styles.buttonLeft} id="swiper-button-prev"><FaArrowLeft /></div>
                <div className={styles.buttonRight} id="swiper-button-next"><FaArrowRight /></div>

            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}

                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 20 },
                  992: { slidesPerView: 3, spaceBetween: 30 },
                  1200: { slidesPerView: 4, spaceBetween: 30 },
                }} 

                navigation={{
                    prevEl: '#swiper-button-prev',
                    nextEl: '#swiper-button-next',
                }}

                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {dummyData?.products.map((item, key) => (
                    <SwiperSlide key={key} className='d-flex justify-content-center'>
                        <ProductCard data={item} />

                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
