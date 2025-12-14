// import React, { useState } from 'react';
// import { 
//   User, 
//   GraduationCap, 
//   Briefcase, 
//   Award, 
//   Dumbbell,
//   Languages,
//   Mail,
//   MapPin,
//   Upload
// } from 'lucide-react';

// const Profile = () => {
//   const [activeTab, setActiveTab] = useState('about');
//   const [formData, setFormData] = useState({
//     firstName: 'Sabin',
//     lastName: 'Dangol',
//     gender: 'Male',
//     dateOfBirth: '10/13/2004',
//     designation: 'Intern',
//     sector: 'Software development',
//     aboutMe: 'Hello, my name is Sabin Dangol. I am a BCA student and currently learning the MERN stack to build real-world web applications.',
//     province: 'Bagmati',
//     city: 'Kathmandu',
//     postalCode: '44600',
//     currentAddress: 'Tokha,kathmandu'
//   });

//   const tabs = [
//     { id: 'about', label: 'About', icon: User },
//     { id: 'education', label: 'Education', icon: GraduationCap },
//     { id: 'projects', label: 'Projects', icon: Briefcase },
//     { id: 'experience', label: 'Experience', icon: Briefcase },
//     { id: 'skills', label: 'Skills', icon: Award },
//     { id: 'achievement', label: 'Achievement', icon: Award },
//     { id: 'training', label: 'Training', icon: Dumbbell },
//     { id: 'language', label: 'Language', icon: Languages },
//     { id: 'contact', label: 'Email and Phone', icon: Mail }
//   ];

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSave = () => {
//     console.log('Saving profile data:', formData);
//     // Add your save logic here
//   };

//   const renderAboutTab = () => (
//     <div className="space-y-6">
//       <div>
//         <h2 className="text-lg font-semibold mb-2">About yourself</h2>
//         <p className="text-sm text-gray-500 mb-4">Fill out your primary information.</p>
        
//         <div className="flex items-center gap-4 mb-6">
//           <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
//             <User size={32} className="text-gray-400" />
//           </div>
//           <button className="flex items-center gap-2 text-red-500 text-sm font-medium hover:text-red-600">
//             <Upload size={16} />
//             Upload Profile Picture
//           </button>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">First Name*</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Last Name*</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Gender*</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Date Of Birth*</label>
//             <input
//               type="text"
//               name="dateOfBirth"
//               value={formData.dateOfBirth}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Sector*</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 name="sector"
//                 value={formData.sector}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//               />
//               <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
//                 ×
//               </button>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Designation*</label>
//             <input
//               type="text"
//               name="designation"
//               value={formData.designation}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">About Me *</label>
//           <div className="border border-gray-300 rounded-lg">
//             <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200 bg-gray-50">
//               <select className="text-sm border-none focus:outline-none bg-transparent">
//                 <option>Normal</option>
//               </select>
//               <div className="flex gap-1">
//                 <button className="p-1 hover:bg-gray-200 rounded"><strong>B</strong></button>
//                 <button className="p-1 hover:bg-gray-200 rounded"><em>I</em></button>
//                 <button className="p-1 hover:bg-gray-200 rounded"><u>U</u></button>
//                 <button className="p-1 hover:bg-gray-200 rounded">⊕</button>
//                 <button className="p-1 hover:bg-gray-200 rounded">≡</button>
//                 <button className="p-1 hover:bg-gray-200 rounded">≣</button>
//                 <button className="p-1 hover:bg-gray-200 rounded">🔗</button>
//                 <button className="p-1 hover:bg-gray-200 rounded">📷</button>
//                 <button className="p-1 hover:bg-gray-200 rounded">≡</button>
//                 <button className="p-1 hover:bg-gray-200 rounded">A</button>
//                 <button className="p-1 hover:bg-gray-200 rounded">↩</button>
//                 <button className="p-1 hover:bg-gray-200 rounded">⌨</button>
//               </div>
//             </div>
//             <textarea
//               name="aboutMe"
//               value={formData.aboutMe}
//               onChange={handleInputChange}
//               rows="6"
//               className="w-full px-3 py-2 focus:outline-none resize-none"
//             />
//           </div>
//         </div>
//       </div>

//       <div>
//         <h2 className="text-lg font-semibold mb-4">Address</h2>
        
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Province*</label>
//             <select
//               name="province"
//               value={formData.province}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               <option value="Bagmati">Bagmati</option>
//               <option value="Province 1">Province 1</option>
//               <option value="Madhesh">Madhesh</option>
//               <option value="Gandaki">Gandaki</option>
//               <option value="Lumbini">Lumbini</option>
//               <option value="Karnali">Karnali</option>
//               <option value="Sudurpashchim">Sudurpashchim</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">City*</label>
//             <select
//               name="city"
//               value={formData.city}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               <option value="Kathmandu">Kathmandu</option>
//               <option value="Lalitpur">Lalitpur</option>
//               <option value="Bhaktapur">Bhaktapur</option>
//             </select>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Postal Code</label>
//           <input
//             type="text"
//             name="postalCode"
//             value={formData.postalCode}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Current Address*</label>
//           <input
//             type="text"
//             name="currentAddress"
//             value={formData.currentAddress}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
//           />
//         </div>
//       </div>

//       <div className="flex justify-end">
//         <button
//           onClick={handleSave}
//           className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );

//   const renderPlaceholderTab = (tabName) => (
//     <div className="text-center py-12">
//       <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//         <Award size={32} className="text-gray-400" />
//       </div>
//       <h3 className="text-lg font-semibold text-gray-700 mb-2">No {tabName} Added</h3>
//       <p className="text-gray-500 mb-4">Add your {tabName.toLowerCase()} information</p>
//       <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
//         Add {tabName}
//       </button>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        
//         <div className="flex gap-6">
//           {/* Left Sidebar - Tabs */}
//           <div className="w-64 bg-white rounded-lg shadow-sm p-4">
//             <nav className="space-y-1">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
//                     activeTab === tab.id
//                       ? 'bg-red-50 text-red-600'
//                       : 'text-gray-600 hover:bg-gray-50'
//                   }`}
//                 >
//                   <tab.icon size={18} />
//                   <span className="text-sm font-medium">{tab.label}</span>
//                 </button>
//               ))}
//             </nav>
//           </div>

//           {/* Right Content Area */}
//           <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
//             {activeTab === 'about' && renderAboutTab()}
//             {activeTab === 'education' && renderPlaceholderTab('Education')}
//             {activeTab === 'projects' && renderPlaceholderTab('Projects')}
//             {activeTab === 'experience' && renderPlaceholderTab('Experience')}
//             {activeTab === 'skills' && renderPlaceholderTab('Skills')}
//             {activeTab === 'achievement' && renderPlaceholderTab('Achievement')}
//             {activeTab === 'training' && renderPlaceholderTab('Training')}
//             {activeTab === 'language' && renderPlaceholderTab('Language')}
//             {activeTab === 'contact' && renderPlaceholderTab('Contact Information')}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Dumbbell,
  Languages,
  Mail,
  Upload,
  ChevronUp,
  ChevronDown,
  Trash2,
  Plus,
  X
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [expandedSections, setExpandedSections] = useState({});
  
  // Form states for different tabs
  const [aboutForm, setAboutForm] = useState({
    firstName: 'Sabin',
    lastName: 'Dangol',
    gender: 'Male',
    dateOfBirth: '10/13/2004',
    designation: 'Intern',
    sector: 'Software development',
    aboutMe: 'Hello, my name is Sabin Dangol. I am a BCA student and currently learning the MERN stack to build real-world web applications.',
    province: 'Bagmati',
    city: 'Kathmandu',
    postalCode: '44600',
    currentAddress: 'Tokha,kathmandu'
  });

  const [education, setEducation] = useState([
    {
      id: 1,
      schoolType: 'School (SLC, SEE, 1-10, +2, A Levels)',
      school: 'Southwestern state college',
      degree: 'Bachelor in computer applications (bca)',
      city: 'Kathmandu',
      startDate: '11/01/2023',
      currentlyStudy: true,
      expanded: true
    }
  ]);

  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState(['Figma', 'Mean/mern stack']);
  const [achievements, setAchievements] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [languages, setLanguages] = useState([
    { language: 'Nepali, english, hindi, maithili', proficiency: 'Fluent' }
  ]);
  const [contactInfo, setContactInfo] = useState({
    email: 'impsabin@gmail.com',
    phone: ''
  });

  const [newSkill, setNewSkill] = useState('');

  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'achievement', label: 'Achievement', icon: Award },
    { id: 'training', label: 'Training', icon: Dumbbell },
    { id: 'language', label: 'Language', icon: Languages },
    { id: 'contact', label: 'Email and Phone', icon: Mail }
  ];

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSave = () => {
    console.log('Saving profile data');
  };

  const RichTextEditor = ({ value, onChange, placeholder }) => (
    <div className="border border-gray-300 rounded-lg">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-200 bg-gray-50 flex-wrap">
        <select className="text-sm border-none focus:outline-none bg-transparent">
          <option>Normal</option>
        </select>
        <div className="flex gap-1">
          <button className="p-1 hover:bg-gray-200 rounded" type="button"><strong>B</strong></button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button"><em>I</em></button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button"><u>U</u></button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">S</button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">"</button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">•</button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">1.</button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">🔗</button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">📷</button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">≡</button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">A</button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">&lt;/&gt;</button>
          <button className="p-1 hover:bg-gray-200 rounded" type="button">↩</button>
        </div>
      </div>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="6"
        className="w-full px-3 py-2 focus:outline-none resize-none text-sm"
      />
    </div>
  );

  const renderAboutTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-2">About yourself</h2>
        <p className="text-sm text-gray-500 mb-4">Fill out your primary information.</p>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={32} className="text-gray-400" />
          </div>
          <button className="flex items-center gap-2 text-red-500 text-sm font-medium hover:text-red-600">
            <Upload size={16} />
            Upload Profile Picture
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name*</label>
            <input
              type="text"
              value={aboutForm.firstName}
              onChange={(e) => setAboutForm({...aboutForm, firstName: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name*</label>
            <input
              type="text"
              value={aboutForm.lastName}
              onChange={(e) => setAboutForm({...aboutForm, lastName: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Gender*</label>
            <select
              value={aboutForm.gender}
              onChange={(e) => setAboutForm({...aboutForm, gender: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date Of Birth*</label>
            <input
              type="text"
              value={aboutForm.dateOfBirth}
              onChange={(e) => setAboutForm({...aboutForm, dateOfBirth: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Sector*</label>
            <div className="relative">
              <input
                type="text"
                value={aboutForm.sector}
                onChange={(e) => setAboutForm({...aboutForm, sector: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">×</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Designation*</label>
            <input
              type="text"
              value={aboutForm.designation}
              onChange={(e) => setAboutForm({...aboutForm, designation: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">About Me *</label>
          <RichTextEditor
            value={aboutForm.aboutMe}
            onChange={(e) => setAboutForm({...aboutForm, aboutMe: e.target.value})}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Address</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Province*</label>
            <select
              value={aboutForm.province}
              onChange={(e) => setAboutForm({...aboutForm, province: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            >
              <option value="Bagmati">Bagmati</option>
              <option value="Province 1">Province 1</option>
              <option value="Madhesh">Madhesh</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">City*</label>
            <select
              value={aboutForm.city}
              onChange={(e) => setAboutForm({...aboutForm, city: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
            >
              <option value="Kathmandu">Kathmandu</option>
              <option value="Lalitpur">Lalitpur</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Postal Code</label>
          <input
            type="text"
            value={aboutForm.postalCode}
            onChange={(e) => setAboutForm({...aboutForm, postalCode: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Current Address*</label>
          <input
            type="text"
            value={aboutForm.currentAddress}
            onChange={(e) => setAboutForm({...aboutForm, currentAddress: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm"
        >
          Save
        </button>
      </div>
    </div>
  );

  const renderEducationTab = () => (
    <div>
      <h2 className="text-lg font-semibold mb-1">Education</h2>
      <p className="text-sm text-gray-500 mb-6">Give a detailed look into your academic history.</p>
      
      {education.map((edu, index) => (
        <div key={edu.id} className="mb-4 border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between p-4 bg-gray-50">
            <div>
              <h3 className="font-semibold">{edu.school}</h3>
              <p className="text-sm text-gray-500">Nov 1, 2023 - Present</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => toggleSection(edu.id)} className="p-2 hover:bg-gray-200 rounded">
                {expandedSections[edu.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <button className="p-2 hover:bg-red-100 text-red-500 rounded">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
          
          {expandedSections[edu.id] !== false && (
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">School/College Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option>School (SLC, SEE, 1-10, +2, A Levels)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">School/College*</label>
                  <input
                    type="text"
                    value={edu.school}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Degree*</label>
                <input
                  type="text"
                  value={edu.degree}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">City*</label>
                <input
                  type="text"
                  value={edu.city}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Start Date*</label>
                <input
                  type="text"
                  value={edu.startDate}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={edu.currentlyStudy}
                  className="w-4 h-4 text-red-500"
                />
                <label className="text-sm text-gray-600">I Currently Study Here</label>
              </div>
            </div>
          )}
        </div>
      ))}

      <button className="flex items-center gap-2 text-red-500 hover:text-red-600 mb-4 text-sm font-medium">
        <Plus size={18} />
        Add Education
      </button>
    </div>
  );

  const renderProjectsTab = () => (
    <div>
      <h2 className="text-lg font-semibold mb-1">Personal/Academic Projects</h2>
      <p className="text-sm text-gray-500 mb-6">Include your personal and academic projects that showcases your skill.</p>
      
      <div className="border border-gray-200 rounded-lg p-4 space-y-4 mb-4">
        <h3 className="font-semibold">Title</h3>
        
        <div>
          <label className="block text-sm font-medium mb-1">Project Title / Designation - Company Name*</label>
          <input
            type="text"
            placeholder="eg. educational app"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date*</label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date*</label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 text-red-500" />
          <label className="text-sm text-gray-600">Currently Ongoing</label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description (Use bullet points for clarity)</label>
          <RichTextEditor
            value=""
            onChange={() => {}}
            placeholder="Mention briefly what sorts of noteworthy tasks you performed at this project. Feel free to add your major highlights/achievements as well."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Project Link (Optional)</label>
          <input
            type="text"
            placeholder="eg. https://www.project.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
      </div>

      <button className="flex items-center gap-2 text-red-500 hover:text-red-600 mb-4 text-sm font-medium">
        <Plus size={18} />
        Add Experience/project
      </button>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm">
          Save
        </button>
      </div>
    </div>
  );

  const renderExperienceTab = () => (
    <div>
      <h2 className="text-lg font-semibold mb-1">Work Experience</h2>
      <p className="text-sm text-gray-500 mb-6">Include your career history. Give a brief insight into the role you played and mention at least 3 to 5 responsibilities you carried out at each workplace.</p>
      
      <div className="border border-gray-200 rounded-lg p-4 space-y-4 mb-4">
        <h3 className="font-semibold">Title</h3>
        
        <div>
          <label className="block text-sm font-medium mb-1">Title / Designation*</label>
          <input
            type="text"
            placeholder="eg. Software Engineer"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <input
            type="text"
            placeholder="Search company.."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date*</label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date*</label>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 text-red-500" />
          <label className="text-sm text-gray-600">Currently Ongoing</label>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description (Use bullet points for clarity)</label>
          <RichTextEditor
            value=""
            onChange={() => {}}
            placeholder="Mention briefly what sorts of noteworthy tasks you performed at this project. Feel free to add your major highlights/achievements as well."
          />
        </div>
      </div>

      <button className="flex items-center gap-2 text-red-500 hover:text-red-600 mb-4 text-sm font-medium">
        <Plus size={18} />
        Add Experience
      </button>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm">
          Save
        </button>
      </div>
    </div>
  );

  const renderSkillsTab = () => (
    <div>
      <h2 className="text-lg font-semibold mb-1">Skills</h2>
      <p className="text-sm text-gray-500 mb-6">Only list relevant skills. E.g. communication, computer, leadership, organizational or problem-solving skills.</p>
      
      <div>
        <label className="block text-sm font-medium mb-2">Skills</label>
        <div className="border border-gray-300 rounded-lg p-3 min-h-[50px] flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {skill}
              <button
                onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                className="hover:text-red-500"
              >
                <X size={14} />
              </button>
            </span>
          ))}
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && newSkill.trim()) {
                setSkills([...skills, newSkill.trim()]);
                setNewSkill('');
              }
            }}
            placeholder="Type and press Enter"
            className="flex-1 min-w-[200px] outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm">
          Save
        </button>
      </div>
    </div>
  );

  const renderAchievementTab = () => (
    <div>
      <h2 className="text-lg font-semibold mb-1">Achievements</h2>
      <p className="text-sm text-gray-500 mb-6">Add your most notable works and accomplishments to create a stronger persona.</p>
      
      <div className="border border-gray-200 rounded-lg p-4 space-y-4 mb-4">
        <h3 className="font-semibold">Ea aspernatur sunt</h3>
        
        <div>
          <label className="block text-sm font-medium mb-1">Title*</label>
          <input
            type="text"
            value="Ea aspernatur sunt"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description (Optional)</label>
          <RichTextEditor
            value="Aliqua. Sit, nisi vo"
            onChange={() => {}}
          />
        </div>
      </div>

      <button className="flex items-center gap-2 text-red-500 hover:text-red-600 mb-4 text-sm font-medium">
        <Plus size={18} />
        Add Achievement
      </button>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm">
          Save
        </button>
      </div>
    </div>
  );

  const renderTrainingTab = () => (
    <div>
      <h2 className="text-lg font-semibold mb-1">Training / Certification</h2>
      <p className="text-sm text-gray-500 mb-6">Include your training history. Give a brief insight about the training or certification that you received.</p>
      
      <div className="border border-gray-200 rounded-lg p-4 space-y-4 mb-4">
        <h3 className="font-semibold">Certification Title</h3>
        
        <div>
          <label className="block text-sm font-medium mb-1">Training/Certification Title*</label>
          <input
            type="text"
            placeholder="eg. Microsoft office package training"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Training Institute</label>
          <input
            type="text"
            placeholder="Search inisititute.."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Completion Date*</label>
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <RichTextEditor
            value=""
            onChange={() => {}}
            placeholder="Mention briefly what sorts of noteworthy tasks you performed during this training/certification."
          />
        </div>
      </div>

      <button className="flex items-center gap-2 text-red-500 hover:text-red-600 mb-4 text-sm font-medium">
        <Plus size={18} />
        Add Certification
      </button>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm">
          Save
        </button>
      </div>
    </div>
  );

  const renderLanguageTab = () => (
    <div>
      <h2 className="text-lg font-semibold mb-1">Language</h2>
      <p className="text-sm text-gray-500 mb-6">List a language if you speak more than one.</p>
      
      {languages.map((lang, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Nepali, English, Hindi, Maithili</h3>
              <p className="text-sm text-gray-500 uppercase">FLUENT</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded">
                <ChevronUp size={20} />
              </button>
              <button className="p-2 hover:bg-red-100 text-red-500 rounded">
                <Trash2 size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Language*</label>
              <input
                type="text"
                value={lang.language}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Language Proficiency*</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option value="Fluent">Fluent</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Basic">Basic</option>
              </select>
            </div>
          </div>
        </div>
      ))}

      <button className="flex items-center gap-2 text-red-500 hover:text-red-600 mb-4 text-sm font-medium">
        <Plus size={18} />
        Add Language
      </button>

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm">
          Save
        </button>
      </div>
    </div>
  );

  const renderContactTab = () => (
    <div>
      <h2 className="text-lg font-semibold mb-1">Email and Phone</h2>
      <p className="text-sm text-gray-500 mb-6">Update and verify your Email and Phone</p>
      
      <div className="space-y-4">
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Email Address*</label>
            <input
              type="email"
              value={contactInfo.email}
              onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm">
            Save
          </button>
        </div>

        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Phone Number*</label>
            <input
              type="tel"
              placeholder="eg. 9810000000"
              value={contactInfo.phone}
              onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium text-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">My Profile</h1>
        
        <div className="flex gap-6">
          {/* Left Sidebar - Tabs */}
          <div className="w-56 bg-white rounded-lg shadow-sm p-3 h-fit">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            {activeTab === 'about' && renderAboutTab()}
            {activeTab === 'education' && renderEducationTab()}
            {activeTab === 'projects' && renderProjectsTab()}
            {activeTab === 'experience' && renderExperienceTab()}
            {activeTab === 'skills' && renderSkillsTab()}
            {activeTab === 'achievement' && renderAchievementTab()}
            {activeTab === 'training' && renderTrainingTab()}
            {activeTab === 'language' && renderLanguageTab()}
            {activeTab === 'contact' && renderContactTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;