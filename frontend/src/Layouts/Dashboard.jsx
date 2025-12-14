import { useNavigate, Outlet } from "react-router-dom";
import { removeAccessToken } from "../utils/auth.js";
import toast from "react-hot-toast";
import { 
  LayoutDashboard, 
  Search, 
  Inbox, 
  User, 
  FileText, 
  Calendar,
  Bookmark, 
  Send, 
  MessageSquare,
  History,
  Settings,
  Menu,
  X,
  ChevronDown,
  LogOut
} from 'lucide-react';
import { useState } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleLogout = () => {
    removeAccessToken();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Search, label: 'Search Opportunities', path: '/dashboard/search' },
    { icon: Inbox, label: 'Inbox', path: '/dashboard/inbox' },
    { icon: User, label: 'Profile', path: '/dashboard/profile' },
  ];

  const applicationItems = [
    { icon: FileText, label: 'Job Applications', path: '/dashboard/applications/job' },
    { icon: Calendar, label: 'Event Applications', path: '/dashboard/applications/event' },
  ];

  const contactItems = [
    { icon: MessageSquare, label: 'Contact', path: '/dashboard/contact' },
    { icon: History, label: 'History', path: '/dashboard/history' },
  ];

  const bottomItems = [
    { icon: Bookmark, label: 'Bookmarks', path: '/dashboard/bookmarks' },
    { icon: Send, label: 'Requests', path: '/dashboard/requests' },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          
          {/* <span className="font-semibold text-xl">Job <span className="text-blue-500">Paunxa</span></span> */}
          <a class="flex items-center gap-2" href="/" data-discover="true"><div class="bg-blue-500 rounded-lg w-9 h-9 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase w-5 h-5 text-white" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg></div><span class="text-xl font-bold">Job<span class="text-blue-500">Paunxa</span></span></a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {/* Main Menu Items */}
        <div className="space-y-1 px-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors w-full text-left"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Application Dropdown */}
        <div className="mt-2 px-3">
          <button
            onClick={() => setIsApplicationOpen(!isApplicationOpen)}
            className="flex items-center justify-between w-full px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileText size={20} />
              <span>Application</span>
            </div>
            <ChevronDown 
              size={16} 
              className={`transition-transform ${isApplicationOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {isApplicationOpen && (
            <div className="mt-1 ml-6 space-y-1">
              {applicationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors w-full text-left"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Menu Items */}
        <div className="mt-2 space-y-1 px-3">
          {bottomItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors w-full text-left"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Contact Dropdown */}
        <div className="mt-2 px-3">
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            className="flex items-center justify-between w-full px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3">
              <MessageSquare size={20} />
              <span>Contact Us</span>
            </div>
            <ChevronDown 
              size={16} 
              className={`transition-transform ${isContactOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {isContactOpen && (
            <div className="mt-1 ml-6 space-y-1">
              {contactItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors w-full text-left"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Settings & Logout */}
        <div className="mt-2 px-3 space-y-1">
          <button
            onClick={() => {
              navigate("/dashboard/settings");
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors w-full text-left"
          >
            <Settings size={20} />
            <span>Setting</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full text-left"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 transition-transform duration-300
          w-64
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          <X size={20} />
        </button>

        <SidebarContent />
      </aside>

      {/* Main Content Area - Renders nested routes */}
      <div className="md:ml-64 min-h-screen bg-gray-50">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;