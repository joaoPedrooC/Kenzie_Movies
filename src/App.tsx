import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import "react-toastify/dist/ReactToastify.css";
import './styles/index.scss';
import { useEffect } from "react";
import { useUserStore } from "./stores/useUserStore";

export const App = () => {
  const autoLogin = useUserStore(store => store.verifyUserLogged);

  useEffect(() => {
    autoLogin();
  }, [])
  return (
    <div className="app">
      <RoutesMain />
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
    );
}