'use client';

import { useState } from 'react';

export default function CustomersPage() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '08012345678' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '08087654321' },
  ]);
  const [formVisible, setFormVisible] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });

  const handleAddCustomer = () => {
    const nextId = customers.length + 1;
    setCustomers([...customers, { ...newCustomer, id: nextId }]);
    setNewCustomer({ name: '', email: '', phone: '' });
    setFormVisible(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[color:var(--text-main)]">Customers</h1>
        <button
          onClick={() => setFormVisible(true)}
          className="bg-[color:var(--accent-orange)] text-black px-4 py-2 rounded-md font-medium hover:opacity-90"
        >
          Add Customer
        </button>
      </div>

      {formVisible && (
        <div className="bg-[color:var(--bg-card)] p-6 rounded-md space-y-4 shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newCustomer.name}
              onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              value={newCustomer.email}
              onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Phone"
              value={newCustomer.phone}
              onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
              className="input"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAddCustomer}
              className="bg-[color:var(--highlight-purple)] text-white px-4 py-2 rounded-md"
            >
              Save
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

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[color:var(--text-muted)] border-b border-[color:var(--border-gray)]">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Phone</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-[color:var(--border-gray)]">
                <td className="py-2 px-4">{customer.id}</td>
                <td className="py-2 px-4">{customer.name}</td>
                <td className="py-2 px-4">{customer.email}</td>
                <td className="py-2 px-4">{customer.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
