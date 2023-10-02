import { configureStore } from "@reduxjs/toolkit"
import contactReducer from "../features/homeSlice"


export const store = configureStore({
reducer : contactReducer,

})