import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-[#0B1C39] text-yellow-400 px-6 py-4 shadow-lg h-16 w-full fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-wide">AUREUM NETWORK</h1>

                <div className="space-x-6 text-sm font-semibold">
                    <Link to="/register" className="hover:text-yellow-300 transition duration-200">
                        Register
                    </Link>
                    <Link to="/login" className="hover:text-yellow-300 transition duration-200">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
