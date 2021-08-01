import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import bikesReducer from "./bike/bike-reducer"

const middleware = getDefaultMiddleware(thunk)

export const store = configureStore({
    reducer:{
        bikes: bikesReducer
    },
    middleware
})