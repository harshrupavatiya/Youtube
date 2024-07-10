import { createSlice } from "@reduxjs/toolkit";

const LiveSlice = createSlice({
    name: "Live",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
            if(state.messages.length > 40) {
                state.messages.shift();
            }
        }
    }
})

export const { addMessage } = LiveSlice.actions;
export default LiveSlice.reducer;