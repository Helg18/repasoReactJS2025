import axios from "axios";

const BASE_URL = "https://randomfox.ca/floof/"; // Ejemplo de URL base
const request = axios.create({
    baseURL: BASE_URL,
});

class Api {
    getNewDog = async () => request.get()
        .then(function (response) {
            // handle success
            return response.data.image;
        });
}

export default new Api();