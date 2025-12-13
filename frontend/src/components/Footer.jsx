import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function JobPaunxaFooter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              Job<span className="text-blue-500">Paunxa</span>
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Your trusted job portal connecting talented professionals with amazing opportunities across Nepal.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-sm">+977 01-1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="text-sm">info@jobpaunxa.com</span>
              </div>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Browse Jobs</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Job Categories</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Create Resume</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Job Alerts</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Career Resources</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Salary Guide</a>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Post a Job</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Browse Candidates</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Employer Dashboard</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Pricing Plans</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Recruitment Tips</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">Customer Support</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe to get the latest jobs and career tips.</p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-white text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © 2024 JobPaunxa. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-blue-500 transition">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-blue-500 transition">Terms of Service</a>
              <a href="#" className="text-sm hover:text-blue-500 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}