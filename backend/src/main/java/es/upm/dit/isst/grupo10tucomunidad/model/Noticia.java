package es.upm.dit.isst.grupo10tucomunidad.model;

import java.time.LocalDateTime;

import javax.persistence.*;

@Entity
public class Noticia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 5000)
    private String titulo;
    
    @Column(length = 50000)
    private String descripcion;

    private Long userId;

    private LocalDateTime fechaCreacion;

    @Lob
    private byte[] adjunto;

    public Noticia(Long id, String titulo, String descripcion, Long userId, LocalDateTime fechaCreacion,
            byte[] adjunto) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.userId = userId;
        this.fechaCreacion = fechaCreacion;
        this.adjunto = adjunto;
    }

    public Noticia() {
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

    public byte[] getAdjunto() {
        return adjunto;
    }

    public void setAdjunto(byte[] adjunto) {
        this.adjunto = adjunto;
    }
}