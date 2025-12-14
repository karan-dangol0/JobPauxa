import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  Eye, 
  Calendar,
  TrendingUp,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit2,
  Trash2,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function EmployerDashboard() {
  const [activeView, setActiveView] = useState('overview');
  const [jobSearchQuery, setJobSearchQuery] = useState('');
  const [applicationSearchQuery, setApplicationSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showJobModal, setShowJobModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showHelpWidget, setShowHelpWidget] = useState(true);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [editingJob, setEditingJob] = useState(null);
  const [jobPostings, setJobPostings] = useState([
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Kathmandu, Nepal',
      applicants: 45,
      status: 'Active',
      postedDate: '2024-12-01',
      deadline: '2024-12-30',
      description: 'We are looking for an experienced frontend developer...',
      requirements: 'React, TypeScript, 5+ years experience',
      salary: 'NPR 80,000 - 120,000'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote',
      applicants: 32,
      status: 'Active',
      postedDate: '2024-12-05',
      deadline: '2024-12-25',
      description: 'Looking for a creative UI/UX designer...',
      requirements: 'Figma, Adobe XD, portfolio required',
      salary: 'NPR 60,000 - 90,000'
    },
    {
      id: 3,
      title: 'Marketing Intern',
      department: 'Marketing',
      type: 'Internship',
      location: 'Lalitpur, Nepal',
      applicants: 67,
      status: 'Active',
      postedDate: '2024-11-28',
      deadline: '2024-12-20',
      description: 'Great opportunity for marketing students...',
      requirements: 'Currently enrolled in university, social media knowledge',
      salary: 'NPR 15,000 - 20,000'
    }
  ]);
  const [applications, setApplications] = useState([
    {
      id: 1,
      candidateName: 'Rajesh Kumar',
      position: 'Senior Frontend Developer',
      appliedDate: '2024-12-13',
      status: 'Under Review',
      rating: 4.5,
      email: 'rajesh.kumar@email.com',
      phone: '+977 9841234567',
      experience: '5 years',
      education: 'Bachelor in Computer Science',
      skills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      resume: 'rajesh_kumar_resume.pdf'
    },
    {
      id: 2,
      candidateName: 'Sita Sharma',
      position: 'UI/UX Designer',
      appliedDate: '2024-12-13',
      status: 'Shortlisted',
      rating: 4.8,
      email: 'sita.sharma@email.com',
      phone: '+977 9851234567',
      experience: '3 years',
      education: 'Bachelor in Design',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping'],
      resume: 'sita_sharma_resume.pdf'
    },
    {
      id: 3,
      candidateName: 'Amit Thapa',
      position: 'Marketing Intern',
      appliedDate: '2024-12-12',
      status: 'Interview Scheduled',
      rating: 4.2,
      email: 'amit.thapa@email.com',
      phone: '+977 9861234567',
      experience: '1 year',
      education: 'Bachelor in Marketing (Ongoing)',
      skills: ['Social Media', 'Content Writing', 'SEO', 'Google Analytics'],
      resume: 'amit_thapa_resume.pdf'
    },
    {
      id: 4,
      candidateName: 'Priya Patel',
      position: 'Senior Frontend Developer',
      appliedDate: '2024-12-12',
      status: 'Under Review',
      rating: 4.6,
      email: 'priya.patel@email.com',
      phone: '+977 9871234567',
      experience: '6 years',
      education: 'Master in Computer Science',
      skills: ['Vue.js', 'React', 'JavaScript', 'CSS', 'GraphQL'],
      resume: 'priya_patel_resume.pdf'
    }
  ]);
  const [newJob, setNewJob] = useState({
    title: '',
    department: '',
    type: 'Full-time',
    location: '',
    description: '',
    requirements: '',
    salary: '',
    deadline: ''
  });

  // Calculate stats dynamically
  const stats = [
    { label: 'Active Jobs', value: jobPostings.filter(j => j.status === 'Active').length.toString(), icon: Briefcase, color: 'bg-blue-500' },
    { label: 'Total Applications', value: applications.length.toString(), icon: Users, color: 'bg-green-500' },
    { label: 'Views This Month', value: '1,847', icon: Eye, color: 'bg-purple-500' },
    { label: 'Interviews Scheduled', value: applications.filter(a => a.status === 'Interview Scheduled').length.toString(), icon: Calendar, color: 'bg-orange-500' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Shortlisted': return 'bg-blue-100 text-blue-800';
      case 'Interview Scheduled': return 'bg-purple-100 text-purple-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      case 'Accepted': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    
    if (!newJob.title || !newJob.department || !newJob.location || !newJob.deadline || !newJob.description || !newJob.requirements) {
    //   alert('Please fill in all required fields');
      toast.error("Please fill in all required fields", {id: 1});

      return;
    }
    
    const today = new Date().toISOString().split('T')[0];
    
    if (editingJob) {
      // Update existing job
      setJobPostings(jobPostings.map(job => 
        job.id === editingJob.id 
          ? { ...job, ...newJob }
          : job
      ));
      toast.success('Job updated successfully!', {id: 1});
    } else {
      // Create new job
      const newJobPosting = {
        id: Math.max(...jobPostings.map(j => j.id), 0) + 1,
        title: newJob.title,
        department: newJob.department,
        type: newJob.type,
        location: newJob.location,
        description: newJob.description,
        requirements: newJob.requirements,
        salary: newJob.salary,
        applicants: 0,
        status: 'Active',
        postedDate: today,
        deadline: newJob.deadline
      };
      
      setJobPostings([newJobPosting, ...jobPostings]);
    //   alert('Job posted successfully!');
      toast.success("Job posted successfully", {id: 1});
    }
    
    setActiveView('jobs');
    setNewJob({
      title: '',
      department: '',
      type: 'Full-time',
      location: '',
      description: '',
      requirements: '',
      salary: '',
      deadline: ''
    });
    setEditingJob(null);
    setShowJobModal(false);
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setNewJob({
      title: job.title,
      department: job.department,
      type: job.type,
      location: job.location,
      description: job.description || '',
      requirements: job.requirements || '',
      salary: job.salary || '',
      deadline: job.deadline
    });
    setShowJobModal(true);
  };

  const handleDeleteJob = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      setJobPostings(jobPostings.filter(job => job.id !== jobId));
      toast.success('Job deleted successfully!', {id:1});
    }
  };

  const handleViewProfile = (candidate) => {
    setSelectedCandidate(candidate);
    setShowProfileModal(true);
  };

  const handleUpdateApplicationStatus = (applicationId, newStatus) => {
    setApplications(applications.map(app =>
      app.id === applicationId ? { ...app, status: newStatus } : app
    ));
    alert(`Application ${newStatus.toLowerCase()}!`);
    if (showProfileModal) {
      setSelectedCandidate(prev => ({ ...prev, status: newStatus }));
    }
  };

  // Filter jobs based on search
  const filteredJobs = jobPostings.filter(job =>
    job.title.toLowerCase().includes(jobSearchQuery.toLowerCase()) ||
    job.department.toLowerCase().includes(jobSearchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(jobSearchQuery.toLowerCase())
  );

  // Filter applications based on search and status
  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.candidateName.toLowerCase().includes(applicationSearchQuery.toLowerCase()) ||
                         app.position.toLowerCase().includes(applicationSearchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Employer Dashboard</h1>
              <p className="text-gray-600">Manage your job postings and applications</p>
            </div>
            <button 
              onClick={() => {
                setEditingJob(null);
                setNewJob({
                  title: '',
                  department: '',
                  type: 'Full-time',
                  location: '',
                  description: '',
                  requirements: '',
                  salary: '',
                  deadline: ''
                });
                setShowJobModal(true);
              }}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              <Plus size={20} />
              Post New Job
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <TrendingUp className="text-green-500" size={20} />
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveView('overview')}
            className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
              activeView === 'overview'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveView('jobs')}
            className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
              activeView === 'jobs'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Job Postings
          </button>
          <button
            onClick={() => setActiveView('applications')}
            className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
              activeView === 'applications'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Applications
          </button>
        </div>

        {/* Overview View */}
        {activeView === 'overview' && (
          <div className="space-y-6">
            {/* Active Job Postings */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Active Job Postings</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {jobPostings.filter(j => j.status === 'Active').map(job => (
                    <div key={job.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{job.title}</h3>
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(job.status)}`}>
                            {job.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">{job.applicants}</p>
                          <p className="text-xs text-gray-600">Applicants</p>
                        </div>
                        <button 
                          onClick={() => handleEditJob(job)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          aria-label="Edit job"
                        >
                          <MoreVertical size={20} className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Recent Applications</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Candidate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applied Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.slice(0, 5).map(app => (
                      <tr key={app.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {app.candidateName.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="font-medium">{app.candidateName}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{app.position}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{app.appliedDate}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(app.status)}`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => handleViewProfile(app)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              aria-label="View profile"
                            >
                              <Eye size={18} />
                            </button>
                            <button 
                              onClick={() => handleUpdateApplicationStatus(app.id, 'Accepted')}
                              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                              aria-label="Accept application"
                            >
                              <CheckCircle size={18} />
                            </button>
                            <button 
                              onClick={() => handleUpdateApplicationStatus(app.id, 'Rejected')}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              aria-label="Reject application"
                            >
                              <XCircle size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Job Postings View */}
        {activeView === 'jobs' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">All Job Postings</h2>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={jobSearchQuery}
                      onChange={(e) => setJobSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applicants</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deadline</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs.map(job => (
                    <tr key={job.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{job.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{job.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{job.location}</td>
                      <td className="px-6 py-4">
                        <span className="text-blue-600 font-semibold">{job.applicants}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{job.deadline}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(job.status)}`}>
                          {job.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleEditJob(job)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            aria-label="Edit job"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button 
                            onClick={() => handleDeleteJob(job.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            aria-label="Delete job"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredJobs.length === 0 && (
                    <tr>
                      <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                        No jobs found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Applications View */}
        {activeView === 'applications' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">All Applications</h2>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search candidates..."
                      value={applicationSearchQuery}
                      onChange={(e) => setApplicationSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="all">All Status</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Interview Scheduled">Interview Scheduled</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Candidate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Applied Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map(app => (
                    <tr key={app.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                            {app.candidateName.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium">{app.candidateName}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{app.position}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{app.appliedDate}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(app.status)}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span className="font-semibold">{app.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleViewProfile(app)}
                            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                          >
                            View Profile
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredApplications.length === 0 && (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                        No applications found matching your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Help Widget
      {showHelpWidget && (
        <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3 max-w-xs z-50">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            IS
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">Hi there, have a question?</p>
            <p className="text-xs text-gray-500">Text us here.</p>
          </div>
          <button 
            onClick={() => setShowHelpWidget(false)}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
            aria-label="Close help widget"
          >
            ×
          </button>
        </div>
      )} */}

      {/* Post Job Modal */}
      {showJobModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowJobModal(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-5 py-3 flex items-center justify-between">
              <h2 className="text-lg font-bold">{editingJob ? 'Edit Job' : 'Post New Job'}</h2>
              <button
                onClick={() => setShowJobModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmitJob} className="p-5">
              <div className="space-y-3">
                {/* Job Title */}
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Job Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newJob.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Frontend Developer"
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Department and Type */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Department<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={newJob.department}
                      onChange={handleInputChange}
                      placeholder="Engineering"
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Type<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="type"
                      value={newJob.type}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                </div>

                {/* Location and Deadline */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Location<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={newJob.location}
                      onChange={handleInputChange}
                      placeholder="Kathmandu"
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">
                      Deadline<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={newJob.deadline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Salary */}
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={newJob.salary}
                    onChange={handleInputChange}
                    placeholder="NPR 50,000 - 80,000"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                {/* Job Description */}
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={newJob.description}
                    onChange={handleInputChange}
                    placeholder="Describe the role and responsibilities..."
                    required
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>

                {/* Requirements */}
                <div>
                  <label className="block text-xs font-medium mb-1">
                    Requirements<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="requirements"
                    value={newJob.requirements}
                    onChange={handleInputChange}
                    placeholder="List qualifications and skills..."
                    required
                    rows={3}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowJobModal(false)}
                  className="px-5 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  {editingJob ? 'Update Job' : 'Post Job'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Candidate Profile Modal */}
      {showProfileModal && selectedCandidate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowProfileModal(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-5 py-3 flex items-center justify-between">
              <h2 className="text-lg font-bold">Candidate Profile</h2>
              <button
                onClick={() => setShowProfileModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-5">
              {/* Header Section */}
              <div className="flex items-start gap-3 mb-5 pb-4 border-b border-gray-200">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {selectedCandidate.candidateName.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{selectedCandidate.candidateName}</h3>
                  <p className="text-sm text-gray-600 mb-2">{selectedCandidate.position}</p>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedCandidate.status)}`}>
                      {selectedCandidate.status}
                    </span>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{selectedCandidate.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-600">Email</p>
                    <p className="text-sm font-medium">{selectedCandidate.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Phone</p>
                    <p className="text-sm font-medium">{selectedCandidate.phone}</p>
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Professional Details</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-600">Experience</p>
                    <p className="text-sm font-medium">{selectedCandidate.experience}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Education</p>
                    <p className="text-sm font-medium">{selectedCandidate.education}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Applied Date</p>
                    <p className="text-sm font-medium">{selectedCandidate.appliedDate}</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCandidate.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resume */}
              <div className="mb-5">
                <h4 className="text-sm font-semibold mb-2">Resume</h4>
                <button className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => handleUpdateApplicationStatus(selectedCandidate.id, 'Accepted')}
                  className="w-full px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  Accept Application
                </button>
                <button 
                  onClick={() => handleUpdateApplicationStatus(selectedCandidate.id, 'Interview Scheduled')}
                  className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Schedule Interview
                </button>
                <button 
                  onClick={() => handleUpdateApplicationStatus(selectedCandidate.id, 'Rejected')}
                  className="w-full px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  Reject Application
                </button>
                <button 
                  onClick={() => setShowProfileModal(false)}
                  className="w-full px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}