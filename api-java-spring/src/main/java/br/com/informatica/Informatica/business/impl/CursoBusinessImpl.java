package br.com.informatica.Informatica.business.impl;

import br.com.informatica.Informatica.business.CursoBusiness;
import br.com.informatica.Informatica.exception.InvalidParamsException;
import br.com.informatica.Informatica.exception.NotFoundException;
import br.com.informatica.Informatica.model.Curso;
import br.com.informatica.Informatica.model.Materia;
import br.com.informatica.Informatica.model.Turma;
import br.com.informatica.Informatica.repository.CursoRepository;
import br.com.informatica.Informatica.repository.MateriaRepository;
import br.com.informatica.Informatica.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CursoBusinessImpl implements CursoBusiness {

    private CursoRepository cursoRepository;
    private MateriaRepository materiaRepository;
    private TurmaRepository turmaRepository;

    @Autowired
    public CursoBusinessImpl(CursoRepository cursoRepository, MateriaRepository materiaRepository, TurmaRepository turmaRepository) {
        this.cursoRepository = cursoRepository;
        this.materiaRepository = materiaRepository;
        this.turmaRepository = turmaRepository;
    }

    @Override
    public Page<Curso> findAll(Pageable pageable) {
        return cursoRepository.findAll(pageable);
    }

    @Override
    public Curso findById(int id) {
        return cursoRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Curso com ID " + id + " não foi encontrado!"));
    }

    @Override
    public Curso save(Curso curso) {
        if (curso.getMaterias() == null) {
            throw new InvalidParamsException("Erro: Materias são obrigatórias!");
        }

        if (curso.getTurmas() == null) {
            throw new InvalidParamsException("Erro: Turmas são obrigatórias!");
        }

        for (Materia m : curso.getMaterias()) {
            Optional<Curso> oc = cursoRepository.findById(m.getId());

            if (oc.equals(Optional.empty())) {
                throw new NotFoundException("Erro: Materia com ID:" + m.getId() + " não existe!");
            }
        }

        for (Turma t : curso.getTurmas()) {
            Optional<Turma> ot = turmaRepository.findById(t.getId());

            if (ot.equals(Optional.empty())) {
                throw new NotFoundException("Erro: Turma com ID:" + t.getId() + " não existe!");
            }
        }

        return cursoRepository.save(curso);
    }

    @Override
    public void deleteById(int id) {
        cursoRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Curso com ID " + id + " não foi encontrado!"));
        cursoRepository.deleteById(id);
    }

    @Override
    public Curso put(int id, Curso curso) {

        if (curso.getMaterias() == null) {
            throw new InvalidParamsException("Erro: Materias são obrigatórias!");
        }

        if (curso.getTurmas() == null) {
            throw new InvalidParamsException("Erro: Turmas são obrigatórias!");
        }

        for (Materia m : curso.getMaterias()) {
            Optional<Curso> ot = cursoRepository.findById(m.getId());

            if (ot.equals(Optional.empty())) {
                throw new NotFoundException("Erro: Materia com ID:" + m.getId() + " não existe!");
            }
        }

        for (Turma t : curso.getTurmas()) {
            Optional<Curso> ot = cursoRepository.findById(t.getId());

            if (ot.equals(Optional.empty())) {
                throw new NotFoundException("Erro: Turma com ID:" + t.getId() + " não existe!");
            }
        }

        try {
            Curso cur = cursoRepository.findById(id).get();
            curso.setId(id);
            return cursoRepository.save(curso);
        } catch (Exception ex) {
            return null;
        }
    }
}
