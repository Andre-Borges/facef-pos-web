package br.com.informatica.Informatica.business.impl;

import br.com.informatica.Informatica.business.ProfessorBusiness;
import br.com.informatica.Informatica.exception.NotFoundException;
import br.com.informatica.Informatica.model.Professor;
import br.com.informatica.Informatica.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfessorBusinessImpl implements ProfessorBusiness {
    private ProfessorRepository professorRepository;

    @Autowired
    public ProfessorBusinessImpl(ProfessorRepository professorRepository) {
        this.professorRepository = professorRepository;
    }

    @Override
    public Page<Professor> findAll(Pageable pageable) {
        return professorRepository.findAll(pageable);
    }

    @Override
    public Professor findById(int id) {
        return professorRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Professor com ID " + id + " não foi encontrado!"));
    }

    @Override
    public Professor save(Professor professor) {
        return professorRepository.save(professor);
    }

    @Override
    public void deleteById(int id) {
        professorRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Professor com ID " + id + " não foi encontrado!"));
        professorRepository.deleteById(id);
    }

    @Override
    public Professor put(int id, Professor professor) {

        try {
            Professor profe = professorRepository.findById(id).get();
            professor.setId(id);
            return professorRepository.save(professor);
        } catch (Exception ex) {
            throw new NotFoundException("Professor com ID: " + id + " não existe!");
        }
    }
}
