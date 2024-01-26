import React from "react";
import { Routes, Route } from "react-router-dom";
import BussinessRoutes from "../features/bussiness/route/BussinessRoutes";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/business" element={<BussinessRoutes />} />
      </Routes>
    </>
  );
};

export default Router;
