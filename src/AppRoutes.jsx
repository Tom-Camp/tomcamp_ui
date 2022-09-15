import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";

export const MAIN_ROUTES = {
  HOME: "/",
};

export const AppRoutes = () => (
  <Routes>
    <Route path={MAIN_ROUTES.HOME} element={<App />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);