import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import MoviesProvider from "./provider/MoviesProvider.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MoviesProvider>
        <RouterProvider router={router}></RouterProvider>
      </MoviesProvider>
    <ToastContainer position="top-center"/>
    </AuthProvider>
  </StrictMode>
);
