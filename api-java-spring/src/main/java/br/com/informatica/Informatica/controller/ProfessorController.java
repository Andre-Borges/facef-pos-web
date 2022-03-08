package br.com.informatica.Informatica.controller;

import br.com.informatica.Informatica.business.ProfessorBusiness;
import br.com.informatica.Informatica.model.Professor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/professores")
public class ProfessorController {
    private ProfessorBusiness professorBusiness;

    @Autowired
    public ProfessorController(ProfessorBusiness professorBusiness) {
        this.professorBusiness = professorBusiness;
    }

    @GetMapping
    public ResponseEntity<Page<Professor>> findAll(@PageableDefault(size=10) Pageable pageable) {
        return ResponseEntity.ok().body(professorBusiness.findAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professor> findBy(@PathVariable int id) {
        return ResponseEntity.ok().body(professorBusiness.findById(id));
    }

    @PostMapping
    public ResponseEntity<Professor> post(@RequestBody Professor professor) {
        return ResponseEntity.status(HttpStatus.CREATED).body(professorBusiness.save(professor));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Professor> delete(@PathVariable int id) {
        professorBusiness.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Professor> put(@PathVariable int id, @RequestBody Professor professor) {
        return ResponseEntity.status(HttpStatus.CREATED).body(professorBusiness.put(id, professor));
    }

}
