import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { InitialPage } from "../pages/InitialPage/InitialPage";
import { SingleMoviePage } from "../pages/SingleMoviePage/SingleMoviePage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<InitialPage />} />
      <Route path="/movie/:id" element={<SingleMoviePage />} />
    </Routes>
  );
}