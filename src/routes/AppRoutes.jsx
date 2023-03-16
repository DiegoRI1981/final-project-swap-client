import { Route, Routes } from "react-router-dom"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import HomePage from "../pages/HomePage/HomePage"
import NewProductPage from "../pages/NewProductPage/NewProductPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import ProductDetailsPage from "../pages/ProductDeatailsPage/ProductDetailsPage"
import PrivateRoute from "./PrivateRoute"
import EditProductPage from "../pages/EditProductPage/EditProductPage"
import EditUserPage from "../pages/EditUserPage/EditUserPage"
import ChatBoxPage from "../pages/ChatBoxPage/ChatBoxPage"
import ChatBoxListPage from '../pages/ChatBoxListPage/ChatBoxListPage'
import UserListPage from '../pages/UserListPage/UserListPage'
import EditUserForm from '../components/EditUserForm/EditUserForm'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/create" element={<NewProductPage />} />
            <Route path="/product-details/:product_id" element={<ProductDetailsPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/edit-product/:product_id" element={<EditProductPage />} />
            <Route path="/edit/:user_id" element={<EditUserPage />} />
            <Route path="/chat/:participant_id" element={<ChatBoxPage />} />
            <Route path="/chatlist" element={<ChatBoxListPage />} />

            <Route element={<PrivateRoute />}>
                <Route path="/profile/:user_id" element={<ProfilePage />} />
                <Route path="/allprofiles" element={<UserListPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<p>404</p>} />
        </Routes>
    )
}

export default AppRoutes