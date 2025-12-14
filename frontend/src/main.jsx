import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./components/Login";
import RegisterJobSeeker from "./components/RegisterJobSeeker";
import Home from "./Layouts/Home";
import Dashboard from "./Layouts/Dashboard"; // Import Dashboard (the layout with sidebar)
import DashboardHome from "./components/DashboardHome"; // Import DashboardHome (stats view)
import Jobs from "./components/Jobs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterOrganization from "./components/RegisterOrganization";
import SearchContent from "./components/SearchContent";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import JobApplications from "./components/JobApplications";
import EventApplications from "./components/EventApplication";
import EmployerDashboard from "./components/EmployerDashboard";
import PostJobs from "./components/PostEvents";
import PostEvents from "./components/PostEvents";
import AdminLogin from "./components/AdminLogin";

// Create placeholder components for now
// const Profile = () => <div className="p-6"><h1 className="text-2xl font-bold">Profile - Coming Soon</h1></div>;
// const Settings = () => <div className="p-6"><h1 className="text-2xl font-bold">Settings - Coming Soon</h1></div>;
// const JobApplications = () => <div className="p-6"><h1 className="text-2xl font-bold">Job Applications - Coming Soon</h1></div>;
// const EventApplications = () => <div className="p-6"><h1 className="text-2xl font-bold">Event Applications - Coming Soon</h1></div>;
const Inbox = () => <div className="p-6"><h1 className="text-2xl font-bold">Inbox - Coming Soon</h1></div>;
const Bookmarks = () => <div className="p-6"><h1 className="text-2xl font-bold">Bookmarks - Coming Soon</h1></div>;
const Requests = () => <div className="p-6"><h1 className="text-2xl font-bold">Requests - Coming Soon</h1></div>;

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />, 
    children: [
      {
        index: true, 
        element: <SearchContent />
      },
      {
        path: "login", 
        element: <Login />,
      }, 
      {
        path: "register/employer", 
        element: <RegisterOrganization />
      },
      {
        path: "register/seeker", 
        element: <RegisterJobSeeker />
      },
      {
        path: "jobs", 
        element: <Jobs />
      },
      {
        path: "post-events", 
        element: <PostEvents />
      },
    ]
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />
      },
      {
        path: "search",
        element: <Jobs />
      },
      {
        path: "inbox",
        element: <Inbox />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "applications/job",
        element: <JobApplications />
      },
      {
        path: "applications/event",
        element: <EventApplications />
      },
      {
        path: "bookmarks",
        element: <Bookmarks />
      },
      {
        path: "requests",
        element: <Requests />
      },
      {
        path: "settings",
        element: <Settings />
      },

      
    ], 
    
  },
  {
    path: "/employer",
    element: (
      <ProtectedRoute>
        <EmployerDashboard />
      </ProtectedRoute>
    ),
  },

  {
    path: "/admin/login",
    element: (
        <AdminLogin />
    )
  }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </StrictMode>,
);