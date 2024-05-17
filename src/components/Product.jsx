import React from 'react';
import { FaShoppingCart } from "react-icons/fa";


const Product = ({ product }) => {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
            <img className="w-full h-48 object-fit" src={product.thumbnail} alt={product.title} />
            <button className="absolute top-4 right-4 bg-grey-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">
                <FaShoppingCart />
            </button>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-700 text-sm mb-2">{product.brand}</p>
                <p className="text-gray-900 text-lg font-semibold">${product.price}</p>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            </div>
        </div>
    );
}

export default Product;
