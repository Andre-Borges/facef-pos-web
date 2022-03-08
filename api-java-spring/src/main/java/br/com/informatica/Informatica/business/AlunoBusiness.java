package br.com.informatica.Informatica.business;

import br.com.informatica.Informatica.model.Aluno;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AlunoBusiness {
    Page<Aluno> findAll(Pageable pageable);
    Page<Aluno> findAllByNomeContains(Pageable pageable, String name);
    Aluno findById(int id);
    Aluno save(Aluno aluno);
    void deleteById(int id);
    Aluno put(int id, Aluno aluno);
}
