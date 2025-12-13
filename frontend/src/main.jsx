import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./components/Login";
import RegisterJobSeeker from "./components/RegisterJobSeeker";
import Home from "./Layouts/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RegisterEmployer from "./components/RegisterEmployer";
import RegisterOrganization from "./components/RegisterOrganization";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />, 
    children: [
      {
        path: "login", 
        element: <Login />,
      }, 
      {
        path: "register/employer", 
        // element: <RegisterEmployer />
        element: <RegisterOrganization />
      },
      {
        path: "register/seeker", 
        element: <RegisterJobSeeker />
      },
     
      
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} >
      <Toaster />
    </RouterProvider>
  </StrictMode>,
);
