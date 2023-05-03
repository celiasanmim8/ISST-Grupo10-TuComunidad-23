package es.upm.dit.isst.grupo10tucomunidad.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table( name="datosvecino",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "DNI")
        })
public class DatosVecino {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int piso;

    @Column(nullable = false, length = 1)
    private String letra;

    @Column(nullable = false, length = 9)
    private String dni;

    public DatosVecino(int piso, String letra, String dni) {
        this.piso = piso;
        this.letra = letra;
        this.dni = dni;
    }

    public DatosVecino() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
