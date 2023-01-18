import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const inputSearch = '';
const resultsAmount = 0;

const initialState = {
    inputSearch,
    resultsAmount
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchInput(state, action: PayloadAction<string>) {
            state.inputSearch = action.payload;
        },
        searchAmount(state, action: PayloadAction<number>) {
            state.resultsAmount = action.payload;
        }
    },
});

export const { searchInput, searchAmount } = searchSlice.actions;
export default searchSlice.reducer;