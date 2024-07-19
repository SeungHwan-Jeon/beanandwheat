import { configureStore, createSlice } from "@reduxjs/toolkit";

let menuTab = createSlice({
    name: "menuTab",
    initialState: 0,
    reducers: {
        changeTab(state, a) {
            return a.payload;
        },
    },
});
export let { changeTab } = menuTab.actions;

export default configureStore({
    reducer: {
        menuTab: menuTab.reducer,
    },
});
