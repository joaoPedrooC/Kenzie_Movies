import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import "react-toastify/dist/ReactToastify.css";
import './styles/index.scss';

export const App = () => {
  return (
    <div className="app">
      <RoutesMain />
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
    );
}