package es.upm.dit.isst.grupo10tucomunidad.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comentario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 50000)
    private String descripcion;
    private Long sugerenciaId;
    private Long userId;
    public Comentario() {
    }
    public Comentario(Long id, String descripcion, Long sugerenciaId, Long userId) {
        this.id = id;
        this.descripcion = descripcion;
        this.sugerenciaId = sugerenciaId;
        this.userId = userId;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public Long getSugerenciaId() {
        return sugerenciaId;
    }
    public void setSugerenciaId(Long sugerenciaId) {
        this.sugerenciaId = sugerenciaId;
    }
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    
}

