import { Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function SearchContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Opportunities');

  const categories = [
    'All Opportunities',
    'IT & Technology',
    'Banking & Finance',
    'Marketing',
    'Healthcare',
    'Education',
    'Sales',
    'Engineering',
    'Design'
  ];

  const popularSearches = [
    'Software Developer',
    'Data Analyst',
    'Digital Marketing',
    'Graphic Designer',
    'Business Development',
    'Content Writer'
  ];

  const handleSearch = () => {
    if (searchQuery) {
      alert(`Searching for: ${searchQuery} in ${selectedCategory}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white py-20 px-4 w-full ">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Text */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Discover thousands of job opportunities with all the information you need.
            <br />
            It's your future. Come find it.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-full shadow-2xl p-3 mb-16 max-w-5xl mx-auto flex items-center gap-3">
          <div className="flex-1 flex items-center gap-3 px-6">
            <Search className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Job title, keywords, or company"
              className="flex-1 py-4 text-gray-800 placeholder-gray-400 focus:outline-none text-lg"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-semibold transition transform hover:scale-105 text-lg"
          >
            Search Jobs
          </button>
        </div>

      </div>

      {/* Popular Searches - Black Theme Section */}
      <div className="bg-gray-950 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="text-gray-300 font-medium text-lg">Popular Searches:</span>
            {popularSearches.map((search, index) => (
              <button
                key={index}
                className="text-white hover:text-blue-400 transition underline decoration-1 text-lg"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}