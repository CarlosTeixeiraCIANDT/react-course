import { createSlice } from "@reduxjs/toolkit";

const initialState: { counter: number; visible: boolean } = {
    counter: 0,
    visible: true,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.visible = !state.visible;
        },
    },
});

const counterReducer = counterSlice.reducer;
const counterActions = counterSlice.actions;
export { counterReducer, counterActions };
