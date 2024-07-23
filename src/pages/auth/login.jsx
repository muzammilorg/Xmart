import React, { useState } from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import styles from './auth.module.scss'
import { TextInput } from '../../components/inputs/text-input'
import { PrimaryButton } from '../../components/buttons/primary-button'
import { Link, useNavigate } from 'react-router-dom'
import { Helpers } from '../../services/helpers'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/features/user.slice'

export const LoginPage = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [authError, setAuthError] = useState("")

  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const onSubmitLogin = async (e) => {
    e.preventDefault();

    let emailError, passwordError = "";

    if (!Helpers.validateEmail(email)) {
      emailError = "Invalid Email"
    }

    if (!Helpers.validatePassword(password)) {
      passwordError = "Password must be atleast 8 characters"
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError })

    } else {
      setLoader(true)
      try {
        const payload = ({ email, password })
        const response = await axios.post("https://dev-mart-server.vercel.app/api/user/login", payload)

        console.log(response, 'Login Response');
        dispatch(addUser(response?.data?.data))
        setErrors({ email: '', password: '' })
        navigate('/')
        setLoader(false)

      } catch (error) {
        console.log(error)
        setAuthError(error?.response?.data?.message)
        setLoader(false)

      }

    }


  }

  return (
    <>

      <AuthLayout>
        <div>
          <h2 className='auth_heading'>Log in to Xmart</h2>
          <p className='auth_title mt-3'>Enter your details below</p>

          <form className='mt-3'>
            <TextInput styles={{}} required err_msg={errors.email} onChange={setEmail} value={email} placeholder="Email" type="email"   ></TextInput>
            <TextInput styles={{ marginBottom: "5px", marginTop: '20px' }} err_msg={errors.password} required onChange={setPassword} value={password} placeholder="Password" type="password"   ></TextInput>
            <small><Link className={styles.forget_link} to={'/auth/login'}>Forget Password</Link></small>

            <div className={styles.button_wrapper}>
              <PrimaryButton loading={loader ? true : false} disabled={loader ? true : false} onClick={onSubmitLogin}>Log In</PrimaryButton>
              {authError && <div className='text-end text-danger'><small>{authError}</small></div>}
            </div>
          </form>

          <span>Dont have'nt Account? <Link className={styles.login_link} to={'/auth/signup'}>Sign up</Link></span>
        </div>

      </AuthLayout>

    </>

  )
}
