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
            state.inputSearch = action.payload;
        },
    },
});

export const { searchInput } = searchSlice.actions;
export default searchSlice.reducer;