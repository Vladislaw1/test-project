import {
    addNewBikeError,
    addNewBikeRequest,
    addNewBikeSuccess, deleteBikeError, deleteBikeRequest, deleteBikeSuccess,
    getAllBikeError,
    getAllBikeRequest,
    getAllBikeSuccess, updateBikeError, updateBikeRequest, updateBikeSuccess
} from "./bike-action";

import BikeService from "./bike-service";
import {addNewBikePoint, allBikePoint} from "./endpoint";
import axios from "axios";

const service = new BikeService();

export const getALlBike = () => async dispatch => {
    dispatch(getAllBikeRequest())
    try {
        const {data: {result}} = await service.getAllBike(allBikePoint)
        dispatch(getAllBikeSuccess(result))
    } catch (e) {
        console.log(e)
        dispatch(getAllBikeError(e.message))
    }
}
export const addNewBike = (body) => async dispatch => {
    // dispatch(addNewBikeRequest())
    // try {
    //     const {data: {result}} = await axios.post("http://localhost:4002/api/v1/bikes", body)
    //     dispatch(addNewBikeSuccess(result))
    // } catch (e) {
    //     console.log(e.response.data)
    //     dispatch(addNewBikeError(e.response.data.message))
    // }
    dispatch(addNewBikeRequest())
    try {
        const response = await service.addBike(addNewBikePoint, body)
        console.log(response)
        // dispatch(addNewBikeSuccess(response.data.result))
    } catch (e) {
        console.log(e)
        dispatch(addNewBikeError(e))
    }
}
export const updateBike = (body, id) => async dispatch => {
    const data = {status: body}
    dispatch(updateBikeRequest())
    try {
        const {data: result} = await service.patch(allBikePoint, data, id)
        dispatch(updateBikeSuccess(result))
    } catch (e) {
        dispatch(updateBikeError(e.message))
    }
}
export const deleteBike = (id) => async dispatch => {
    dispatch(deleteBikeRequest())
    try {
        await service.deleteBike(allBikePoint, id)
        dispatch(deleteBikeSuccess(id))
    } catch (e) {
        dispatch(deleteBikeError(e.message))
    }
}