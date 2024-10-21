import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';

function App() {
  const [user] = useAuthState(auth);

  if (!user) {
    return <SignIn />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;