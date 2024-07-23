import React from 'react'
import styles from './home.module.scss'
import { PageLayout } from '../../components/layouts/page-layout'
import BannerSlider from '../../components/slider/banner.slider'
import banner1 from '../../assets/home-banner.png'
import banner2 from '../../assets/home-banner02.png'
import banner3 from '../../assets/home-banner03.png'
import { SectionHeading } from '../../components/section-headings/section.heading'
import CategorySlider from '../../components/slider/category.slider'
import { CategoryCard } from '../../components/card/category.card'



const bannerImages = [
  banner1,
  banner2,
  banner3
]
export const HomePage = () => {
  return (
    <>
      <PageLayout>


        <BannerSlider images={bannerImages}></BannerSlider>
        {/* categories */}
        <div className={`${styles.category_container} container my-5 pt-5` }>
          <SectionHeading title={"Browse By Category"}>Categories</SectionHeading>
          <CategorySlider></CategorySlider>

        </div>

        {/* best selling products */}
        <div className={`${styles.best_product_section} container my-5 py-5`}>
          <SectionHeading title={"Best Selling Products"}>This Month</SectionHeading>

        </div>

        {/* our products */}
        <div className={`${styles.our_product_section} container my-5 py-5`}>
          <SectionHeading title={"Explore Our Products"}>Our Products</SectionHeading>

        </div>

      </PageLayout>

    </>
  )
}
