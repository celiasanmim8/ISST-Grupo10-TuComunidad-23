package es.upm.dit.isst.grupo10tucomunidad.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import es.upm.dit.isst.grupo10tucomunidad.model.ERol;
import es.upm.dit.isst.grupo10tucomunidad.model.Rol;

public interface RolRepository extends JpaRepository<Rol, Long> {
    Optional<Rol> findByNombre(ERol nombre);
}