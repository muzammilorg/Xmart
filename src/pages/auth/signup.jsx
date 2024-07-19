import React from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import styles from './auth.module.scss'


export const SignupPage = () => {
  return (
    <>
    <AuthLayout>
      <div>
      <h2 className='auth_heading'>Create an Account</h2>
      <p className='auth_title mt-3'>Enter your details below</p>

        <form>

        </form>
      </div>

    </AuthLayout>

    </>
  )
}
