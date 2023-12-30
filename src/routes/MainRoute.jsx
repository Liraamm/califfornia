import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";
import AuthPage from "../pages/AuthPage";
import SecondaryLayout from "../layouts/SecondaryLayout";
import DetailPage from "../pages/DetailPage";
import EditPage from "../pages/EditPage";
import AddPage from "../pages/AddPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ConfirmationPage from "../pages/ConfirmationPage";

const MainRoute = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
      </Route>
      <Route element={<SecondaryLayout />}>
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
