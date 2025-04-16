'use client';

export default function StatWidget({ label, value, icon, growth }) {
  return (
    <div className="bg-[color:var(--bg-card)] rounded-2xl p-4 shadow-md flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-white text-sm font-medium">{label}</span>
        {/* Render emoji/icon string safely */}
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-white text-2xl font-bold">{value}</div>
      <div className="text-[color:var(--text-muted)] text-sm">{growth}</div>
    </div>
  );
}
