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

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//       <Route errorElement={<ErrorPage />}>
//         <Route index element={<Home />} />
//         <Route path="/view-all-documents" element={<VeiwAllDocuments />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Route>
//     </Route>
//   )
// );

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      {/* <RouterProvider router={router} />; */}
      {/* <Outlet /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route index path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view-all-documents" element={<ViewAllDocuments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
