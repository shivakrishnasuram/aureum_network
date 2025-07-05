import React from 'react';
import { Menu } from 'lucide-react'; // Or use any icon lib like react-icons

const DashboardNavbar = ({ onToggleSidebar }) => {
    // console.log(onToggleSidebar,"this is some thing from dshboardnarvar")
    return (
        <div className="bg-gray-50  shadow-md p-4 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center space-x-4">
                {/* Hamburger icon on small screens */}
                <button
                    className="lg:hidden text-gray-700"
                    onClick={onToggleSidebar}
                >
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-semibold text-yellow-400">Aureum Dashboard</h1>
            </div>

            <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Welcome, Shiva Krishna</span>
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    History
                </button>
            </div>
        </div>
    );
};

export default DashboardNavbar;
