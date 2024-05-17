import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart);
    console.log(cartItems);

    const handleAddToCart = () => {
        if(!checkCartItem()) {
            dispatch(addToCart(product));
            // toast('Item Added to cart successfully');
        } else {
            dispatch(removeFromCart({ id: product.id}));
        }
    }

    const checkCartItem = () => {
        for(let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].id === product.id) {
                return true;
            }
        }

        return false;
    }

    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative w-96 h-120">
            <img className="w-full h-48 object-cover" src={product.thumbnail} alt={product.title} />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{product.title.substring(0, 15)}</h2>
                <p className="text-gray-700 text-sm mb-2">{product.brand}</p>
                <p className="text-gray-900 text-lg font-semibold">${product.price}</p>
                <p className="text-gray-600 text-sm mt-2">{product.description.substring(0, 30)}...</p>
                <button className="flex items-center justify-center mt-4 w-full bg-slate-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none" onClick={handleAddToCart}>
                    <FaShoppingCart className="mr-2" /> {checkCartItem() ? 'Remove' : 'Add'} {checkCartItem() ? 'From' : 'To'} Cart
                </button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Product;
