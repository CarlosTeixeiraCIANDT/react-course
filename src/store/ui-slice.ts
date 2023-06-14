import { createSlice } from "@reduxjs/toolkit";

export type NotificationType = {
    status: string;
    title: string;
    message: string;
};

export type UiState = {
    visible: boolean;
    notification: NotificationType | null;
};

const initialState: UiState = {
    visible: false,
    notification: null,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggle(state) {
            state.visible = !state.visible;
        },
        showNot(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

const uiReducer = uiSlice.reducer;
const uiActions = uiSlice.actions;

export { uiReducer, uiActions };
