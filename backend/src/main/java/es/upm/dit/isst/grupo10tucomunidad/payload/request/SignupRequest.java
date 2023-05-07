package es.upm.dit.isst.grupo10tucomunidad.payload.request;

import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import es.upm.dit.isst.grupo10tucomunidad.model.DatosVecino;

public class SignupRequest {
    @NotBlank
    @Size(min = 9, max = 9)
    private String tlfNumber;

    private Set<String> rol;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    private DatosVecino datosVecino;

    public String getTlfNumber() {
        return tlfNumber;
    }

    public void setTlfNumber(String tlfNumber) {
        this.tlfNumber = tlfNumber;
    }

    public Set<String> getRol() {
        return rol;
    }

    public void setRol(Set<String> rol) {
        this.rol = rol;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public DatosVecino getDatosVecino() {
        return datosVecino;
    }

    public void setDatosVecino(DatosVecino datosVecino) {
        this.datosVecino = datosVecino;
    }
}
