import axios from "axios";

class BaseHttpService {

    BASE_URL = "https://backand-bikes.herokuapp.com";

    async get(endpoint = '') {
        try {
            const {data} = await axios.get(`${this.BASE_URL}/${endpoint}`)
            return data
        } catch (e) {
            return this.handleError(e)
        }
    }

    async post(endpoint = '', body) {
        try {
            const data = await axios.post(`${this.BASE_URL}/${endpoint}`, body)
            return data
        } catch (e) {
            console.log(e)
            return e
        }
    }

    async patch(endpoint = '', body, id) {
        try {
            const {data} = await axios.patch(`${this.BASE_URL}/${endpoint}/${id}`, body)
            return data
        } catch (e) {
            return this.handleError(e)
        }
    }

    async delete(endpoint = '', id) {
        try {
            const {data} = await axios.delete(`${this.BASE_URL}/${endpoint}/${id}`)
            return data
        } catch (e) {
            return this.handleError(e)
        }
    }

    handleError(error) {
        const {statusCode} = error.response.data;

        if (statusCode !== 401) {
            return error;
        }
    }
}

export default BaseHttpService;