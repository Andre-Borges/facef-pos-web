package br.com.informatica.Informatica.business.impl;

import br.com.informatica.Informatica.business.MateriaBusiness;
import br.com.informatica.Informatica.exception.InvalidParamsException;
import br.com.informatica.Informatica.exception.NotFoundException;
import br.com.informatica.Informatica.model.Materia;
import br.com.informatica.Informatica.model.Professor;
import br.com.informatica.Informatica.repository.MateriaRepository;
import br.com.informatica.Informatica.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MateriaBusinessImpl  implements MateriaBusiness {
    private MateriaRepository materiaRepository;
    private ProfessorRepository professorRepository;

    @Autowired
    public MateriaBusinessImpl(MateriaRepository materiaRepository, ProfessorRepository professorRepository) {
        this.materiaRepository = materiaRepository;
        this.professorRepository = professorRepository;
    }

    @Override
    public Page<Materia> findAll(Pageable pageable) {
        return materiaRepository.findAll(pageable);
    }

    @Override
    public Materia findById(int id) {
        return materiaRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Matéria com ID " + id + " não foi encontrada!"));
    }

    @Override
    public Materia save(Materia materia) {

        if(materia.getProfessor() == null){
            throw new InvalidParamsException("Erro: Professor é obrigatório!");
        }

        if(!professorRepository.existsById(materia.getProfessor().getId())) {
            throw new NotFoundException("Erro: Professor com ID: " + materia.getProfessor().getId() + " não existe!");
        }

        return materiaRepository.save(materia);
    }

    @Override
    public void deleteById(int id) {
        materiaRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Matéria com ID " + id + " não foi encontrada!"));
        materiaRepository.deleteById(id);
    }

    @Override
    public Materia put(int id, Materia materia) {

        if(materia.getProfessor() == null){
            throw new InvalidParamsException("Erro: Professor é obrigatório!");
        }

        if(!professorRepository.existsById(materia.getProfessor().getId())) {
            throw new NotFoundException("Erro: Professor com ID: " + materia.getProfessor().getId() + " não existe!");
        }

        try {
            Materia mat = materiaRepository.findById(id).get();
            materia.setId(id);
            return materiaRepository.save(materia);
        } catch (Exception ex) {
            throw new NotFoundException("Materia com ID: " + id + " não existe");
        }
    }
}
