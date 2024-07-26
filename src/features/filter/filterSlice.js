import { createSlice } from '@reduxjs/toolkit'

// initial state
const initialState = {
    filters: [
        "color-scoreboard",
        "color-flight",
        "color-productCart",
        "color-bookstore",
        "color-blog",
        "color-jobFinder",
    ],
    search: ''
}

const filterSlice = createSlice({
    name: 'filter_slice',
    initialState,
    reducers: {
        onFilter: (state, action) => {
            let con = state.filters.some(i => i === action.payload.colorClass)
            if(con) {
                state.filters = state.filters.filter(i => {
                    if(i === action.payload.colorClass) {
                        return i !== action.payload.colorClass
                    }
                    return i
                })
            } else {
                state.filters.push(action.payload.colorClass)
            }
        },
        onSearch: (state, action) => {
            state.search = action.payload
        }
    }
})


export const { onFilter, onSearch } = filterSlice.actions;

export default filterSlice.reducer;