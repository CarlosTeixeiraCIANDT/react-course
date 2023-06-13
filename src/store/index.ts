import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState: { counter: number; visible: boolean } = {
    counter: 0,
    visible: true,
};
// type Action = {
//     type: string;
//     value: number;
// };

const counterSlice = createSlice({
    name: "counter",
    initialState,
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

const store = configureStore({
    reducer: counterSlice.reducer,
});

const counterActions = counterSlice.actions;

// const counterReducer = (state = initState, action: Action) => {
//     if (action.type === "INCREMENT") {
//         return {
//             ...state,
//             counter: state.counter + 1,
//         };
//     }

//     if (action.type === "DECREMENT") {
//         return {
//             ...state,
//             counter: state.counter - 1,
//         };
//     }

//     if (action.type === "INCREASE") {
//         return {
//             ...state,
//             counter: state.counter + action.value,
//         };
//     }

//     if (action.type === "TOGGLE") {
//         return {
//             ...state,
//             visible: !state.visible,
//         };
//     }

//     return state;
// };

// const store = createStore(counterReducer);

export { store, counterActions };
