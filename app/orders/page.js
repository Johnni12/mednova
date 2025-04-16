'use client';

import { useState } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', product: 'Syrenev Plus', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', product: 'PainFree Tabs', status: 'Delivered' }
  ]);
  const [formVisible, setFormVisible] = useState(false);
  const [newOrder, setNewOrder] = useState({ customer: '', product: '', status: '' });

  const handleAddOrder = () => {
    const nextId = orders.length + 1;
    setOrders([...orders, { ...newOrder, id: nextId }]);
    setNewOrder({ customer: '', product: '', status: '' });
    setFormVisible(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[color:var(--text-main)]">Orders</h1>
        <button
          onClick={() => setFormVisible(true)}
          className="bg-[color:var(--accent-orange)] text-black px-4 py-2 rounded-md font-medium hover:opacity-90"
        >
          Add Order
        </button>
      </div>

      {/* Add Order Form */}
      {formVisible && (
        <div className="bg-[color:var(--bg-card)] p-6 rounded-md space-y-4 shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Customer Name"
              value={newOrder.customer}
              onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Product"
              value={newOrder.product}
              onChange={(e) => setNewOrder({ ...newOrder, product: e.target.value })}
              className="input"
            />
            <select
              value={newOrder.status}
              onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
              className="input bg-[color:var(--bg-main)]"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAddOrder}
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

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[color:var(--text-muted)] border-b border-[color:var(--border-gray)]">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Product</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-[color:var(--border-gray)]">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4">{order.customer}</td>
                <td className="py-2 px-4">{order.product}</td>
                <td className="py-2 px-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
