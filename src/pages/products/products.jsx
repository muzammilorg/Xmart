import React from 'react'
import { PageLayout } from '../../components/layouts/page-layout'
import styles from './products.module.scss'
import { SectionHeading } from '../../components/section-headings/section.heading'
import { ProductCard } from '../../components/card/product.card'
import dummyData from '../../services/dummy.product.data.json'


const Products = () => {
  return (
    <>
    <PageLayout>
    <div className={`${styles.our_product_section} container my-5 py-5`}>
          <SectionHeading title={"This Month"}>Best Selling Products</SectionHeading>
          <div className='d-flex flex-wrap justify-content-center justify-content-md-between mt-4'>
            {
              dummyData?.products?.slice(0, 8).map((item) => (
                <div key={item.id} className=' mt-5 d-flex justify-content-center'>
                  <ProductCard data={item}></ProductCard>
                </div>
              ))

            }
          </div>
          </div>



    </PageLayout>

    </>
  )
}


export default Products;