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
    async getJuntas() {
        const response = await fetch(API_URL + "juntas", {
            method: "GET",
            headers: authHeader()
        });
        return response.json();
    }
    async getVotos() {
        const response = await fetch(API_URL + "juntas/votos", {
            method: "GET",
            headers: authHeader()
        });
        return response.json();
    }
    async getUsuarios() {
        const response = await fetch(API_URL + "gestionusuarios", {
            method: "GET",
            headers: authHeader()
        });
        return response.json();
    }
    async remove(noticiaId) {
        await fetch(`/noticias/${noticiaId}`, {
            method: 'DELETE',
            headers: authHeader()
            
        });
    }
}

const userServiceInstance = new UserService();

export default userServiceInstance;