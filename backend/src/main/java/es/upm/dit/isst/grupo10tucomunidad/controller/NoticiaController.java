package es.upm.dit.isst.grupo10tucomunidad.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import es.upm.dit.isst.grupo10tucomunidad.model.Noticia;
import es.upm.dit.isst.grupo10tucomunidad.repository.NoticiaRepository;

@RestController
public class NoticiaController {
    private final NoticiaRepository noticiaRepository;

    public NoticiaController(NoticiaRepository n) {
        this.noticiaRepository = n;
    }

    @GetMapping("/noticias")
    @CrossOrigin(origins = "http://localhost:3000")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE') or hasRole('VECINO')")
    List<Noticia> readAll() {
        return (List<Noticia>) noticiaRepository.findAll();
    }

    @PostMapping("/noticias")
    @CrossOrigin(origins = "http://localhost:3000")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE')")
    ResponseEntity<Noticia> create(@RequestBody Noticia newNoticia) throws URISyntaxException {
        Noticia res = noticiaRepository.save(newNoticia);
        return ResponseEntity.created(new URI("/noticias/" + res.getId())).body(res);
    }

    @PutMapping("/noticias/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE')")
    ResponseEntity<Noticia> update(@RequestBody Noticia newNoticia, @PathVariable String id) {
        return noticiaRepository.findById(id).map(noticia -> {
            noticiaRepository.save(noticia);
            return ResponseEntity.ok().body(noticia);
        }).orElse(new ResponseEntity<Noticia>(HttpStatus.NOT_FOUND));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/noticias/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE')")
    ResponseEntity<Noticia> delete(@PathVariable String id) {
        noticiaRepository.deleteById(id);
        return ResponseEntity.ok().body(null);

    }
}
