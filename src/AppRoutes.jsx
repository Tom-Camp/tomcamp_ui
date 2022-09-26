import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Authentication } from "./services/ComponentType";

export const MAIN_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
};

export const AppRoutes = () => (
  <Routes>
    <Route path={MAIN_ROUTES.HOME} element={<App />}>
      <Route index element={<Home />} />
      <Route
        path={MAIN_ROUTES.LOGIN}
        element={<Authentication Component={Login} />}
      />
    </Route>
  </Routes>
);