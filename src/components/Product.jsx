import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product }) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative w-96 h-120">
            <img className="w-full h-48 object-cover" src={product.thumbnail} alt={product.title} />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{product.title.substring(0, 15)}</h2>
                <p className="text-gray-700 text-sm mb-2">{product.brand}</p>
                <p className="text-gray-900 text-lg font-semibold">${product.price}</p>
                <p className="text-gray-600 text-sm mt-2">{product.description.substring(0, 30)}...</p>
                <button className="flex items-center justify-center mt-4 w-full bg-slate-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none" onClick={() => toast('Item Added to Cart!!')}>
                    <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Product;
