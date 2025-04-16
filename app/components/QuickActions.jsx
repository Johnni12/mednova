'use client';

import { FiPlusCircle, FiDownloadCloud, FiSettings } from 'react-icons/fi';

const actions = [
  {
    label: 'Add Product',
    icon: FiPlusCircle,
    color: 'bg-purple-500 hover:bg-purple-600',
  },
  {
    label: 'Export Data',
    icon: FiDownloadCloud,
    color: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    label: 'Settings',
    icon: FiSettings,
    color: 'bg-gray-700 hover:bg-gray-800',
  },
];

export default function QuickActions() {
  return (
    <div className="bg-[color:var(--bg-card)] rounded-2xl p-5 shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4 text-white">Quick Actions</h2>
      <div className="flex flex-col gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`flex items-center gap-3 text-sm text-white px-4 py-2 rounded-lg transition ${action.color}`}
          >
            <action.icon size={18} />
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
