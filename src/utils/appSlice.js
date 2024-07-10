import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState : {
        showSlidebar: true,
        suggestionBox: false,
    },
    reducers: {
        toggleSlidebar: (state) => {
            state.showSlidebar = !state.showSlidebar;
        },
        closeSlidebar: (state) => {
            state.showSlidebar = false;
        },
        toggleSuggestion: (state) => {
            state.suggestionBox = !state.suggestionBox;
        },
        showSuggestion: (state) => {
            state.suggestionBox = true;
        },
        hideSuggestion: (state) => {
            state.suggestionBox = false;
        },
    }
})

export const { toggleSlidebar, closeSlidebar, toggleSuggestion, showSuggestion, hideSuggestion } = appSlice.actions;
export default appSlice.reducer;