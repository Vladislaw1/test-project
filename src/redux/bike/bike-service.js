import BaseHttpService from "../../shared/service/base-http-service";

class BikeService extends BaseHttpService{
    async getAllBike(endpoint){
        try {
            const data = await this.get(endpoint)
            // console.log(data)
            return data
        }catch (e) {

        }
    }
    async addBike(endpoint,body){
        try {
            const data = await this.post(endpoint,body)
            console.log(data)
            return data
        }catch (e) {
            console.log(e)
            return e
        }
    }

    async updateBike(endpoint,body,id){
        try {
            const data = await this.patch(endpoint,body,id)
            return data
        }catch (e) {
            // console.log(e)
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