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
import es.upm.dit.isst.grupo10tucomunidad.model.Junta;
import es.upm.dit.isst.grupo10tucomunidad.repository.JuntaRepository;

@RestController
public class JuntaController {
    private final JuntaRepository juntaRepository;
    public JuntaController(JuntaRepository n) {
        this.juntaRepository = n;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/juntas")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE') or hasRole('VECINO')")
    List<Junta> readAll() {
        return (List<Junta>) juntaRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/juntas")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE')")
    ResponseEntity<Junta> create(@RequestBody Junta newJunta) throws URISyntaxException {
        Junta res = juntaRepository.save(newJunta);
        return ResponseEntity.created(new URI("/juntas/" + res.getId())).body(res);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/juntas/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE')")
    ResponseEntity<Junta> update(@RequestBody Junta newJunta, @PathVariable String JuntaID) {
        return juntaRepository.findById(JuntaID).map(junta -> {
            juntaRepository.save(junta);
            return ResponseEntity.ok().body(junta);
        }).orElse(new ResponseEntity<Junta>(HttpStatus.NOT_FOUND));
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/juntas/{id}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE')")
    ResponseEntity<Junta> delete(@PathVariable String JuntaID) {
        juntaRepository.deleteById(JuntaID);
      return ResponseEntity.ok().body(null);

    }
}

