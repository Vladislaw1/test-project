import {createAction} from "@reduxjs/toolkit";

export const getAllBikeRequest = createAction("getAllBikeRequest");
export const getAllBikeSuccess = createAction("getAllBikeSuccess");
export const getAllBikeError = createAction("getAllBikeError");

export const addNewBikeRequest = createAction("addNewBikeRequest");
export const addNewBikeSuccess = createAction("addNewBikeSuccess");
export const addNewBikeError = createAction("addNewBikeError");

export const updateBikeRequest = createAction("updateBikeRequest");
export const updateBikeSuccess = createAction("updateBikeSuccess");
export const updateBikeError = createAction("updateBikeError");

export const deleteBikeRequest = createAction("deleteBikeRequest");
export const deleteBikeSuccess = createAction("deleteBikeSuccess");
export const deleteBikeError = createAction("deleteBikeError");

const action = {
    getAllBikeRequest,getAllBikeSuccess,getAllBikeError,
    addNewBikeRequest,addNewBikeSuccess,addNewBikeError,
    updateBikeRequest,updateBikeSuccess,updateBikeError,
    deleteBikeRequest,deleteBikeSuccess,deleteBikeError
}

export default action;