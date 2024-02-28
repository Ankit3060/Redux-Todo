import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../Feature/todo/todoSlice";
import todoReducer from "../Feature/todo/todoSlice";

export const store = configureStore({
    reducer:todoReducer
})  