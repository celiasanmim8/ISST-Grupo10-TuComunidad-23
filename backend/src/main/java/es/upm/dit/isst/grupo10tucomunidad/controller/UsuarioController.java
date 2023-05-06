package es.upm.dit.isst.grupo10tucomunidad.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.grupo10tucomunidad.dto.UsuarioDto;
import es.upm.dit.isst.grupo10tucomunidad.model.Usuario;
import es.upm.dit.isst.grupo10tucomunidad.repository.UsuarioRepository;

@RestController
public class UsuarioController {
    private final UsuarioRepository usuarioRepository;
    public UsuarioController(UsuarioRepository u) {
        this.usuarioRepository = u;
    }

    @GetMapping("/gestionusuarios")
    @CrossOrigin(origins = "http://localhost:3000")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VECINO') or hasRole('PRESIDENTE')")
    ResponseEntity<List<UsuarioDto>> readAll() {
        List<Usuario> usuarios = (List<Usuario>) usuarioRepository.findAll();
        List<UsuarioDto> usuarioDto = usuarios.stream().map(UsuarioDto::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(usuarioDto);
    }
}
