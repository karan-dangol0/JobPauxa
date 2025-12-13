import React, { useState } from "react";
import {
  Clock,
  MapPin,
  Briefcase,
  Users,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const Jobs = () => {
  const [activeTab, setActiveTab] = useState("internship");
  const [selectedJob, setSelectedJob] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [fullPageView, setFullPageView] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const jobData = {
    internship: [
      {
        id: 1,
        title: "Digital Marketing Intern",
        company: "T.w.b. Creatives Pvt, Ltd",
        logo: "TWB",
        location: "Kathmandu",
        type: "Full Time",
        salary: "Rs 5000 - 10000",
        salaryPeriod: "Monthly",
        level: "Entry",
        openings: 5,
        daysLeft: 7,
        tags: ["#MarketingIntern", "#GraphicDesignIntern"],
        additionalTags: 1,
        description:
          "The Digital Marketing Intern will support the marketing team in executing online marketing strategies, creating engaging content, managing social media platforms, and running digital campaigns. This internship is ideal for someone who is eager to learn, creative, and passionate about digital marketing trends and tools. Interns will gain hands-on experience with real projects and campaigns.",
        responsibilities: [
          "Assist in managing and posting on social media platforms (Facebook, Instagram, TikTok, LinkedIn, etc.)",
          "Create, edit, and publish digital content (graphics, captions, short videos)",
          "Support in planning and executing digital marketing campaigns",
          "Monitor and report on social media analytics and campaign performance",
          "Conduct market research and competitor analysis",
        ],
        requiredSkills: [
          "Next.js",
          "Redux Toolkit",
          "TypeScript",
          "Tailwind CSS",
          "React Query",
        ],
        jobTags: ["Intern", "Remote", "Flexible Hours"],
        companyDetails: {
          location: "Kathmandu, Nepal",
          description:
            "T.W.B. Creatives is a leading digital marketing agency specializing in innovative brand solutions and creative campaigns. We help businesses grow their online presence through cutting-edge digital strategies.",
        },
      },
      {
        id: 2,
        title: "Sales and Marketing Intern",
        company: "Skilltootr",
        logo: "SK",
        location: "Kathmandu",
        type: "Full Time",
        salary: "Rs 5000 - 6000",
        salaryPeriod: "Monthly",
        level: "Entry",
        openings: 1,
        daysLeft: 12,
        tags: ["#MarketingIntern"],
        additionalTags: 0,
        description:
          "We're Hiring: Sales Intern\n\nSkilltootr – an EdTech platform focused on kids' learning – is looking for an energetic Sales Intern to join our team",
        responsibilities: [
          "Assist the Sales & Marketing Team in reaching out to parents, schools, and partners",
          "Support in lead generation, follow-ups, and client communication",
          "Help prepare proposals, presentations, and reports",
          "Work closely with the team to achieve monthly enrollment targets",
        ],
        requiredSkills: [
          "Communication Skills",
          "MS Office",
          "CRM Software",
          "Sales Techniques",
        ],
        jobTags: ["Intern", "Full Time", "On-site"],
        companyDetails: {
          location: "Kathmandu, Nepal",
          description:
            "Skilltootr is an innovative EdTech platform dedicated to empowering children through interactive learning experiences. We provide cutting-edge educational tools and resources to help young minds grow.",
        },
      },
      {
        id: 3,
        title: "Content Creator Intern",
        company: "Skilltootr",
        logo: "SK",
        location: "Kathmandu",
        type: "Part Time",
        salary: "Rs 3000 - 6000",
        salaryPeriod: "Monthly",
        level: "Entry",
        openings: 2,
        daysLeft: 15,
        tags: ["#ContentCreator", "#SocialMedia"],
        additionalTags: 0,
        description:
          "Creative minds wanted! Help us produce engaging content across various platforms and formats.",
        responsibilities: [
          "Create engaging content for social media",
          "Write blog posts and articles",
          "Produce video content",
          "Collaborate with design team",
        ],
        requiredSkills: [
          "Adobe Photoshop",
          "Canva",
          "Video Editing",
          "Content Writing",
          "Social Media Management",
        ],
        jobTags: ["Intern", "Part Time", "Hybrid"],
        companyDetails: {
          location: "Kathmandu, Nepal",
          description:
            "Skilltootr is an innovative EdTech platform dedicated to empowering children through interactive learning experiences.",
        },
      },
    ],
    job: [
      {
        id: 4,
        title: "Senior Marketing Manager",
        company: "Tech Solutions Ltd",
        logo: "TS",
        location: "Kathmandu",
        type: "Full Time",
        salary: "Rs 50000 - 80000",
        salaryPeriod: "Monthly",
        level: "Senior",
        openings: 1,
        daysLeft: 20,
        tags: ["#Marketing", "#Management"],
        additionalTags: 0,
        description:
          "Lead our marketing efforts and build a world-class marketing team.",
        responsibilities: [
          "Develop and execute marketing strategies",
          "Manage marketing team and budget",
          "Analyze market trends and competition",
          "Build brand awareness and drive growth",
        ],
        requiredSkills: [
          "Marketing Strategy",
          "Team Leadership",
          "Data Analytics",
          "Budget Management",
          "Brand Development",
        ],
        jobTags: ["Full Time Job", "Senior Level", "On-site"],
        companyDetails: {
          location: "Kathmandu, Nepal",
          description:
            "Tech Solutions Ltd is a leading technology company providing innovative software solutions to businesses worldwide. We focus on delivering excellence through cutting-edge technology.",
        },
      },
    ],
    event: [
      {
        id: 5,
        title: "Digital Marketing Workshop",
        company: "Marketing Hub Nepal",
        logo: "MH",
        location: "Kathmandu",
        type: "Workshop",
        salary: "Free",
        salaryPeriod: "",
        level: "All Levels",
        openings: 50,
        daysLeft: 5,
        tags: ["#Workshop", "#DigitalMarketing"],
        additionalTags: 0,
        description:
          "Join us for an intensive workshop on modern digital marketing techniques and strategies.",
        responsibilities: [
          "Learn SEO and SEM fundamentals",
          "Master social media marketing",
          "Understand analytics and metrics",
          "Network with industry professionals",
        ],
        requiredSkills: [
          "Basic Computer Skills",
          "Interest in Marketing",
          "Willingness to Learn",
        ],
        jobTags: ["Event", "Workshop", "Free"],
        companyDetails: {
          location: "Kathmandu, Nepal",
          description:
            "Marketing Hub Nepal is a community-driven platform offering workshops, training, and networking events for marketing professionals and enthusiasts.",
        },
      },
      {
        id: 6,
        title: "National Tech Hackathon 2025",
        company: "Code Nepal Community",
        logo: "CN",
        location: "Lalitpur",
        type: "Hackathon",
        salary: "Free",
        salaryPeriod: "",
        level: "All Levels",
        openings: 120,
        daysLeft: 12,
        tags: ["#Hackathon", "#Tech", "#Innovation"],
        additionalTags: 1,
        description:
          "A 48-hour hackathon focused on solving real-world problems using technology and innovation.",
        responsibilities: [
          "Build innovative tech solutions",
          "Collaborate in teams",
          "Pitch ideas to judges",
          "Learn from mentors and experts",
        ],
        requiredSkills: [
          "Basic Programming Knowledge",
          "Problem-Solving Skills",
          "Team Collaboration",
        ],
        jobTags: ["Hackathon", "Tech", "Innovation"],
        companyDetails: {
          location: "Lalitpur, Nepal",
          description:
            "Code Nepal Community promotes tech innovation, coding culture, and youth-led technology initiatives across Nepal.",
        },
      },
      {
        id: 7,
        title: "Free Web Development Bootcamp",
        company: "LearnIT Nepal",
        logo: "LI",
        location: "Online",
        type: "Free Course",
        salary: "Free",
        salaryPeriod: "",
        level: "Beginner",
        openings: 300,
        daysLeft: 20,
        tags: ["#FreeCourse", "#WebDevelopment"],
        additionalTags: 0,
        description:
          "A beginner-friendly online bootcamp covering HTML, CSS, JavaScript, and basic React.",
        responsibilities: [
          "Attend live online sessions",
          "Complete weekly assignments",
          "Build small projects",
          "Participate in group discussions",
        ],
        requiredSkills: [
          "Basic Computer Knowledge",
          "Internet Access",
          "Learning Mindset",
        ],
        jobTags: ["Course", "Online", "Free"],
        companyDetails: {
          location: "Online",
          description:
            "LearnIT Nepal provides free and affordable tech education programs to empower students and early-career developers.",
        },
      },
      {
        id: 8,
        title: "Summer Beats Live Concert",
        company: "Vibe Events Nepal",
        logo: "VB",
        location: "Boudha, Kathmandu",
        type: "Concert",
        salary: "Paid",
        salaryPeriod: "Entry Fee",
        level: "All Ages",
        openings: 500,
        daysLeft: 8,
        tags: ["#Concert", "#Music", "#Live"],
        additionalTags: 2,
        description:
          "An energetic live music concert featuring popular Nepali bands and solo artists.",
        responsibilities: [
          "Enjoy live performances",
          "Follow event guidelines",
          "Support local artists",
        ],
        requiredSkills: ["Event Pass", "Interest in Music"],
        jobTags: ["Concert", "Music", "Entertainment"],
        companyDetails: {
          location: "Kathmandu, Nepal",
          description:
            "Vibe Events Nepal organizes concerts, festivals, and live entertainment events across the country.",
        },
      },
      {
        id: 9,
        title: "Kathmandu Street Food Festival",
        company: "Taste Nepal",
        logo: "TN",
        location: "Tundikhel, Kathmandu",
        type: "Food Festival",
        salary: "Paid",
        salaryPeriod: "Entry Ticket",
        level: "All Ages",
        openings: 1000,
        daysLeft: 15,
        tags: ["#FoodFest", "#StreetFood", "#Festival"],
        additionalTags: 3,
        description:
          "A vibrant food festival showcasing local street food, international cuisines, and live entertainment.",
        responsibilities: [
          "Explore food stalls",
          "Participate in tasting events",
          "Enjoy live performances",
        ],
        requiredSkills: ["Food Enthusiasm", "Event Pass"],
        jobTags: ["Festival", "Food", "Entertainment"],
        companyDetails: {
          location: "Kathmandu, Nepal",
          description:
            "Taste Nepal promotes Nepali food culture through festivals, pop-up events, and culinary experiences.",
        },
      },
    ],
  };

  const categoryLabels = {
    all: "All Opportunities",
    internship: "Internship",
    job: "Job",
    event: "Event",
  };

  // Set first job when component mounts or tab changes
  React.useEffect(() => {
    let items = [];
    if (activeTab === "all") {
      items = [...jobData.internship, ...jobData.job, ...jobData.event];
    } else {
      items = jobData[activeTab] || [];
    }

    if (items.length > 0) {
      setSelectedJob(items[0]);
    }
  }, [activeTab]);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  const handleBack = () => {
    if (fullPageView) {
      setFullPageView(false);
    } else {
      setSelectedJob(null);
    }
  };

  const handleFullPage = () => {
    setFullPageView(true);
  };

  const handleApplyClick = () => {
    setShowApplyModal(true);
  };

  const closeModal = () => {
    setShowApplyModal(false);
  };

  const renderApplyModal = () => {
    if (!showApplyModal) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-lg max-w-4xl w-full max-h-[85vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Your Resume</h2>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Alert Message */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 m-4">
            <div className="flex items-start gap-2">
              <div className="text-yellow-600 text-lg">⚠</div>
              <p className="text-yellow-800 text-xs">
                Whenever you apply to an internship or fresher job, this is the
                resume that the employer will see. Always make sure it is up to
                date.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="grid grid-cols-3 gap-6">
              {/* Left Section - Profile and Info */}
              <div className="col-span-2 space-y-6">
                {/* Profile Header */}
                <div className="flex items-start gap-3">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Karan"
                    alt="Profile"
                    className="w-16 h-16 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">Karan Dangol</h3>
                    <p className="text-red-500 text-sm mb-1">
                      Front End Developer
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin size={14} />
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 font-medium text-sm">
                      Update Profile
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeModal();
                      }}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium flex items-center gap-2 text-sm"
                    >
                      Apply
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* About Section */}
                <div>
                  <h4 className="text-base font-bold mb-2">About</h4>
                  <p className="text-gray-700 text-sm">
                    Hi, I am Karan. I can build awesome web apps.
                  </p>
                </div>

                {/* Education Section */}
                <div>
                  <h4 className="text-base font-bold mb-3">Education</h4>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mt-2"></div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-xs mb-1">
                        September 1, 2024 - Present
                      </p>
                      <h5 className="font-semibold text-base mb-1">
                        Bachelor of Information Technology (BIT)
                      </h5>
                      <p className="text-gray-600 text-xs">
                        National College of Management and Technical Science
                        (NCMT College), Kathmandu
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience Section */}
                <div>
                  <h4 className="text-base font-bold mb-3">
                    Experience/Projects
                  </h4>
                  <p className="text-gray-400 text-sm">Not available</p>
                </div>

                {/* Achievement Section */}
                <div>
                  <h4 className="text-base font-bold mb-3">Achievement</h4>
                  <p className="text-gray-400 text-sm">Not available</p>
                </div>

                {/* Training Section */}
                <div>
                  <h4 className="text-base font-bold mb-3">Training</h4>
                  <p className="text-gray-400 text-sm">Not available</p>
                </div>
              </div>

              {/* Right Section - Contact Info */}
              <div className="space-y-4">
                {/* Resume Upload */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-700 text-sm">
                      Resume
                    </h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v3.586L7.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 8.586V5z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="w-10 h-10 bg-red-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600">1762...pdf</p>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-700 text-sm">
                      Email
                    </h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v3.586L7.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 8.586V5z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-800 text-sm">
                    high.pie.pepper@gmail.com
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-700 text-sm">
                      Phone no.
                    </h4>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v3.586L7.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 8.586V5z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-800 text-sm">9818300756</p>
                </div>

                {/* Location */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1 text-sm">
                    Location
                  </h4>
                  <p className="text-gray-800 text-sm">Kathmandu, Nepal</p>
                </div>

                {/* Social */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">
                    Social
                  </h4>
                  <div className="flex gap-2">
                    <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </button>
                    <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 8.25h-9v7.5h9v-7.5z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      Figma
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      Reactjs
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      React native
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      UI UX
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      Front-end development
                    </span>
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      Nepali, English, Hindi
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      Japanese
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCards = () => {
    let items = [];
    if (activeTab === "all") {
      items = [...jobData.internship, ...jobData.job, ...jobData.event];
    } else {
      items = jobData[activeTab] || [];
    }

    return (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            onClick={() => handleCardClick(item)}
            className={`bg-white rounded-lg border-2 p-6 hover:shadow-lg transition-shadow cursor-pointer ${
              selectedJob?.id === item.id && selectedJob?.title === item.title
                ? "border-blue-500 shadow-lg"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center text-white font-bold flex-shrink-0">
                {item.logo}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-blue-500 text-sm">{item.company}</p>
              </div>
            </div>

            <div className="flex gap-2 mb-4 flex-wrap">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {item.additionalTags > 0 && (
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-semibold">
                  +{item.additionalTags}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Clock size={16} />
                <span>{item.daysLeft} days left</span>
              </div>
              <button className="text-blue-500 text-sm font-medium hover:underline">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderDetail = () => {
    if (!selectedJob) return null;

    return (
      <div className="bg-white rounded-lg p-8">
        {fullPageView && (
          <button
            onClick={handleBack}
            className="text-blue-500 hover:text-blue-600 mb-6 flex items-center gap-2 font-medium"
          >
            ← Back
          </button>
        )}

        <div className="flex items-start gap-6 mb-8">
          <div className="w-20 h-20 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
            {selectedJob.logo}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold mb-2">{selectedJob.title}</h1>
            <p className="text-blue-500 text-lg mb-4 uppercase tracking-wide">
              {selectedJob.company}
            </p>
            <div className="flex gap-4 text-gray-600 flex-wrap">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{selectedJob.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                <span>{selectedJob.type}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={handleApplyClick}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium whitespace-nowrap"
            >
              Apply Now
            </button>
            {!fullPageView && (
              <button
                onClick={handleFullPage}
                className="text-blue-500 text-sm font-medium hover:underline whitespace-nowrap"
              >
                View on full page →
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-red-50 rounded-lg p-4">
            <DollarSign className="text-blue-500 mb-2" size={24} />
            <p className="text-gray-500 text-xs mb-1">Offered Salary</p>
            <p className="font-semibold text-sm">{selectedJob.salary}</p>
            {selectedJob.salaryPeriod && (
              <p className="text-xs text-gray-500">
                {selectedJob.salaryPeriod}
              </p>
            )}
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <MapPin className="text-blue-500 mb-2" size={24} />
            <p className="text-gray-500 text-xs mb-1">Location</p>
            <p className="font-semibold text-sm">Onsite</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <TrendingUp className="text-blue-500 mb-2" size={24} />
            <p className="text-gray-500 text-xs mb-1">Level</p>
            <p className="font-semibold text-sm">{selectedJob.level}</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <Users className="text-blue-500 mb-2" size={24} />
            <p className="text-gray-500 text-xs mb-1">Openings</p>
            <p className="font-semibold text-sm">{selectedJob.openings}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Job Description:</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {selectedJob.description}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">
            Responsibilities of the Candidate:
          </h2>
          <ul className="space-y-2">
            {selectedJob.responsibilities.map((resp, idx) => (
              <li
                key={idx}
                className="text-gray-700 leading-relaxed flex gap-2"
              >
                <span className="text-gray-400">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Required Skills Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">
            Required Skills (Tech Stack):
          </h2>
          <div className="flex flex-wrap gap-2">
            {selectedJob.requiredSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Job Tags Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Job Type:</h2>
          <div className="flex flex-wrap gap-2">
            {selectedJob.jobTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Company Details Section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-bold mb-4">Company Details:</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin size={18} className="text-blue-500" />
              <span className="font-medium">Location:</span>
              <span>{selectedJob.companyDetails.location}</span>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">
                {selectedJob.companyDetails.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {renderApplyModal()}

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="relative mb-6 inline-block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 min-w-[200px] justify-between"
            >
              <span>{categoryLabels[activeTab]}</span>
              <svg
                className={`w-5 h-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                <button
                  onClick={() => {
                    setActiveTab("all");
                    setSelectedJob(null);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900"
                >
                  All Opportunities
                </button>
                <button
                  onClick={() => {
                    setActiveTab("event");
                    setSelectedJob(null);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900"
                >
                  Event
                </button>
                <button
                  onClick={() => {
                    setActiveTab("internship");
                    setSelectedJob(null);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-blue-500"
                >
                  Internship
                </button>
                <button
                  onClick={() => {
                    setActiveTab("job");
                    setSelectedJob(null);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-900"
                >
                  Job
                </button>
              </div>
            )}
          </div>

          {!selectedJob && (
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeTab === "all"
                  ? "All Opportunities"
                  : `${categoryLabels[activeTab]} Listings`}
              </h2>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                Sort
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-6" style={{ height: "calc(100vh - 250px)" }}>
          {/* Left Sidebar - Job Cards */}
          {!fullPageView && (
            <div className="w-5/12 overflow-y-auto custom-scroll">
              {renderCards()}
            </div>
          )}

          {/* Right Side - Job Details */}
          <div
            className={
              fullPageView
                ? "w-full overflow-y-auto custom-scroll"
                : "w-7/12 overflow-y-auto custom-scroll"
            }
          >
            {renderDetail()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
