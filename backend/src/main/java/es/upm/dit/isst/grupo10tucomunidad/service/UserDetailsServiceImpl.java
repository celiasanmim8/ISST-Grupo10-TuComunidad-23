package es.upm.dit.isst.grupo10tucomunidad.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.upm.dit.isst.grupo10tucomunidad.model.Usuario;
import es.upm.dit.isst.grupo10tucomunidad.repository.UsuarioRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String tlfNumber) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByTlfNumber(tlfNumber)
            .orElseThrow(() -> new UsernameNotFoundException("Tlf de usuario no encontrado: " + tlfNumber));
        return UserDetailsImpl.build(usuario);
    }
}
