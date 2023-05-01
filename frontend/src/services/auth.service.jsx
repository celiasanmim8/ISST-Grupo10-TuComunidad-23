import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    async login(tlfNumber, password) {
        const response = await axios
            .post(API_URL + "signin", {
                tlfNumber,
                password
            });
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

const authServiceInstance = new AuthService();

export default authServiceInstance;