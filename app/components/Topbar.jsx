'use client';
import Link from 'next/link';
import { FiSearch, FiBell, FiMenu } from 'react-icons/fi';
import { FaUserCircle, FaClinicMedical } from 'react-icons/fa';

export default function Topbar({ onMenuClick }) {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 sm:px-6 bg-[color:var(--bg-primary)] shadow-md z-30">
      
      {/* Left - Brand + Menu */}
      <div className="flex items-center gap-3 text-xl font-bold text-[color:var(--text-main)]">
        {/* Mobile menu toggle */}
        <button className="lg:hidden" onClick={onMenuClick}>
          <FiMenu size={22} className="text-[color:var(--text-muted)]" />
        </button>
        <FaClinicMedical className="text-[var(--accent-orange)]" />
        <Link href='/' className="hidden sm:inline">MedNova</Link>
      </div>

      {/* Search (hidden on small screens) */}
      <div className="hidden sm:flex items-center gap-3 bg-[color:var(--bg-card)] px-4 py-2 rounded-md w-full max-w-md">
        <FiSearch className="text-[color:var(--text-muted)]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm w-full text-[color:var(--text-main)] placeholder-[color:var(--text-muted)]"
        />
      </div>

      {/* Right-side icons */}
      <div className="flex items-center gap-5 text-[color:var(--text-muted)]">
        <button className="relative hover:text-white">
          <FiBell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <FaUserCircle size={32} className="text-[color:var(--highlight-purple)]" />
        </div>
      </div>
    </div>
  );
}
