import { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
    
    const [products, setProducts] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    const fetchProducts = async () => {
        setShowLoader(true);
        const response = await fetch("https://dummyjson.com/products");
        const products = await response.json();
        setProducts(products.products);
        setShowLoader(false);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    if(showLoader) {
        return (
            <div className="flex mt-4 items-center justify-center w-full">
                Loading...
            </div>
        )
    }

    return (
        <div className="mt-4">
            <div className="flex flex-wrap gap-6">
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