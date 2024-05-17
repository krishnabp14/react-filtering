import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";


const Cart = () => {
    const cart = useSelector((store) => store.cart);

    return (
        <div className="container mx-auto mt-24">
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="flex flex-col gap-2">
                    {cart.map(item => (
                        <div key={item.id} className="w-full md:w-1/2 mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
                            <div className="flex items-center p-4">
                                <img className="w-20 h-20 object-cover" src={item.thumbnail} alt={item.title} />
                                <div className="ml-4 flex-grow">
                                    <h2 className="text-xl font-bold mb-2">{item.title.substring(0, 15)}</h2>
                                    <p className="text-gray-700 text-sm mb-2">{item.brand}</p>
                                </div>
                                <div className="flex flex-center items-end">
                                    <p className="text-gray-900 text-lg font-semibold mr-2">${item.price}</p>
                                    <button className=" bg-slate-500 text-white p-2 rounded hover:bg-red-600 focus:outline-none">
                                        <AiFillDelete />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
