package br.com.informatica.Informatica.repository;

import org.springframework.stereotype.Repository;
import br.com.informatica.Informatica.model.Materia;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MateriaRepository extends JpaRepository<Materia, Integer> {
}