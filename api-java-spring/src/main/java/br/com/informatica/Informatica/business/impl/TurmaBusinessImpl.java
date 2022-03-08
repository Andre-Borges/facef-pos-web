package br.com.informatica.Informatica.business.impl;

import br.com.informatica.Informatica.business.TurmaBusiness;
import br.com.informatica.Informatica.exception.InvalidParamsException;
import br.com.informatica.Informatica.exception.NotFoundException;
import br.com.informatica.Informatica.model.Curso;
import br.com.informatica.Informatica.model.Turma;
import br.com.informatica.Informatica.repository.CursoRepository;
import br.com.informatica.Informatica.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TurmaBusinessImpl implements TurmaBusiness {

    private TurmaRepository turmaRepository;
    private CursoRepository cursoRepository;

    @Autowired
    public TurmaBusinessImpl(TurmaRepository turmaRepository, CursoRepository cursoRepository) {
        this.turmaRepository = turmaRepository;
        this.cursoRepository = cursoRepository;
    }

    @Override
    public Page<Turma> findAll(Pageable pageable) {
        return turmaRepository.findAll(pageable);
    }

    @Override
    public Turma findById(int id) {
        return turmaRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Turma com ID " + id + " Não foi encontrada"));
    }

    @Override
    public Turma save(Turma turma) {
        if(turma.getCurso() == null){
            throw new InvalidParamsException("Erro: Curso é obrigatório!");
        }

        Optional<Curso> oc = cursoRepository.findById(turma.getCurso().getId());

        if (oc.equals(Optional.empty())) {
            throw new NotFoundException("Erro: Curso com ID: " + turma.getCurso().getId() + " não existe!");
        }

        return turmaRepository.save(turma);
    }

    @Override
    public void deleteById(int id) {
        turmaRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Turma com ID " + id + " não foi encontrado!"));
        turmaRepository.deleteById(id);
    }

    @Override
    public Turma put(int id, Turma turma) {
        Optional<Curso> oc = cursoRepository.findById(turma.getCurso().getId());

        if (oc.equals(Optional.empty())) {
            throw new NotFoundException("Erro: Curso com ID: " + turma.getCurso().getId() + " não existe!");
        }

        try {
            Turma tur = turmaRepository.findById(id).get();
            turma.setId(id);
            return turmaRepository.save(turma);
        } catch (Exception ex) {
            return null;
        }
    }

}
