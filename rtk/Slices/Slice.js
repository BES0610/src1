import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";
let individual ;
let HR ;
let click1 ;
export let blockBTNSlice = createSlice({
    initialState: [],
    name: "scrolingSlice",
    reducers : {
        
        BlockIndFun : () => {
            individual.classList.add("DisplayBlock")
            HR.classList.remove("DisplayBlock")
        },

        BlockHrFun : () => {
            HR.classList.add("DisplayBlock")
            individual.classList.remove("DisplayBlock")
        },


        // clickid1 : () => {
            
        // }
    }
})

export let {BlockIndFun, BlockHrFun} = blockBTNSlice.actions;

export default blockBTNSlice.reducer;