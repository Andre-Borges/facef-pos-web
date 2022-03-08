package br.com.informatica.Informatica.repository;

import br.com.informatica.Informatica.model.Aluno;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Integer> {
    Page<Aluno> findAllByNomeContains(Pageable pageable, String nome);
}
