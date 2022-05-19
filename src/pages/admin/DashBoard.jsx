import React from "react";
import { Route, Routes } from "react-router-dom";
import FormBook from "./FormBook/FormBook";
import FormClothes from "./FormClothes/FormClothes";
import FormLaptop from "./FormLaptop/FormLaptop";
import FormMobile from "./FormMobile/FormMobile";
import ManageBook from "./ManageBook/ManageBook";
import ManageClothes from "./ManageClothes/ManageClothes";
import ManageLaptop from "./ManageLaptop/ManageLaptop";
import ManageMobile from "./ManageMobile/MangeMobile";

function DashBoard() {
  return (
    <Routes>
      <Route path="/admin/product/book" element={<ManageBook />} />
      <Route path="/admin/product/book/add" element={<FormBook />} />
      <Route path="/admin/product/book/edit/:id" element={<FormBook edit />} />
      <Route path="/admin/product/laptop" element={<ManageLaptop />} />
      <Route path="/admin/product/laptop/add" element={<FormLaptop />} />
      <Route
        path="/admin/product/laptop/edit/:id"
        element={<FormLaptop edit />}
      />
      <Route path="/admin/product/mobile" element={<ManageMobile />} />
      <Route path="/admin/product/mobile/add" element={<FormMobile />} />
      <Route
        path="/admin/product/mobile/edit/:id"
        element={<FormMobile edit />}
      />
      <Route path="/admin/product/clothes" element={<ManageClothes />} />
      <Route path="/admin/product/clothes/add" element={<FormClothes />} />
      <Route
        path="/admin/product/clothes/edit/:id"
        element={<FormClothes edit />}
      />
    </Routes>
  );
}

export default DashBoard;
