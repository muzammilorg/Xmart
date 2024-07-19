import React from 'react'
import { PageLayout } from './page-layout'
import authBanner from '../../assets/auth-banner.png'
import styles from './layouts.module.scss';

export const AuthLayout = ({ children }) => {
    return (
        <>
            <PageLayout>
                <div className='container-fluid '>
                    <div className='row '>

                        <div className='col-6 m-0 p-0 d-lg-block d-none'>
                            <figure className={styles.auth_banner_image}>
                                <img src={authBanner} alt="" />
                            </figure>
                        </div>
                        <div className='col-lg-6 col-sm-8 col-11 mx-auto p-0 '>
                            <div className={styles.form_wrapper}>
                            {children}

                            </div>
                        </div>
                    </div>

                </div>
            </PageLayout>
        </>
    )
}
