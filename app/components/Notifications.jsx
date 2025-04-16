'use client';

import { FiAlertCircle, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

const notifications = [
  {
    id: 1,
    type: 'stock',
    message: 'Low stock alert for Ibuprofen 400mg.',
    icon: FiAlertCircle,
    color: 'text-red-400',
    time: '2 mins ago',
  },
  {
    id: 2,
    type: 'message',
    message: 'New inquiry from Dr. Rajesh.',
    icon: FiMessageSquare,
    color: 'text-blue-400',
    time: '10 mins ago',
  },
  {
    id: 3,
    type: 'system',
    message: 'System backup completed successfully.',
    icon: FiCheckCircle,
    color: 'text-green-400',
    time: '1 hour ago',
  },
];

export default function Notifications() {
  return (
    <div className="bg-[color:var(--bg-card)] rounded-2xl p-5 shadow-md w-full h-full">
      <h2 className="text-lg font-semibold mb-4 text-white">Notifications</h2>
      <ul className="flex flex-col gap-4 max-h-[300px] overflow-y-auto pr-2">
        {notifications.map((note) => (
          <li key={note.id} className="flex items-start gap-3">
            <div className={`p-2 bg-[color:var(--bg-main)] rounded-lg ${note.color}`}>
              <note.icon size={18} />
            </div>
            <div className="flex-1 text-sm text-white">
              <p>{note.message}</p>
              <span className="text-xs text-[color:var(--text-muted)]">{note.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
