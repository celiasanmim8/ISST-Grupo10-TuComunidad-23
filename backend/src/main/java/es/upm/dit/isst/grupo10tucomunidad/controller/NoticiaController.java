package es.upm.dit.isst.grupo10tucomunidad.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/noticias")
    List<Noticia> readAll() {
        return (List<Noticia>) noticiaRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/noticias")
    ResponseEntity<Noticia> create(@RequestBody Noticia newNoticia) throws URISyntaxException {
        Noticia res = noticiaRepository.save(newNoticia);
        return ResponseEntity.created(new URI("/noticias/" + res.getId())).body(res);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/noticias/{id}")
    ResponseEntity<Noticia> update(@RequestBody Noticia newNoticia, @PathVariable String id) {
        return noticiaRepository.findById(id).map(noticia -> {
            noticiaRepository.save(noticia);
            return ResponseEntity.ok().body(noticia);
        }).orElse(new ResponseEntity<Noticia>(HttpStatus.NOT_FOUND));
    }
}
