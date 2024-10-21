import React from 'react';
import { Users } from 'lucide-react';

const GroupsSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Users className="mr-2 h-6 w-6 text-indigo-600" />
        Groups
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span>Web Development Team</span>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Active</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Data Science Study Group</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">8 members</span>
        </li>
        <li className="flex items-center justify-between">
          <span>UI/UX Design Workshop</span>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Upcoming</span>
        </li>
      </ul>
    </div>
  );
};

export default GroupsSection;