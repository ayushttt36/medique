import React from 'react';
import Header from './Header';

export default function AdminDashboard({ user, onLogout }) {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button onClick={onLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg">Logout</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Admin Controls</h2>
            <ul className="list-disc list-inside">
              <li>Manage all demo requests</li>
              <li>Manage patients</li>
              <li>View analytics</li>
              <li>Manage appointments and prescriptions</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Welcome</h2>
            <p>Logged in as <strong>{user.name}</strong> <span className="text-sm text-gray-600">({user.role})</span></p>
            <p className="mt-2 text-gray-500">Use the existing UI below to interact with the system.</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500">You are now in admin mode. For a full feature set, use the navigation in the top header.</p>
        </div>
      </div>
    </div>
  );
}
