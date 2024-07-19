import React from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import styles from './auth.module.scss'
import { TextInput } from '../../components/inputs/text-input'
import { PrimaryButton } from '../../components/buttons/primary-button'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  return (
<>
<>
      <AuthLayout>
        <div>
          <h2 className='auth_heading'>Log in to Xmart</h2>
          <p className='auth_title mt-3'>Enter your details below</p>

          <form className='mt-3'>
            <TextInput styles={{ marginBottom: "20px" }} placeholder="Email" type="email"   ></TextInput>
            <TextInput styles={{ marginBottom: "5px" }} placeholder="Password" type="password"   ></TextInput>
            <small><Link className={styles.forget_link} to={'/auth/login'}>Forget Password</Link></small>
          
          <div className={styles.button_wrapper}>
          <PrimaryButton loading={false} disabled={false} onClick={()=>null}>Log In</PrimaryButton>

          </div>
          </form>

          <span>Dont have'nt Account? <Link className={styles.login_link} to={'/auth/signup'}>Sign up</Link></span>
        </div>

      </AuthLayout>

    </>
</>

  )
}
