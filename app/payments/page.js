'use client';

import { useState } from 'react';

export default function PaymentsPage() {
  const [payments, setPayments] = useState([
    { id: 1, customer: 'John Doe', amount: '₦4,500', method: 'Card' },
    { id: 2, customer: 'Jane Smith', amount: '₦2,800', method: 'Cash' },
  ]);
  const [formVisible, setFormVisible] = useState(false);
  const [newPayment, setNewPayment] = useState({ customer: '', amount: '', method: '' });

  const handleAddPayment = () => {
    const nextId = payments.length + 1;
    setPayments([...payments, { ...newPayment, id: nextId }]);
    setNewPayment({ customer: '', amount: '', method: '' });
    setFormVisible(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[color:var(--text-main)]">Payments</h1>
        <button
          onClick={() => setFormVisible(true)}
          className="bg-[color:var(--accent-orange)] text-black px-4 py-2 rounded-md font-medium hover:opacity-90"
        >
          Add Payment
        </button>
      </div>

      {formVisible && (
        <div className="bg-[color:var(--bg-card)] p-6 rounded-md space-y-4 shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Customer"
              value={newPayment.customer}
              onChange={(e) => setNewPayment({ ...newPayment, customer: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Amount"
              value={newPayment.amount}
              onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
              className="input"
            />
            <select
              value={newPayment.method}
              onChange={(e) => setNewPayment({ ...newPayment, method: e.target.value })}
              className="input bg-[color:var(--bg-main)]"
            >
              <option value="">Select Method</option>
              <option value="Card">Card</option>
              <option value="Cash">Cash</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAddPayment}
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
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Method</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-b border-[color:var(--border-gray)]">
                <td className="py-2 px-4">{payment.id}</td>
                <td className="py-2 px-4">{payment.customer}</td>
                <td className="py-2 px-4">{payment.amount}</td>
                <td className="py-2 px-4">{payment.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
