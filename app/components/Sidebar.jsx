'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiHome, FiInbox, FiPackage, FiShoppingCart, FiBarChart2,
  FiUsers, FiCreditCard, FiSettings, FiHelpCircle
} from 'react-icons/fi';
import { useEffect } from 'react';

const menuItems = [
  { icon: <FiHome />, label: 'Overview', href: '/' },
  { icon: <FiInbox />, label: 'Inbox', href: '/inbox' },
  { icon: <FiPackage />, label: 'Products', href: '/products' },
  { icon: <FiShoppingCart />, label: 'Orders', href: '/orders' },
  { icon: <FiBarChart2 />, label: 'Sales', href: '/sales' },
  { icon: <FiUsers />, label: 'Customers', href: '/customers' },
  { icon: <FiCreditCard />, label: 'Payments', href: '/payments' },
  { icon: <FiSettings />, label: 'Settings', href: '/settings' },
  { icon: <FiHelpCircle />, label: 'Help & Support', href: '/help' },
];

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <>
      {/* Overlay on mobile */}
      {open && <div onClick={onClose} className="fixed inset-0 bg-black/50 z-40 lg:hidden" />}

      {/* Sidebar container */}
      <aside
        className={`bg-[color:var(--bg-card)] text-[color:var(--text-main)] p-6 w-64 h-full z-50 transition-transform duration-300
          fixed top-0 left-0 ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 lg:block`}
      >
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-2 rounded-md transition
                  ${
                    isActive
                      ? 'bg-[color:var(--accent-orange)] text-black font-semibold'
                      : 'hover:bg-[color:var(--border-gray)] text-[color:var(--text-muted)]'
                  }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
