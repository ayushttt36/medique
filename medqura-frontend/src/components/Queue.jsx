import React, { useState } from 'react';
import { UserPlus, Play, CheckCircle } from 'lucide-react';

const QueueManager = () => {
  const [queue, setQueue] = useState([
    { id: 1, name: "Sarah Jenkins", status: "Waiting", time: "10:15 AM" },
    { id: 2, name: "Marcus Vane", status: "In-Progress", time: "10:30 AM" },
  ]);

  const updateStatus = (id, newStatus) => {
    setQueue(queue.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-indigo-900">Live Clinic Queue</h2>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          <UserPlus size={18} /> Add Patient
        </button>
      </div>

      <div className="space-y-4">
        {queue.map((patient) => (
          <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div>
              <p className="font-semibold text-gray-800">{patient.name}</p>
              <p className="text-xs text-gray-500">Appointed: {patient.time}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                patient.status === 'In-Progress' ? 'bg-amber-100 text-amber-700' : 
                patient.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {patient.status}
              </span>
              
              {patient.status === 'Waiting' && (
                <button onClick={() => updateStatus(patient.id, 'In-Progress')} className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-full">
                  <Play size={20} />
                </button>
              )}
              {patient.status === 'In-Progress' && (
                <button onClick={() => updateStatus(patient.id, 'Completed')} className="text-emerald-600 hover:bg-emerald-50 p-2 rounded-full">
                  <CheckCircle size={20} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueueManager;
