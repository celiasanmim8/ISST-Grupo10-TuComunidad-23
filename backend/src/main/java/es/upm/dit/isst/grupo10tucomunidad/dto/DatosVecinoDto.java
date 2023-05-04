package es.upm.dit.isst.grupo10tucomunidad.dto;

import es.upm.dit.isst.grupo10tucomunidad.model.DatosVecino;

public class DatosVecinoDto {
    private int piso;
    private String letra;
    private String dni;

    public DatosVecinoDto(DatosVecino datosVecino) {
        if (datosVecino != null) {
            this.piso = datosVecino.getPiso();
            this.letra = datosVecino.getLetra();
            this.dni = datosVecino.getDni();
        }
    }

    public int getPiso() {
        return piso;
    }

    public void setPiso(int piso) {
        this.piso = piso;
    }

    public String getLetra() {
        return letra;
    }

    public void setLetra(String letra) {
        this.letra = letra;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

}

