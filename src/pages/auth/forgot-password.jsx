import React, { useState } from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import styles from './auth.module.scss'
import { TextInput } from '../../components/inputs/text-input'
import { PrimaryButton } from '../../components/buttons/primary-button'
import { Link, useNavigate } from 'react-router-dom'
import { Helpers } from '../../services/helpers'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addEmailForOtp, addUser } from '../../redux/features/user.slice'
import { baseUrl } from '../../services/constant'

const ForgotPasswordPage = () => {

    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({ email: '' })
    const [authError, setAuthError] = useState("")
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSendOTP = async (e) => {
        e.preventDefault();

        let emailError = "";

        if (!Helpers.validateEmail(email)) {
            emailError = "Invalid Email"
        }


        if (emailError) {
            setErrors({ email: emailError })

        } else {
            setLoader(true)
            try {
                const payload = ({ email })
                const response = await axios.post(baseUrl + "/users/forget-password", payload)

                if (response?.data?.status == "success") {

                    console.log(response, 'Login Response');
                    dispatch(addEmailForOtp(email))
                    setErrors({ email: '', password: '' })
                    navigate('/auth/verify-otp') 
                    alert(response?.data?.message)
                } else {
                    alert(response?.data?.message)

                }

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
                    <h2 className='auth_heading'>Forgot Passowrd</h2>
                    <p className='auth_title mt-3'>Enter your Email Address for OTP-Passcode</p>

                    <form className='mt-3'>
                        <TextInput styles={{}} required err_msg={errors.email} onChange={setEmail} value={email} placeholder="Email" type="email"   ></TextInput>

                        <div className={styles.button_wrapper}>
                            <PrimaryButton loading={loader ? true : false} disabled={loader ? true : false} onClick={handleSendOTP}>Send OTP</PrimaryButton>
                            {authError && <div className='text-end text-danger'><small>{authError}</small></div>}
                        </div>
                    </form>

                    <span>Dont have'nt Account? <Link className={styles.login_link} to={'/auth/signup'}>Sign up</Link></span>
                </div>

            </AuthLayout>

        </>

    )
}

export default ForgotPasswordPage;