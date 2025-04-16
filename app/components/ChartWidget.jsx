'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Antibiotics', stock: 150, min: 100 },
  { name: 'Painkillers', stock: 90, min: 120 },
  { name: 'Antivirals', stock: 110, min: 100 },
  { name: 'Vaccines', stock: 70, min: 90 },
  { name: 'Others', stock: 200, min: 150 },
];

export default function ChartWidget() {
  return (
    <div className="bg-[color:var(--bg-card)] rounded-2xl p-5 shadow-md w-full">
      <h2 className="text-lg font-semibold mb-4 text-white">Inventory Status</h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#A3A3A3" />
          <YAxis stroke="#A3A3A3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="stock" fill="#8B5CF6" name="Current Stock" radius={[6, 6, 0, 0]} />
          <Bar dataKey="min" fill="#F59E0B" name="Min Required" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
