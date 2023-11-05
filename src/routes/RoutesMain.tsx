import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { InitialPage } from "../pages/InitialPage/InitialPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<InitialPage />} />
    </Routes>
  );
}