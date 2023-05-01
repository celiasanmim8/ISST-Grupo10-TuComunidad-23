package es.upm.dit.isst.grupo10tucomunidad.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Junta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long juntaID;
    private String titulo;
    private String descripcion;
    private LocalDateTime fechaCreacion;

    public Junta() {
    }
    public Junta(long juntaID, LocalDateTime fechaCreacion, String titulo, String descripcion) {
        this.juntaID = juntaID;
        this.fechaCreacion = fechaCreacion;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }
    public void setFechaCreacion(LocalDateTime fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public Long getJuntaID() {
        return juntaID;
    }
    public void setJuntaID(Long juntaID) {
        this.juntaID = juntaID;
    }
}
