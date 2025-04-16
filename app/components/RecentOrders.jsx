'use client';

const orders = [
  {
    id: 'ORD001',
    product: 'Syrenev Plus',
    customer: 'Dr. John Smith',
    date: 'Apr 10, 2025',
    status: 'Shipped',
  },
  {
    id: 'ORD002',
    product: 'Tadalis 20mg',
    customer: 'Dr. Lisa Ray',
    date: 'Apr 09, 2025',
    status: 'Pending',
  },
  {
    id: 'ORD003',
    product: 'Telsart 80/12.5mg',
    customer: 'Dr. Alex Wong',
    date: 'Apr 08, 2025',
    status: 'Delivered',
  },
  {
    id: 'ORD004',
    product: 'Co-Strimax',
    customer: 'Dr. Maria Gomez',
    date: 'Apr 07, 2025',
    status: 'Cancelled',
  },
];

const statusColor = {
  Shipped: 'text-blue-400',
  Pending: 'text-yellow-400',
  Delivered: 'text-green-400',
  Cancelled: 'text-red-400',
};

export default function RecentOrders() {
  return (
    <div className="bg-[color:var(--bg-card)] rounded-2xl p-5 shadow-md w-full h-full">
      <h2 className="text-lg font-semibold mb-4 text-white">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-[color:var(--text-muted)] border-b border-[color:var(--border-gray)]">
            <tr>
              <th className="py-2">Order ID</th>
              <th className="py-2">Product</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Date</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-white border-b border-[color:var(--border-gray)] last:border-0">
                <td className="py-3">{order.id}</td>
                <td>{order.product}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td className={statusColor[order.status]}>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
