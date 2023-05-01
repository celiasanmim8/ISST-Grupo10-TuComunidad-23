package es.upm.dit.isst.grupo10tucomunidad.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import es.upm.dit.isst.grupo10tucomunidad.model.ERol;
import es.upm.dit.isst.grupo10tucomunidad.model.Rol;

public interface RolRepository extends CrudRepository<Rol, String> {
    Optional<Rol> findByNombre(ERol nombre);
}