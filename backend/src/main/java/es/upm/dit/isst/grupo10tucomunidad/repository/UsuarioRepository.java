package es.upm.dit.isst.grupo10tucomunidad.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import es.upm.dit.isst.grupo10tucomunidad.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByTlfNumber(String tlfNumber);
    Boolean existsByTlfNumber(String tlfNumber);
}
