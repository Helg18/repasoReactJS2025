import axios from "axios";

const BASE_URL = "https://random.dog/woof.json" // Ejemplo de URL base
const request = axios.create({
    baseURL: BASE_URL,
});

class Api {
    getNewDog = async () => request.get()
        .then(function (response) {
            // handle success
            return response.data.url;
        });
}

export default new Api();