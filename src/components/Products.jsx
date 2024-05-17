import { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
    
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const products = await response.json();
        setProducts(products.products);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="mt-4">
            <div className="flex flex-wrap gap-4">
                {
                    products && products.map(product => {
                        return (
                            <Product product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products;