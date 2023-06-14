import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { counterReducer } from "./counter";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

// type Action = {
//     type: string;
//     value: number;
// };

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

export { store };
