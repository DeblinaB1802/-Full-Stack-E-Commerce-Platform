import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./components/home/HomePage"
import NotFoundPage from "./components/ui/NotFoundPage"
import ProductPage from "./components/product/ProductPage"
import CartPage from "./components/cart/CartPage"
import CheckoutPage from "./components/checkout/CheckoutPage"
import LoginPage from "./components/user/LoginPage"
import UserProfilePage from "./components/user/UserProfilePage"
import PaymentStatusPage from "./components/payment/PaymentStatusPage"
import SignUpPage from "./components/user/SignUpPage"

const App = () => {

  

  
  return (
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="products/:slug" element={<ProductPage />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="checkout" element={<CheckoutPage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="signup" element={<SignUpPage />} />
    <Route path="profile" element={<UserProfilePage />} />
    <Route path="*" element={<NotFoundPage />} />
    <Route path="payment-status" element={<PaymentStatusPage />} />

    </Route>

   </Routes>
   
   </BrowserRouter>
  )
}

export default App
