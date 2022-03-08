package br.com.informatica.Informatica.business;

import br.com.informatica.Informatica.model.Materia;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface MateriaBusiness {
    Page<Materia> findAll(Pageable pageable);
    Materia findById(int id);
    Materia save(Materia materia);
    void deleteById(int id);
    Materia put(int id, Materia materia);
}
