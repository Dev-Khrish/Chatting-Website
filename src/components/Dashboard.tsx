import React from 'react';
import ChatSection from './ChatSection';
import GroupsSection from './GroupsSection';
import FilesSection from './FilesSection';
import EventsSection from './EventsSection';

const Dashboard = () => {
  return (
    <div className="flex-1 p-10 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
      <div className="grid grid-cols-2 gap-8">
        <ChatSection />
        <GroupsSection />
        <FilesSection />
        <EventsSection />
      </div>
    </div>
  );
};

export default Dashboard;