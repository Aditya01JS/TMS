import { createAction, createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";
import store from "./store";


const boardsSlice = createSlice({
    name: 'boards',
    initialState : data.boards ,
    reducers : {
        
    }

})
export default boardsSlice;