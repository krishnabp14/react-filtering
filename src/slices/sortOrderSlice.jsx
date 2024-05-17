import { createSlice } from "@reduxjs/toolkit";

const sortOrder = createSlice({
    name: 'sortedOrder',
    initialState: -1,
    reducers: {
        updateSortedOrder(state, action) {
            return action.payload;
        }
    }
})

export const { updateSortedOrder } = sortOrder.actions;

export default sortOrder.reducer;
