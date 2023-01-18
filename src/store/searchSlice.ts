import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const inputSearch = '';

const initialState = {
    inputSearch,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchInput(state, action: PayloadAction<string>) {
            console.log("action.payload = ", action.payload);
            state.inputSearch = action.payload;
        },
    },
});

export const { searchInput } = searchSlice.actions;
export default searchSlice.reducer;