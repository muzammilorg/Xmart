import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import styles from "./slider.module.scss";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BannerSlider({ images }) {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper banner_slider"
            >

                {images?.map((item, key) => (
                    <SwiperSlide key={key}>
                        <div className={styles.img_container}>
                            <img src={item} alt="item" />
                        </div>
                    </SwiperSlide>

                ))}



            </Swiper>
        </>
    );
}
