import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import filterProductsReducer from "./slices/filterProductsSlice";
import sortOrderReducer from "./slices/sortOrderSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        filteredProducts: filterProductsReducer,
        sortOrder: sortOrderReducer,
    }
})

export default store;