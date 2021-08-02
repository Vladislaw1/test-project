import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {
    addNewBikeError,
    addNewBikeSuccess, deleteBikeError,
    deleteBikeRequest,
    deleteBikeSuccess,
    getAllBikeError,
    getAllBikeRequest,
    getAllBikeSuccess, updateBikeSuccess
} from "./bike-action";

const bikes = createReducer([], {
    [getAllBikeSuccess]: (_, {payload}) => payload,
    [addNewBikeSuccess]: (state, {payload}) => [...state, payload],
    [updateBikeSuccess]: (state, {payload}) => {
        const index = state.findIndex((item) => item.id === payload.result.id)
        if (index !== -1) {
            state[index] = payload.result
        }
    },
    [deleteBikeSuccess]: (state, {payload}) => {
        const idx = state.findIndex(item => item._id === payload)
        if(idx !== -1){
            state.splice(idx,1)
        }
    },
})

const loading = createReducer(false, {
    [getAllBikeRequest]: () => true,
    [getAllBikeSuccess]: () => false,
    [getAllBikeError]: () => false,
    [deleteBikeRequest]: () => true,
    [deleteBikeSuccess]: () => false,
    [deleteBikeError]: () => false,
})

const error = createReducer(null, {
    [getAllBikeError]: (_, {payload}) => payload,
    [addNewBikeError]: (_, {payload}) => payload
})

export default combineReducers({
    bikes,
    loading,
    error
})