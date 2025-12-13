import React, { useState } from 'react';
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
  ChevronDown
} from 'lucide-react';

const DashBoard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Search, label: 'Search Opportunities', path: '/search' },
    { icon: Inbox, label: 'Inbox', path: '/inbox' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  const applicationItems = [
    { icon: FileText, label: 'Job Applications', path: '/applications/job' },
    { icon: Calendar, label: 'Event Applications', path: '/applications/event' },
  ];

  const contactItems = [
    { icon: MessageSquare, label: 'Contact', path: '/contact' },
    { icon: History, label: 'History', path: '/history' },
  ];

  const bottomItems = [
    { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
    { icon: Send, label: 'Requests', path: '/requests' },
    { icon: Settings, label: 'Setting', path: '/settings' },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
            IS
          </div>
          <span className="font-semibold text-xl">InternSathi</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {/* Main Menu Items */}
        <div className="space-y-1 px-3">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
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
                <a
                  key={index}
                  href={item.path}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Menu Items */}
        <div className="mt-2 space-y-1 px-3">
          {bottomItems.slice(0, 2).map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </a>
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
                <a
                  key={index}
                  href={item.path}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="mt-2 px-3">
          <a
            href="/settings"
            className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Settings size={20} />
            <span>Setting</span>
          </a>
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

      {/* Main Content Area */}
      <div className="md:ml-64 min-h-screen bg-gray-50">
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Hey there, Sabin Dangol!</h1>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">0</div>
                    <div className="text-gray-600 mt-1">Applied</div>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="text-green-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">180</div>
                    <div className="text-gray-600 mt-1">Alerts</div>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Inbox className="text-yellow-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">0</div>
                    <div className="text-gray-600 mt-1">Rejected</div>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="text-red-600" size={24} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold">0</div>
                    <div className="text-gray-600 mt-1">Bookmarks</div>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bookmark className="text-blue-600" size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Internship Applied Recently</h2>
              <p className="text-gray-500">No recent applications</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;