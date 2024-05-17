import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    Shop Cart
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/cart" className="text-white">Cart</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <a href="#" className="block text-gray-300 hover:text-white p-2">Home</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
