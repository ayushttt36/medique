import React from 'react';
import Header from './Header';

export default function UserDashboard({ user, onLogout }) {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <button onClick={onLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg">Logout</button>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Welcome</h2>
          <p>Logged in as <strong>{user.name}</strong> <span className="text-sm text-gray-600">({user.role})</span></p>
          <p className="mt-2 text-gray-500">Now you can request demo and view patient data based on your role.</p>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">Use the existing web interface below to manage your data.</p>
        </div>
      </div>
    </div>
  );
}
