import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, DollarSign, Tag, FileText, Image, X } from 'lucide-react';

export default function PostEvents() {
  const [eventData, setEventData] = useState({
    title: '',
    category: 'Conference',
    eventType: 'In-person',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    location: '',
    venueDetails: '',
    capacity: '',
    registrationFee: '',
    description: '',
    agenda: '',
    requirements: '',
    tags: '',
    organizer: '',
    contactEmail: '',
    contactPhone: '',
    website: '',
    registrationDeadline: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!eventData.title || !eventData.startDate || !eventData.location || !eventData.description) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Event Data:', eventData);
    alert('Event posted successfully!');
    
    setEventData({
      title: '',
      category: 'Conference',
      eventType: 'In-person',
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      location: '',
      venueDetails: '',
      capacity: '',
      registrationFee: '',
      description: '',
      agenda: '',
      requirements: '',
      tags: '',
      organizer: '',
      contactEmail: '',
      contactPhone: '',
      website: '',
      registrationDeadline: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Post New Event</h1>
          <p className="text-gray-600">Create and publish your event to reach job seekers and professionals</p>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText size={20} className="text-blue-500" />
                Basic Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Event Title<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={eventData.title}
                    onChange={handleInputChange}
                    placeholder="e.g. Tech Career Fair 2024"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Category<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="category"
                      value={eventData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="Conference">Conference</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Seminar">Seminar</option>
                      <option value="Career Fair">Career Fair</option>
                      <option value="Networking">Networking</option>
                      <option value="Webinar">Webinar</option>
                      <option value="Training">Training</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Event Type<span className="text-red-500">*</span>
                    </label>
                    <select
                      name="eventType"
                      value={eventData.eventType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    >
                      <option value="In-person">In-person</option>
                      <option value="Virtual">Virtual</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Organizer Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="organizer"
                    value={eventData.organizer}
                    onChange={handleInputChange}
                    placeholder="Your organization or name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-blue-500" />
                Date & Time
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Start Date<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={eventData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Start Time<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      name="startTime"
                      value={eventData.startTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={eventData.endDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      End Time
                    </label>
                    <input
                      type="time"
                      name="endTime"
                      value={eventData.endTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Registration Deadline
                  </label>
                  <input
                    type="date"
                    name="registrationDeadline"
                    value={eventData.registrationDeadline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin size={20} className="text-blue-500" />
                Location
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={eventData.location}
                    onChange={handleInputChange}
                    placeholder="City, Country or Virtual Platform"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Venue Details
                  </label>
                  <textarea
                    name="venueDetails"
                    value={eventData.venueDetails}
                    onChange={handleInputChange}
                    placeholder="Provide specific venue address, building name, room number, or virtual meeting link..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users size={20} className="text-blue-500" />
                Event Details
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Capacity (Max Attendees)
                    </label>
                    <input
                      type="number"
                      name="capacity"
                      value={eventData.capacity}
                      onChange={handleInputChange}
                      placeholder="e.g. 100"
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Registration Fee
                    </label>
                    <input
                      type="text"
                      name="registrationFee"
                      value={eventData.registrationFee}
                      onChange={handleInputChange}
                      placeholder="Free or NPR 500"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Event Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={eventData.description}
                    onChange={handleInputChange}
                    placeholder="Describe what the event is about, who should attend, and what participants will gain..."
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Event Agenda / Schedule
                  </label>
                  <textarea
                    name="agenda"
                    value={eventData.agenda}
                    onChange={handleInputChange}
                    placeholder="Provide the event schedule, sessions, speakers, etc..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Requirements / Who Should Attend
                  </label>
                  <textarea
                    name="requirements"
                    value={eventData.requirements}
                    onChange={handleInputChange}
                    placeholder="Specify target audience, prerequisites, or requirements..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={eventData.tags}
                    onChange={handleInputChange}
                    placeholder="e.g. Technology, Careers, Networking, IT"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users size={20} className="text-blue-500" />
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Contact Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={eventData.contactEmail}
                      onChange={handleInputChange}
                      placeholder="contact@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={eventData.contactPhone}
                      onChange={handleInputChange}
                      placeholder="+977 9841234567"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Event Website / Registration Link
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={eventData.website}
                    onChange={handleInputChange}
                    placeholder="https://example.com/event"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between rounded-b-lg">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Save as Draft
            </button>
            <div className="flex gap-3">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Publish Event
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> Make sure to provide detailed information about your event to attract more participants. 
            Include speakers, topics, and any special highlights that make your event unique.
          </p>
        </div>
      </div>
    </div>
  );
}