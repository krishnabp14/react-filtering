import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { fetchProductsStart, fetchProductsSuccess } from "../slices/productSlice";
import { sortedProducts } from "../utils/sortProducts";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const filteredProducts = useSelector((state) => state.filteredProducts);
    const sortedOrder = useSelector((state) => state.sortOrder);
    const [sortedData, setSortedData] = useState([]);

    const fetchProducts = async () => {
        dispatch(fetchProductsStart());
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        dispatch(fetchProductsSuccess(data.products));
    }

    useEffect(() => {
        if (sortedOrder === -1) {
            return;
        }
        if (filteredProducts.length > 0) {
            setSortedData(sortedProducts(filteredProducts, sortedOrder));
        } else {
            setSortedData(sortedProducts(products, sortedOrder));
        }
    }, [sortedOrder, filteredProducts, products]);

    useEffect(() => {
        fetchProducts();
    }, [dispatch]);

    if (loading) {
        // console.log("loading");
        return (
            <div className="flex mt-24 items-center justify-center w-full">
                Loading...
            </div>
        )
    }

    const displayedProducts = sortedData.length > 0 ? sortedData : (filteredProducts.length > 0 ? filteredProducts : products);

    return (
        <div className="px-10 mt-24">
            <div className="flex flex-wrap gap-6">
                {
                    displayedProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;
