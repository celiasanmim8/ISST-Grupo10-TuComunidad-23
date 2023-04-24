package es.upm.dit.isst.grupo10tucomunidad.payload.request;

import javax.validation.constraints.NotBlank;

public class LoginRequest {
    @NotBlank
    private String tlfNumber;

    @NotBlank
    private String password;

    public String getTlfNumber() {
        return tlfNumber;
    }

    public void setTlfNumber(String tlfNumber) {
        this.tlfNumber = tlfNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
