import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";

class UserService {
  async getNoticias() {
    const response = await fetch(API_URL + "noticias", {
      method: "GET",
      headers: authHeader()
    });
    return response.json();
  }

  async getSugerencias() {
    const response = await fetch(API_URL + "sugerencias", {
      method: "GET",
      headers: authHeader()
    });
    return response.json();
  }

  async getComentarios() {
    const response = await fetch(API_URL + "sugerencias/responder", {
      method: "GET",
      headers: authHeader()
    });
    return response.json();
  }
}

const userServiceInstance = new UserService();

export default userServiceInstance;