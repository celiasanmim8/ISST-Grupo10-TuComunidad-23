package es.upm.dit.isst.grupo10tucomunidad.dto;

import es.upm.dit.isst.grupo10tucomunidad.model.ERol;
import es.upm.dit.isst.grupo10tucomunidad.model.Rol;

public class RolDto {
    private ERol nombre;

    public RolDto(Rol rol) {
        this.nombre = rol.getNombre();
    }

    public ERol getNombre() {
        return nombre;
    }

    public void setNombre(ERol nombre) {
        this.nombre = nombre;
    }

    // Getters and setters
}

