

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.scss'
import phoneIcon from '../../assets/category-icons/cellphone.png'
import cameraIcon from '../../assets/category-icons/camera.png'
import computerIcon from '../../assets/category-icons/computer.png'
import gamepadIcon from '../../assets/category-icons/gamepad.png'
import headphonesIcon from '../../assets/category-icons/headphones.png'
import smartwatchIcon from '../../assets/category-icons/smartwatch.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Pagination, Navigation } from 'swiper/modules';
import { CategoryCard } from '../card/category.card';

const categories = [
    { icon: phoneIcon, title: "Phones" },
    { icon: cameraIcon, title: "Camera" },
    { icon: computerIcon, title: "Computer" },
    { icon: headphonesIcon, title: "Headphones" },
    { icon: smartwatchIcon, title: "Smartwatch" },
    { icon: gamepadIcon, title: "Gamepad" },
    { icon: computerIcon, title: "Computer" },
    { icon: headphonesIcon, title: "Headphones" },
    { icon: smartwatchIcon, title: "Smartwatch" },
    { icon: gamepadIcon, title: "Gamepad" },

]


export default function CategorySlider() {
    return (
        <>
            <div className={styles.swiper_button_container}>
                <div className={styles.buttonLeft} id="swiper-button-prev"><FaArrowLeft /></div>
                <div className={styles.buttonRight} id="swiper-button-next"><FaArrowRight /></div>

            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={5}

                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 28,
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}

                navigation={{
                    prevEl: '#swiper-button-prev',
                    nextEl: '#swiper-button-next',
                }}

                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {categories?.map((item, key) => (
                    <SwiperSlide key={key} className='d-flex justify-content-center'>
                        <CategoryCard icon={item.icon} title={item.title} />

                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
