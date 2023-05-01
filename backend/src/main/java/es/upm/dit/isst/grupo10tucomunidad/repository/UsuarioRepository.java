package es.upm.dit.isst.grupo10tucomunidad.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import es.upm.dit.isst.grupo10tucomunidad.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, String> {
    Optional<Usuario> findByTlfNumber(String tlfNumber);
    Boolean existsByTlfNumber(String tlfNumber);
}
