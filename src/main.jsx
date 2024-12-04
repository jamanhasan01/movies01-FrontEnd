import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import MoviesProvider from "./provider/MoviesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MoviesProvider>
        <RouterProvider router={router}></RouterProvider>
      </MoviesProvider>
    </AuthProvider>
  </StrictMode>
);
