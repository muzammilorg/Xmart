import React from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import styles from './auth.module.scss'
import { TextInput } from '../../components/inputs/text-input'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../../components/buttons/primary-button'


export const SignupPage = () => {

  const onSubmitSignup = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <AuthLayout>
        <div>
          <h2 className='auth_heading'>Create an Account</h2>
          <p className='auth_title mt-3'>Enter your details below</p>

          <form className='mt-3'>
            <TextInput styles={{ marginBottom: "20px" }} placeholder="Name" type="text"   ></TextInput>
            <TextInput styles={{ marginBottom: "20px" }} placeholder="Email" type="email"   ></TextInput>
            <TextInput styles={{ marginBottom: "20px" }} placeholder="Password" type="password"   ></TextInput>
          
          <div className={styles.button_wrapper}>
          <PrimaryButton loading={false} disabled={false} onClick={onSubmitSignup}>Create Account</PrimaryButton>

          </div>
          </form>

          <span>Already have an account? <Link className={styles.login_link} to={'/auth/login'}>Log in</Link></span>
        </div>

      </AuthLayout>

    </>
  )
}
