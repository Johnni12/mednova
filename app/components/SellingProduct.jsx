'use client';

const products = [
  {
    name: 'Tadalis 20mg',
    quantity: 320,
    price: '$12.00',
  },
  {
    name: 'Cotozal Tz Plus',
    quantity: 290,
    price: '$9.50',
  },
  {
    name: 'Syrenev Plus',
    quantity: 275,
    price: '$15.20',
  },
  {
    name: 'Telsart 80/12.5mg',
    quantity: 210,
    price: '$10.00',
  },
];

export default function SellingProduct() {
  return (
    <div className="bg-[color:var(--bg-card)] rounded-2xl p-5 shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4 text-white">Top Selling Products</h2>
      <ul className="space-y-3">
        {products.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-[color:var(--border-gray)] pb-3 last:border-b-0"
          >
            <div>
              <p className="text-white font-medium">{item.name}</p>
              <p className="text-sm text-[color:var(--text-muted)]">{item.quantity} units</p>
            </div>
            <div className="text-white font-semibold">{item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
