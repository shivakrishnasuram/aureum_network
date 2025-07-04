import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            {/* Sidebar for large screens */}
            <aside className="hidden lg:block w-64 bg-[#0B1C39]  text-white p-6 border-r border-gray-600">
                <h2 className="text-xl font-bold mb-6">Menu</h2>
                <nav className="flex flex-col space-y-2">
                    <Link to="/dashboard/main" className="hover:text-gray-300">Main</Link>
                    {/* <Link to="/dashboard/profile" className="hover:text-gray-300">Profile</Link> */}
                    {/* <Link to="/dashboard/transactions" className="hover:text-gray-300">Transactions</Link> */}
                    <Link to="/dashboard/about" className="hover:text-gray-300">About</Link>
                </nav>
            </aside>


            {/* Sidebar for mobile screens */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    <div className="w-64 bg-[#0B1C39] text-white p-6 min-h-full ">
                        <h2 className="text-xl font-bold mb-6">Menu</h2>
                        <nav className="flex flex-col space-y-2">
                            <Link to="/dashboard/main" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Main</Link>
                            {/* <Link to="/dashboard/profile" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Profile</Link> */}
                            {/* <Link to="/dashboard/transactions" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Transactions</Link> */}
                            <Link to="/dashboard/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
                        </nav>
                    </div>
                    {/* Backdrop */}
                    <div className="flex-1 bg-black opacity-40" onClick={() => setIsOpen(false)}></div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
