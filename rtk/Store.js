import { configureStore } from "@reduxjs/toolkit";
import blockBTNSlice  from "./Slices/Slice";
export let store = configureStore ({
    reducer: {
        block : blockBTNSlice
    }
})

export default store;