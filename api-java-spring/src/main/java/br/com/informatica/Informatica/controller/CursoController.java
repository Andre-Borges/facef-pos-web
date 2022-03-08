package br.com.informatica.Informatica.controller;

import br.com.informatica.Informatica.business.CursoBusiness;
import br.com.informatica.Informatica.model.Curso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/cursos")
public class CursoController {
    private CursoBusiness cursoBusiness;

    @Autowired
    public CursoController(CursoBusiness cursoBusiness) {
        this.cursoBusiness = cursoBusiness;
    }

    @GetMapping
    public ResponseEntity<Page<Curso>> findAll(@PageableDefault(size=10) Pageable pageable) {
        return ResponseEntity.ok().body(cursoBusiness.findAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> findBy(@PathVariable int id) {
        return ResponseEntity.ok().body(cursoBusiness.findById(id));
    }

    @PostMapping
    public ResponseEntity<Curso> post(@RequestBody Curso curso) {
        return ResponseEntity.status(HttpStatus.CREATED).body(cursoBusiness.save(curso));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Curso> put(@PathVariable int id, @RequestBody Curso curso) {
        return ResponseEntity.status(HttpStatus.CREATED).body(cursoBusiness.put(id, curso));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Curso> delete(@PathVariable int id) {
        cursoBusiness.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
