import React from 'react'
import { PageLayout } from '../../components/layouts/page-layout';
import styles from './error-page.module.scss'
import {PrimaryButton} from '../../components/buttons/primary-button';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  
  const navigate = useNavigate()

  return (

    <>
    <PageLayout>
    <div className={`${styles.error_container}`}>
      <div className='container mt-4'>
      <p><span>Home / </span> 404 Page</p>
      </div>
      <div className={`${styles.error_content_section} mt-5 d-flex flex-column align-items-center justify-content-center`}>
    <h1>404 Not Found</h1>
    <p>Your visited page not found. You may go home page.</p>
    <div className={`${styles.home_navigation} `}>
      <PrimaryButton onClick={()=> navigate("/")}>Back to Home Page</PrimaryButton>
    </div>
      </div>

    </div>


    </PageLayout>
    </>
  )
}

export default ErrorPage;