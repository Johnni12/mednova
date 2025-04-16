'use client';

import { useState } from 'react';

export default function SalesPage() {
  const [sales, setSales] = useState([
    { id: 1, item: 'Syrenev Plus', amount: '₦9,000', date: '2025-04-10' },
    { id: 2, item: 'PainFree Tabs', amount: '₦5,600', date: '2025-04-12' }
  ]);
  const [formVisible, setFormVisible] = useState(false);
  const [newSale, setNewSale] = useState({ item: '', amount: '', date: '' });

  const handleAddSale = () => {
    const nextId = sales.length + 1;
    setSales([...sales, { ...newSale, id: nextId }]);
    setNewSale({ item: '', amount: '', date: '' });
    setFormVisible(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[color:var(--text-main)]">Sales</h1>
        <button
          onClick={() => setFormVisible(true)}
          className="bg-[color:var(--accent-orange)] text-black px-4 py-2 rounded-md font-medium hover:opacity-90"
        >
          Add Sale
        </button>
      </div>

      {formVisible && (
        <div className="bg-[color:var(--bg-card)] p-6 rounded-md space-y-4 shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Item"
              value={newSale.item}
              onChange={(e) => setNewSale({ ...newSale, item: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Amount"
              value={newSale.amount}
              onChange={(e) => setNewSale({ ...newSale, amount: e.target.value })}
              className="input"
            />
            <input
              type="date"
              placeholder="Date"
              value={newSale.date}
              onChange={(e) => setNewSale({ ...newSale, date: e.target.value })}
              className="input"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAddSale}
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
              <th className="py-2 px-4">Item</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-b border-[color:var(--border-gray)]">
                <td className="py-2 px-4">{sale.id}</td>
                <td className="py-2 px-4">{sale.item}</td>
                <td className="py-2 px-4">{sale.amount}</td>
                <td className="py-2 px-4">{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
