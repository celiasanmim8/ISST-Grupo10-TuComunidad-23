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
import es.upm.dit.isst.grupo10tucomunidad.model.Sugerencia;
import es.upm.dit.isst.grupo10tucomunidad.repository.SugerenciaRepository;

@RestController
public class SugerenciaController {
    private final SugerenciaRepository sugerenciaRepository;
    public SugerenciaController(SugerenciaRepository n) {
        this.sugerenciaRepository = n;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/sugerencias")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE') or hasRole('VECINO')")
    List<Sugerencia> readAll() {
        return (List<Sugerencia>) sugerenciaRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/sugerencias")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE') or hasRole('VECINO')")
    ResponseEntity<Sugerencia> create(@RequestBody Sugerencia newNSugerencia) throws URISyntaxException {
        Sugerencia res = sugerenciaRepository.save(newNSugerencia);
        return ResponseEntity.created(new URI("/sugerencias/" + res.getId())).body(res);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/sugerencias/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE') or hasRole('VECINO')")
    ResponseEntity<Sugerencia> update(@RequestBody Sugerencia newNSugerencia, @PathVariable String id) {
        return sugerenciaRepository.findById(id).map(sugerencia -> {
            sugerenciaRepository.save(sugerencia);
            return ResponseEntity.ok().body(sugerencia);
        }).orElse(new ResponseEntity<Sugerencia>(HttpStatus.NOT_FOUND));
    }
}
