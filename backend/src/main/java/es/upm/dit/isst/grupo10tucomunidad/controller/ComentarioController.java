package es.upm.dit.isst.grupo10tucomunidad.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.grupo10tucomunidad.model.Comentario;
import es.upm.dit.isst.grupo10tucomunidad.repository.ComentarioRepository;

@RestController
public class ComentarioController {
    private final ComentarioRepository comentarioRepository;
    public ComentarioController(ComentarioRepository n) {
        this.comentarioRepository = n;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/sugerencias/responder")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE') or hasRole('VECINO')")
    List<Comentario> readAll() {
        return (List<Comentario>) comentarioRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/sugerencias/responder")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE')")
    ResponseEntity<Comentario> create(@RequestBody Comentario newComentario) throws URISyntaxException {
        Comentario res = comentarioRepository.save(newComentario);
        return ResponseEntity.created(new URI("/sugerencias/responder/")).body(res);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/sugerencias/responder")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE')")
    ResponseEntity<Comentario> update(@RequestBody Comentario newComentario, @PathVariable String id) {
        return comentarioRepository.findById(id).map(comentario -> {
            comentarioRepository.save(comentario);
            return ResponseEntity.ok().body(comentario);
        }).orElse(new ResponseEntity<Comentario>(HttpStatus.NOT_FOUND));
    }
}   
