import React, { useEffect, useState } from 'react'
import { AuthLayout } from '../../components/layouts/auth-layout'
import styles from './auth.module.scss'
import { TextInput } from '../../components/inputs/text-input'
import { PrimaryButton } from '../../components/buttons/primary-button'
import { Link, useNavigate } from 'react-router-dom'
import { Helpers } from '../../services/helpers'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addEmailForOtp, addUser } from '../../redux/features/user.slice'
import { baseUrl } from '../../services/constant'
import OtpInput from 'react-otp-input';


const OtpVerify = () => {

    const [authError, setAuthError] = useState("")
    const [loader, setLoader] = useState(false)
    const [otp, setOtp] = useState('');
    const email = useSelector(state => state.user.email)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=> {
        if(!email){
            navigate("/auth/signup")
        }
    })


    const handleVerifyOTP = async (e) => {
        e.preventDefault();

        let otpError = "";

        if (otp.length < 6) {
            otpError = "Fill OTP Code"
        }


        if (otpError) {
            setAuthError(otpError)

        } else {
            setLoader(true)
            try {
                const payload = ({ email, otp })
                const response = await axios.post(baseUrl + "/users/verify-otp", payload)

                if (response?.data?.status == "success") {
                    setAuthError("")
                    alert(response?.data?.message)
                    navigate('/auth/reset-password') 
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
                    <h2 className='auth_heading'>Verify OTP</h2>
                    <p className='auth_title mt-3'>OTP-Passcode was sent to you via email</p>

                    <form className='mt-3'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            containerStyle={"container_otp"}
                            inputStyle={"otp_input"}
                            numInputs={6}
                            placeholder='000000'
                            renderSeparator={<span>&nbsp;</span>}
                            renderInput={(props) => <input {...props} />}
                        />
                        <div className={styles.button_wrapper}>
                            <PrimaryButton loading={loader ? true : false} disabled={loader ? true : false} onClick={handleVerifyOTP}>Verify</PrimaryButton>
                            {authError && <div className='text-end text-danger'><small>{authError}</small></div>}
                        </div>
                    </form>

                </div>

            </AuthLayout>

        </>

    )
}

export default OtpVerify;