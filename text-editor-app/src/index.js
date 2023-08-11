import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Login } from "@mui/icons-material";
import ErrorPage from "./pages/errors/ErrorPage";
import Register from "./pages/authentication/Register";
import VeiwAllDocuments from "./pages/ViewAllDocuments";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} errorElement={<ErrorPage />}>
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Home />} />
//         <Route path="/view-all-documents" element={<VeiwAllDocuments />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Route>
//     </Route>
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} />; */}
  </React.StrictMode>
);
