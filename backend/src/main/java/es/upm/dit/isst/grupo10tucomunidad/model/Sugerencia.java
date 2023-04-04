package es.upm.dit.isst.grupo10tucomunidad.model;

import java.time.LocalDateTime;

import javax.persistence.*;

@Entity
public class Sugerencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 5000)
    private String titulo;
    
    @Column(length = 50000)
    private String descripcion;

    private Long userId;

    private LocalDateTime fechaCreacion;


    public Sugerencia(Long id, String titulo, String descripcion, Long userId, LocalDateTime fechaCreacion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.userId = userId;
        this.fechaCreacion = fechaCreacion;
    }

    public Sugerencia() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDateTime getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(LocalDateTime fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
}