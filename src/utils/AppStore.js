import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import LiveSlice from "./LiveSlice";

const AppStore = configureStore({
    reducer: {
        app: appSlice,
        live: LiveSlice,
    }
})

export default AppStore;