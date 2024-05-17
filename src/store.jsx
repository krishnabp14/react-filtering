import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import filterProductsReducer from "./slices/filterProductsSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        filteredProducts: filterProductsReducer,
    }
})

export default store;