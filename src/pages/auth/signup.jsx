import React, { useState } from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import styles from './auth.module.scss'
import { TextInput } from '../../components/inputs/text-input'
import { Link, useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../components/buttons/primary-button'
import { useDispatch } from 'react-redux'
import { Helpers } from '../../services/helpers'
import axios from 'axios'
import { addUser } from '../../redux/features/user.slice'
import { baseUrl } from '../../services/constant'


const SignupPage = () => {

  const [name , setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({name: '', email: '', password: ''})
  const [authError, setAuthError] = useState("")

  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const onSubmitSignup = async (e) => {
    e.preventDefault();

    let nameError, emailError, passwordError = "";

    if (!Helpers.validateEmail(email)) {
      emailError = "Invalid Email"
    }

    if (!Helpers.validatePassword(password)) {
      passwordError = "Password must be atleast 8 characters"
    }

    if (!Helpers.validateName(name)) {
      nameError = "Name must be atleast 3 characters"
    }

    if (emailError || passwordError || nameError) {
      setErrors({ name: nameError, email: emailError, password: passwordError })
    } else{
      setLoader(true)
      try {
        const payload = ({email, password, name})
        const response = await axios.post(baseUrl + "/users/signup", payload)
        
        console.log(response, 'Signup Response');
        dispatch(addUser(response?.data?.data))
        setErrors({email: '', password: '', name: ''})
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
          <h2 className='auth_heading'>Create an Account</h2>
          <p className='auth_title mt-3'>Enter your details below</p>

          <form className='mt-3'>
            <TextInput styles={{ marginTop: "10px"  }} value={name} onChange={setName} required err_msg={errors.name} placeholder="Name" type="text"   ></TextInput>
            <TextInput styles={{ marginTop: "10px" }} value={email} onChange={setEmail} required err_msg={errors.email} placeholder="Email" type="email"   ></TextInput>
            <TextInput styles={{ marginTop: "10px"}} value={password} onChange={setPassword} required err_msg={errors.password} placeholder="Password" type="password"   ></TextInput>
          
          <div className={styles.button_wrapper}>
          <PrimaryButton loading={loader ? true : false} disabled={loader ? true : false} onClick={onSubmitSignup}>Create Account</PrimaryButton>
            {authError && <div className='text-end text-danger'><small>{authError}</small></div>}
          </div>
          </form>

          <span>Already have an account? <Link className={styles.login_link} to={'/auth/login'}>Log in</Link></span>
        </div>

      </AuthLayout>

    </>
  )
}


export default SignupPage;