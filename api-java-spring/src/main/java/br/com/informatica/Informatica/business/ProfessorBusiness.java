package br.com.informatica.Informatica.business;

import br.com.informatica.Informatica.model.Professor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProfessorBusiness {
    Page<Professor> findAll(Pageable pageable);
    Professor findById(int id);
    Professor save(Professor professor);
    void deleteById(int id);
    Professor put(int id, Professor professor);
}
