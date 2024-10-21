import React from 'react';
import { Calendar } from 'lucide-react';

const EventsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Calendar className="mr-2 h-6 w-6 text-indigo-600" />
        Upcoming Events
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span>Group Project Meeting</span>
          <span className="text-sm text-gray-500">Today, 3:00 PM</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Guest Lecture: AI in Education</span>
          <span className="text-sm text-gray-500">Tomorrow, 10:00 AM</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Career Fair</span>
          <span className="text-sm text-gray-500">Next Week, All Day</span>
        </li>
      </ul>
    </div>
  );
};

export default EventsSection;