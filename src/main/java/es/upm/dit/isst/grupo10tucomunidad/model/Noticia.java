package es.upm.dit.isst.grupo10tucomunidad.model;

import java.time.LocalDateTime;

import javax.persistence.*;

@Entity
public class Noticia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    
    private String content;

    private Long creatorId;

    private LocalDateTime creationDate;

    @Lob
    private byte[] attachment;

    public Noticia(Long id, String title, String content, Long creatorId, LocalDateTime creationDate,
            byte[] attachment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.creatorId = creatorId;
        this.creationDate = creationDate;
        this.attachment = attachment;
    }

    public Noticia() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(Long creatorId) {
        this.creatorId = creatorId;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public byte[] getAttachment() {
        return attachment;
    }

    public void setAttachment(byte[] attachment) {
        this.attachment = attachment;
    }
}