package es.upm.dit.isst.grupo10tucomunidad.dto;

import java.util.Set;
import java.util.stream.Collectors;

import es.upm.dit.isst.grupo10tucomunidad.model.Usuario;

public class UsuarioDto {
    private Long id;
    private String tlfNumber;
    private Set<RolDto> roles;
    private DatosVecinoDto datosVecino;

    public UsuarioDto(Usuario usuario) {
        this.id = usuario.getId();
        this.tlfNumber = usuario.getTlfNumber();
        this.roles = usuario.getRoles().stream().map(RolDto::new).collect(Collectors.toSet());
        this.datosVecino = new DatosVecinoDto(usuario.getDatosVecino());
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
    
    public void setDatosVecino(DatosVecinoDto datosVecino) {
        this.datosVecino = datosVecino;
    }

    public DatosVecinoDto getDatosVecino() {
        return datosVecino;
    }

    public Set<RolDto> getRoles() {
        return roles;
    }

    public void setRoles(Set<RolDto> roles) {
        this.roles = roles;
    }
}
