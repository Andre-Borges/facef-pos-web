package br.com.informatica.Informatica.repository;

import br.com.informatica.Informatica.model.Turma;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TurmaRepository extends JpaRepository<Turma, Integer> {
}
