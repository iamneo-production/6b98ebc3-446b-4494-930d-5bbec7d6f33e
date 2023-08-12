import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/errors/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Navbar from "./components/Navbar";
import ViewAllDocuments from "./pages/ViewAllDocuments";
import ProtectedUser from "./routes/protectedRoutes/ProtectedUser";
import PublicUser from "./routes/protectedRoutes/PublicUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicUser />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/" element={<ProtectedUser />}>
        <Route errorElement={<ErrorPage />}>
          <Route path="home" element={<Home />} />
          <Route path="view-all-documents" element={<ViewAllDocuments />} />
        </Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <div className="app">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
