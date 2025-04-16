'use client';

import './globals.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-[color:var(--bg-main)] text-white">
        {/* Topbar stays at top */}
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Layout: sidebar + content side by side */}
        <div className="flex h-[calc(100vh-64px)]">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-1 p-4 sm:p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
