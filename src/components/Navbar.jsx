import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector((store) => store.cart);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <Link to="/">Shop Cart</Link>
                </div>
                <div className="hidden md:flex space-x-4 flex-center items-center">
                    <Link to="/cart" className="text-white flex items-center flex-center border border-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300">
                        <FaShoppingCart className='mr-2'/> Cart - {cartItems.length}
                    </Link>
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
                    <Link to="/" className="block text-gray-300 hover:text-white p-2">Home</Link>
                    <Link to="/cart" className="block text-gray-300 hover:text-white p-2 flex items-center">
                        <FaShoppingCart className='mr-2'/> Cart - {cartItems.length}
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
