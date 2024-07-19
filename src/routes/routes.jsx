import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/auth/login";
import { SignupPage } from "../pages/auth/signup";


export const publicRoutes = createBrowserRouter([
    {path: '/', element: <HomePage></HomePage>},
    {path: '/auth/login', element: <LoginPage></LoginPage>},
    {path: '/auth/signup', element: <SignupPage></SignupPage>}
])