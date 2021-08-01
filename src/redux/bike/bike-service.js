import BaseHttpService from "../../shared/service/base-http-service";

class BikeService extends BaseHttpService{
    async getAllBike(endpoint){
        try {
            const data = await this.get(endpoint)
            return data
        }catch (e) {

        }
    }
    async addBike(endpoint,body){
        try {
            const data = await this.post(endpoint,body)
            return data
        }catch (e) {
            return e
        }
    }

    async updateBike(endpoint,body,id){
        try {
            const data = await this.put(endpoint,body,id)
            return data
        }catch (e) {
            return e
        }
    }

    async deleteBike(endpoint,id){
        try {
            const data = await this.delete(endpoint,id)
            return data
        }catch (e) {
            return e
        }
    }
}

export default BikeService;