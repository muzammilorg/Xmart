import {  Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Loader } from "../components/loader/loader";
import ErrorPage from "../pages/error/error-page";
// import ResetPassword from "../pages/auth/signup";
// import ForgotPasswordPage from "../pages/auth/forgot-password";
// import OtpVerify from "../pages/auth/otp-verify";
// import { HomePage } from "../pages/home/home";
// import { LoginPage } from "../pages/auth/login";
// import { SignupPage } from "../pages/auth/signup";
// import { Products } from "../pages/products/products";
// import { ProductInfoPage } from "../pages/product-info/product-info";
// import { Checkout } from "../pages/checkout/checkout";

const HomePage = lazy(() => import("../pages/home/home"))
const LoginPage = lazy(() => import("../pages/auth/login"))
const SignupPage = lazy(() => import("../pages/auth/signup"))
const ForgotPassword = lazy(() => import("../pages/auth/forgot-password"))
const OtpVerify = lazy(() => import("../pages/auth/otp-verify"))
const ResetPassword = lazy(() => import("../pages/auth/reset-password"))
const Products = lazy(() => import("../pages/products/products"))
const ProductInfoPage = lazy(() => import("../pages/product-info/product-info"))
const Checkout = lazy(() => import("../pages/checkout/checkout"))


export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<Loader></Loader>}><HomePage></HomePage></Suspense>
    },
    {
        path: '/auth/login',
        element: <Suspense fallback={<Loader></Loader>}><LoginPage></LoginPage></Suspense>
    },
    {
        path: '/auth/signup',
        element: <Suspense fallback={<Loader></Loader>}><SignupPage></SignupPage></Suspense>
    },
    {
        path: '/auth/forgot-password',
        element: <Suspense fallback={<Loader></Loader>}><ForgotPassword></ForgotPassword></Suspense>
    },
    {
        path: '/auth/verify-otp',
        element: <Suspense fallback={<Loader></Loader>}><OtpVerify></OtpVerify></Suspense>
    },
    {
        path: '/auth/reset-password',
        element: <Suspense fallback={<Loader></Loader>}><ResetPassword></ResetPassword></Suspense>
    },
    {
        path: '/products',
        element: <Suspense fallback={<Loader></Loader>}><Products></Products></Suspense>
    },
    {
        path: '/product-info',
        element: <Suspense fallback={<Loader></Loader>}><ProductInfoPage></ProductInfoPage></Suspense>
    },
    { path: '*', element: <ErrorPage></ErrorPage> }
])

export const privateRoutes = createBrowserRouter([
    {
        path: '/', element:
            <Suspense fallback={<Loader></Loader>}><HomePage></HomePage></Suspense>
    },
    {
        path: '/products', element:
            <Suspense fallback={<Loader></Loader>}><Products></Products></Suspense>
    },
    {
        path: '/product-info',
        element: <Suspense fallback={<Loader></Loader>}><ProductInfoPage></ProductInfoPage></Suspense>
    },
    {
        path: '/checkout',
        element: <Suspense fallback={<Loader></Loader>}><Checkout></Checkout></Suspense>
    },
    { path: '*', element: <ErrorPage></ErrorPage> }

])