import React from "react";
import { Routes, Route } from "react-router-dom";
import Bussiness from "../pages/Bussiness";
import Sidebar from "../../../components/sidebars/Sidebar";

const BussinessRoutes = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="" element={<Bussiness />} />
      </Routes>
    </>
  );
};

export default BussinessRoutes;
