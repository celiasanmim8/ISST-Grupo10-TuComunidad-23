package es.upm.dit.isst.grupo10tucomunidad.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import es.upm.dit.isst.grupo10tucomunidad.model.DatosVecino;
import es.upm.dit.isst.grupo10tucomunidad.model.ERol;
import es.upm.dit.isst.grupo10tucomunidad.model.Rol;
import es.upm.dit.isst.grupo10tucomunidad.model.Usuario;
import es.upm.dit.isst.grupo10tucomunidad.payload.request.LoginRequest;
import es.upm.dit.isst.grupo10tucomunidad.payload.request.SignupRequest;
import es.upm.dit.isst.grupo10tucomunidad.payload.response.JwtResponse;
import es.upm.dit.isst.grupo10tucomunidad.payload.response.MessageResponse;
import es.upm.dit.isst.grupo10tucomunidad.repository.RolRepository;
import es.upm.dit.isst.grupo10tucomunidad.repository.UsuarioRepository;
import es.upm.dit.isst.grupo10tucomunidad.security.jwt.JwtUtils;
import es.upm.dit.isst.grupo10tucomunidad.service.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UsuarioRepository userRepository;

    @Autowired
    RolRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getTlfNumber(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByTlfNumber(signUpRequest.getTlfNumber())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        // Create new user's account
        Usuario user = new Usuario(signUpRequest.getTlfNumber(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRol();
        Set<Rol> roles = new HashSet<>();
        DatosVecino datosVecino = signUpRequest.getDatosVecino();

        if (strRoles == null) {
            Rol userRole = roleRepository.findByNombre(ERol.ROLE_VECINO)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Rol adminRole = roleRepository.findByNombre(ERol.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "mod":
                        Rol modRole = roleRepository.findByNombre(ERol.ROLE_PRESIDENTE)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Rol userRole = roleRepository.findByNombre(ERol.ROLE_VECINO)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        user.setDatosVecino(datosVecino);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}
