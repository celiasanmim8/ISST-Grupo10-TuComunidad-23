package es.upm.dit.isst.grupo10tucomunidad.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import es.upm.dit.isst.grupo10tucomunidad.model.Noticia;

public interface NoticiaRepository extends CrudRepository<Noticia, String> {
}