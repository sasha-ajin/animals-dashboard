import axios from "axios";

export default class AnimalService {
    static async getAll() {
        const response = await axios.get(`animals`);
        return response.data.data;
    }
    static async getOne(id) {
        const response = await axios.get(`animal/${id}`);
        return response.data;
    }
    static async delete(id) {
        const response = await axios
            .delete(`animal/${id}`)
            .then((res) => res.data);
        return response.data;
    }
    static async create(animal) {
        const response = await axios
            .post(`animal`, animal)
            .then((res) => res.data);
        return response;
    }
    static async update(animal, id) {
        const response = await axios
            .put(`animal/${id}`, animal)
            .then((res) => res.data);
        return response;
    }
}
