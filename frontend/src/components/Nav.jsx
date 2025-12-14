import { ChevronDown, Briefcase } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  // const [jobsOpen, setJobsOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white  w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-blue-500 rounded-lg w-9 h-9 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">
              Job<span className="text-blue-500">Paunxa</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition font-medium"
            >
              Home
            </Link>

            {/* Jobs Dropdown */}
            <div className="relative">
              <button
                // onClick={() => setJobsOpen(!jobsOpen)}
                className="flex items-center gap-1 text-white hover:text-gray-300 transition font-medium" 
              >
                <Link to="jobs">Jobs</Link>             {/*  <ChevronDown className="w-4 h-4" />*/}
              </button>

            {/*  {jobsOpen && (
                <div className="absolute top-full mt-2 bg-white text-gray-900 rounded-lg shadow-lg py-2 w-48 z-50">
                  <Link
                    to="/jobs"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Browse All Jobs
                  </Link>
                  /~<Link
                    to="/categories"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Categories
                  </Link>~/
                 /~ <Link
                    to="/featured-jobs"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Featured Jobs
                  </Link>
                  <Link
                    to="/remote-jobs"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Remote Jobs
                  </Link>~/
                /~  <Link
                    to="/register/employer"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Post job
                  </Link>
                  <Link
                    to="/Internships"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                   Internships
                  </Link>~/
                </div>
              )}*/}
            </div>

            <Link
              to="/post-events"
              className="text-white hover:text-gray-300 transition font-medium"
            >
              Post Event
            </Link>

            <Link
              to="/resources"
              className="text-white hover:text-gray-300 transition font-medium"
            >
              Resources
            </Link>

            <Link
              to="/login"
              className="text-white hover:text-gray-300 transition font-medium"
            >
              Login
            </Link>

            {/* Register Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRegisterOpen(!registerOpen)}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition font-medium"
              >
                Register
                <ChevronDown className="w-4 h-4" />
              </button>

              {registerOpen && (
                <div className="absolute top-full mt-2 bg-white text-gray-900 rounded-lg shadow-lg py-2 w-48 z-50 right-0">
                  <Link
                    to="/register/seeker"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    As Job Seeker
                  </Link>
                  <Link
                    to="/register/employer"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    As Employer
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
