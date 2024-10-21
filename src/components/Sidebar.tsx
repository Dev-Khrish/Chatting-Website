import React from 'react';
import { MessageSquare, Users, FileText, Calendar, Settings, LogOut } from 'lucide-react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-indigo-600">Accredian</h1>
      </div>
      <nav className="mt-8 flex-1">
        <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100">
          <MessageSquare className="mr-3 h-6 w-6" />
          Chat
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Users className="mr-3 h-6 w-6" />
          Groups
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <FileText className="mr-3 h-6 w-6" />
          Files
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Calendar className="mr-3 h-6 w-6" />
          Events
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Settings className="mr-3 h-6 w-6" />
          Settings
        </a>
      </nav>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src={user?.photoURL || 'https://via.placeholder.com/40'} alt="User avatar" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <p className="font-medium">{user?.displayName}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => auth.signOut()}
          className="flex items-center justify-center w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition duration-200"
        >
          <LogOut className="mr-2 h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;