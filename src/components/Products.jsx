import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { fetchProductsStart, fetchProductsSuccess } from "../slices/productSlice";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const filteredProducts = useSelector((state) => state.filteredProducts);

    console.log("products length" + products.length);
    console.log("filtred products" + filteredProducts.length);

    const fetchProducts = async () => {
        dispatch(fetchProductsStart());
        const response = await fetch("https://dummyjson.com/products");
        const products = await response.json();
        dispatch(fetchProductsSuccess(products.products));
    }

    useEffect(() => {
        fetchProducts();
    }, [dispatch]);

    if(loading) {
        console.log("loading");
        return (
            <div className="flex mt-24 items-center justify-center w-full">
                Loading...
            </div>
        )
    }

    return (
        <div className="px-10 mt-24">
            <div className="flex flex-wrap gap-6">
                {
                    (filteredProducts.length > 0 ? filteredProducts : products).map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;
