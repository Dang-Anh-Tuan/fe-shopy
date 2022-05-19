import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import HomePage from "./HomePage/HomePage";
import Login from "./Login/Login";
import ProductDetailPage from "./ProductDetailPage";
import SignUp from "./SignIn/SignUp";

function UserPage() {
  return (
    <Routes>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default UserPage;
