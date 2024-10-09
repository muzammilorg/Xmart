import React from 'react'
import styles from './home.module.scss'
import { PageLayout } from '../../components/layouts/page-layout'
import BannerSlider from '../../components/slider/banner.slider'
import banner1 from '../../assets/home-banner.png'
import banner2 from '../../assets/home-banner02.png'
import banner3 from '../../assets/home-banner03.png'
import { SectionHeading } from '../../components/section-headings/section.heading'
import CategorySlider from '../../components/slider/category.slider'
import BestProductSlider from '../../components/slider/best.product.slider'
import dummyData from '../../services/dummy.product.data.json'
import { ProductCard } from '../../components/card/product.card'
import { PrimaryButton } from '../../components/buttons/primary-button'
import { useNavigate } from 'react-router-dom'
import featureImg from '../../assets/product-images/feature.png'



const bannerImages = [
  banner1,
  banner2,
  banner3
]

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <>
      <PageLayout>


        <BannerSlider images={bannerImages}></BannerSlider>
        {/* categories */}
        <div className={`${styles.category_container} container my-5 pt-5`}>
          <SectionHeading title={"Browse By Category"}>Categories</SectionHeading>
          <CategorySlider></CategorySlider>

        </div>

        {/* best selling products */}
        <div className={`${styles.best_product_section} container my-5 py-5`}>
          <SectionHeading title={"Best Selling Products"}>This Month</SectionHeading>
          <BestProductSlider></BestProductSlider>
        </div>

        {/* our products */}
        <div className={`${styles.our_product_section} container my-5 py-5`}>
          <SectionHeading title={"Explore Our Products"}>Our Products</SectionHeading>
          <div className='d-flex flex-wrap justify-content-center justify-content-md-between mt-4'>
            {
              dummyData?.products?.slice(0, 8).map((item) => (
                <div key={item.id} className='mt-5'>
                  <ProductCard data={item}></ProductCard>
                </div>
              ))

            }
          </div>

            <div className='mt-5' style={{width: '200px', margin: 'auto'}}>
            <PrimaryButton loading={false} disabled={false} onClick={()=> {navigate("/products")}}>View All Products</PrimaryButton>

            </div>


        </div>

        {/* feature */}

        <div className='container my-5'>
          <img src={featureImg} width={"100%"} alt="" />
        </div>

      </PageLayout>

    </>
  )
}

export default HomePage;
