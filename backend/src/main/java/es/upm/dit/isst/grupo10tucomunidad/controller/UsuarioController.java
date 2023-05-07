package es.upm.dit.isst.grupo10tucomunidad.controller;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import es.upm.dit.isst.grupo10tucomunidad.dto.UsuarioDto;
import es.upm.dit.isst.grupo10tucomunidad.model.DatosVecino;
import es.upm.dit.isst.grupo10tucomunidad.model.ERol;
import es.upm.dit.isst.grupo10tucomunidad.model.Rol;
import es.upm.dit.isst.grupo10tucomunidad.model.Usuario;
import es.upm.dit.isst.grupo10tucomunidad.repository.DatosVecinoRepository;
import es.upm.dit.isst.grupo10tucomunidad.repository.RolRepository;
import es.upm.dit.isst.grupo10tucomunidad.repository.UsuarioRepository;

@RestController
public class UsuarioController {
    private final UsuarioRepository usuarioRepository;
    private final DatosVecinoRepository datosVecinoRepository;
    private final RolRepository rolRepository;

    public UsuarioController(UsuarioRepository u, DatosVecinoRepository dv, RolRepository r) {
        this.usuarioRepository = u;
        this.datosVecinoRepository = dv;
        this.rolRepository = r;
    }

    @GetMapping("/gestionusuarios")
    @CrossOrigin(origins = "http://localhost:3000")
    @PreAuthorize("hasRole('ADMIN') or hasRole('VECINO') or hasRole('PRESIDENTE')")
    ResponseEntity<List<UsuarioDto>> readAll() {
        List<Usuario> usuarios = (List<Usuario>) usuarioRepository.findAll();
        List<UsuarioDto> usuarioDto = usuarios.stream().map(UsuarioDto::new).collect(Collectors.toList());
        return ResponseEntity.ok().body(usuarioDto);
    }

    @PutMapping("/gestionusuarios/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    @PreAuthorize("hasRole('ADMIN') or hasRole('PRESIDENTE')")
    ResponseEntity<Usuario> update(@RequestBody Usuario newUsuario, @PathVariable Long id) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setTlfNumber(newUsuario.getTlfNumber());

            DatosVecino newDatosVecino = newUsuario.getDatosVecino();
            datosVecinoRepository.save(newDatosVecino);

            Set<Rol> newRoles = newUsuario.getRoles();
            Set<Rol> roles = new HashSet<>();

            newRoles.forEach(rol -> {
                switch (rol.getNombre()) {
                    case ROLE_PRESIDENTE:
                        Rol presidente = rolRepository.findByNombre(ERol.ROLE_PRESIDENTE)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(presidente);
                        break;
                    default:
                        Rol vecino = rolRepository.findByNombre(ERol.ROLE_VECINO)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(vecino);
                }
            });

            usuario.setDatosVecino(newDatosVecino);
            usuario.setRoles(roles);
            usuarioRepository.save(usuario);

            return ResponseEntity.ok().body(usuario);
        }).orElse(new ResponseEntity<Usuario>(HttpStatus.NOT_FOUND));
    }
}
