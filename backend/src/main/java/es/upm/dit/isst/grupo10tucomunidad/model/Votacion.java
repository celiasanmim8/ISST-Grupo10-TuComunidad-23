package es.upm.dit.isst.grupo10tucomunidad.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Votacion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String voto;
    private Long juntaId;
    private Long userId;
    public Votacion(Long id, String voto, Long juntaId, Long userId) {
        this.id = id;
        this.voto = voto;
        this.juntaId = juntaId;
        this.userId = userId;
    }
    public Votacion() {
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getVoto() {
        return voto;
    }
    public void setVoto(String voto) {
        this.voto = voto;
    }
    public Long getJuntaId() {
        return juntaId;
    }
    public void setJuntaId(Long juntaId) {
        this.juntaId = juntaId;
    }
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    
}
