import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function EventApplications() {
  const [activeTab, setActiveTab] = useState('all');
//   const [applications, setApplications] = useState([]);
  const [applications, setApplications] = useState([
    {
      id: 1,
      title: 'Tech Conference 2024',
      organizer: 'Tech Events Ltd',
      status: 'Pending',
      location: 'Kathmandu, Nepal',
      eventDate: '2024-12-20',
      appliedDate: '2024-12-10'
    }
  ]);

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: 'Pending' },
    { id: 'viewed', label: 'Viewed' },
    { id: 'shortlisted', label: 'Shortlisted' },
    { id: 'accepted', label: 'Accepted' },
    { id: 'attended', label: 'Attended' },
    { id: 'rejected', label: 'Rejected' },
    { id: 'withdrawn', label: 'Withdrawn' }
  ];

  const filteredApplications = applications.filter(app => {
    if (activeTab === 'all') return true;
    return app.status.toLowerCase() === activeTab;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Event Applications</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Dashboard</span>
            <span>›</span>
            <span className="text-gray-900">Event Applications</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <div className="flex gap-6 px-6 overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Event Title
                      <ChevronDown size={14} />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Organizer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Event Date
                      <ChevronDown size={14} />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      Applied Date
                      <ChevronDown size={14} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-6 py-16">
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mb-4">
                          <svg
                            width="120"
                            height="120"
                            viewBox="0 0 120 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="20"
                              y="30"
                              width="80"
                              height="60"
                              rx="4"
                              fill="#FEE2E2"
                              stroke="#EF4444"
                              strokeWidth="2"
                            />
                            <line
                              x1="35"
                              y1="50"
                              x2="85"
                              y2="50"
                              stroke="#EF4444"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <line
                              x1="35"
                              y1="60"
                              x2="70"
                              y2="60"
                              stroke="#EF4444"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <line
                              x1="35"
                              y1="70"
                              x2="65"
                              y2="70"
                              stroke="#EF4444"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <circle
                              cx="90"
                              cy="85"
                              r="18"
                              fill="#EF4444"
                            />
                            <path
                              d="M84 79L96 91M96 79L84 91"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                            <circle
                              cx="90"
                              cy="85"
                              r="5"
                              fill="white"
                            />
                            <line
                              x1="90"
                              y1="90"
                              x2="90"
                              y2="100"
                              stroke="#EF4444"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-500 font-medium">No Results</p>
                      </div>
                    </td>
                  </tr>
                )}
                {filteredApplications.map(app => (
                  <tr key={app.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{app.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{app.organizer}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        app.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        app.status === 'Viewed' ? 'bg-blue-100 text-blue-800' :
                        app.status === 'Shortlisted' ? 'bg-purple-100 text-purple-800' :
                        app.status === 'Accepted' ? 'bg-green-100 text-green-800' :
                        app.status === 'Attended' ? 'bg-green-100 text-green-800' :
                        app.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{app.location}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{app.eventDate}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{app.appliedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Help Widget */}
      <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3 max-w-xs z-50">
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
          IS
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Hi there, have a question?</p>
          <p className="text-xs text-gray-500">Text us here.</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
      </div>
    </div>
  );
}