package br.com.informatica.Informatica.business.impl;

import br.com.informatica.Informatica.business.AlunoBusiness;
import br.com.informatica.Informatica.exception.InvalidParamsException;
import br.com.informatica.Informatica.exception.NotFoundException;
import br.com.informatica.Informatica.model.Aluno;
import br.com.informatica.Informatica.model.Turma;
import br.com.informatica.Informatica.repository.AlunoRepository;
import br.com.informatica.Informatica.repository.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AlunoBusinessImpl implements AlunoBusiness {

    private AlunoRepository alunoRepository;
    private TurmaRepository turmaRepository;

    @Autowired
    public AlunoBusinessImpl(AlunoRepository alunoRepository, TurmaRepository turmaRepository) {
        this.alunoRepository = alunoRepository;
        this.turmaRepository = turmaRepository;
    }

    @Override
    public Page<Aluno> findAll(Pageable pageable) {
        return alunoRepository.findAll(pageable);
    }

    @Override
    public Page<Aluno> findAllByNomeContains(Pageable pageable, String nome) {
        return alunoRepository.findAllByNomeContains(pageable,nome);
    }

    @Override
    public Aluno findById(int id) {
        return alunoRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Aluno com ID " + id + " não foi encontrado!"));
    }

    @Override
    public Aluno save(Aluno aluno) {
        if(aluno.getTurmas() == null){
            throw new InvalidParamsException("Erro: Turmas são obrigatórias!");
        }

        //Percorre todas as turmas e verifica se alguma não existe
        for (Turma t : aluno.getTurmas()) {
            Optional<Turma> ot = turmaRepository.findById(t.getId());

            if (ot.equals(Optional.empty())) {
                throw new NotFoundException("Erro: Turma com ID:" + t.getId() + " não existe!");
            }
        }

        return alunoRepository.save(aluno);
    }

    @Override
    public void deleteById(int id) {
        alunoRepository.findById(id).orElseThrow(() -> new NotFoundException("Erro: Aluno com ID " + id + " não foi encontrado!"));
        alunoRepository.deleteById(id);
    }

    @Override
    public Aluno put(int id, Aluno aluno) {
        if(aluno.getTurmas() == null){
            throw new InvalidParamsException("Erro: Turmas são obrigatórias!");
        }

        //Percorre todas as turmas e verifica se alguma não existe
        for (Turma t : aluno.getTurmas()) {
            Optional<Turma> ot = turmaRepository.findById(t.getId());

            if (ot.equals(Optional.empty())) {
                throw new NotFoundException("Erro: Turma com ID: " + t.getId() + " não existe!");
            }
        }

        try {
            Aluno alu = alunoRepository.findById(id).get();
            aluno.setId(id);
            return alunoRepository.save(aluno);
        } catch (Exception ex) {
            throw new NotFoundException("Aluno com ID:" + id + " não existe!");
        }
    }
}
