package br.com.informatica.Informatica.business;

import br.com.informatica.Informatica.model.Turma;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface TurmaBusiness {
    Page<Turma> findAll(Pageable pageable);
    Turma findById(int id);
    Turma save(Turma turma);
    void deleteById(int id);
    Turma put(int id, Turma turma);
}
