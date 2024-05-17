import { createSlice } from "@reduxjs/toolkit";

const filteredProductsSlice = createSlice({
    name: 'filteredProducts',
    initialState: [],
    reducers: {
        setProducts(state, action) {
            return action.payload;
        }
    }
})

export const { setProducts } = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;
