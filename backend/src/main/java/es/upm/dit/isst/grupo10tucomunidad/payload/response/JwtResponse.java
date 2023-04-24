package es.upm.dit.isst.grupo10tucomunidad.payload.response;

import java.util.List;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String tlfNumber;
    private List<String> roles;

    public JwtResponse(String accessToken, Long id, String tlfNumber, List<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.tlfNumber = tlfNumber;
        this.roles = roles;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTlfNumber() {
        return tlfNumber;
    }

    public void setTlfNumber(String tlfNumber) {
        this.tlfNumber = tlfNumber;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
