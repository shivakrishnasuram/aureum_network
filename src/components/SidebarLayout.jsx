import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardNavbar from './DashboardNavbar';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col  min-h-screen ">
      <DashboardNavbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
        
      <div className="flex flex-1">
        {/* Sidebar (toggle visibility on mobile) */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Page content */}
        <main className="flex-1 bg-[#0B1C39]  ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default SidebarLayout;