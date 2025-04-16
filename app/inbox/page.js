'use client';

import { useState } from 'react';

export default function InboxPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Support', subject: 'Account Issue', date: '2025-04-12', status: 'Unread' },
    { id: 2, sender: 'Sales Team', subject: 'New Product Launch', date: '2025-04-10', status: 'Read' },
  ]);
  const [formVisible, setFormVisible] = useState(false);
  const [newMessage, setNewMessage] = useState({ sender: '', subject: '', content: '' });

  const handleSendMessage = () => {
    const nextId = messages.length + 1;
    setMessages([...messages, { ...newMessage, id: nextId, status: 'Unread', date: new Date().toISOString().split('T')[0] }]);
    setNewMessage({ sender: '', subject: '', content: '' });
    setFormVisible(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[color:var(--text-main)]">Inbox</h1>
        <button
          onClick={() => setFormVisible(true)}
          className="bg-[color:var(--accent-orange)] text-black px-4 py-2 rounded-md font-medium hover:opacity-90"
        >
          Compose Message
        </button>
      </div>

      {/* Compose Message Form */}
      {formVisible && (
        <div className="bg-[color:var(--bg-card)] p-6 rounded-md space-y-4 shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Sender"
              value={newMessage.sender}
              onChange={(e) => setNewMessage({ ...newMessage, sender: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Subject"
              value={newMessage.subject}
              onChange={(e) => setNewMessage({ ...newMessage, subject: e.target.value })}
              className="input"
            />
            <textarea
              placeholder="Content"
              value={newMessage.content}
              onChange={(e) => setNewMessage({ ...newMessage, content: e.target.value })}
              className="input h-40"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleSendMessage}
              className="bg-[color:var(--highlight-purple)] text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
            <button
              onClick={() => setFormVisible(false)}
              className="text-[color:var(--text-muted)] hover:text-red-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Inbox Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[color:var(--text-muted)] border-b border-[color:var(--border-gray)]">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Sender</th>
              <th className="py-2 px-4">Subject</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id} className="border-b border-[color:var(--border-gray)]">
                <td className="py-2 px-4">{message.id}</td>
                <td className="py-2 px-4">{message.sender}</td>
                <td className="py-2 px-4">{message.subject}</td>
                <td className="py-2 px-4">{message.date}</td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded ${message.status === 'Unread' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                    {message.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
