package br.com.informatica.Informatica.business;

import br.com.informatica.Informatica.model.Curso;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface CursoBusiness {
    Page<Curso> findAll(Pageable pageable);
    Curso findById(int id);
    Curso save(Curso curso);
    void deleteById(int id);
    Curso put(int id, Curso curso);
}
