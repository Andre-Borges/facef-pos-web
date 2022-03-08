package br.com.informatica.Informatica.controller;

import br.com.informatica.Informatica.business.MateriaBusiness;
import br.com.informatica.Informatica.exception.NotFoundException;
import br.com.informatica.Informatica.model.Materia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/materias")
public class MateriaController {
    private MateriaBusiness materiaBusiness;

    @Autowired
    public MateriaController(MateriaBusiness materiaBusiness) {
        this.materiaBusiness = materiaBusiness;
    }

    @GetMapping
    public ResponseEntity<Page<Materia>> findAll(@PageableDefault(size=10) Pageable pageable) {
        return ResponseEntity.ok().body(materiaBusiness.findAll(pageable));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Materia> find(@PathVariable int id) {
        return ResponseEntity.ok().body(materiaBusiness.findById(id));
    }

    @PostMapping
    public ResponseEntity<Materia> post(@RequestBody Materia materia) {
        return ResponseEntity.status(HttpStatus.CREATED).body(materiaBusiness.save(materia));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Materia> put(@PathVariable int id, @RequestBody Materia materia) {
        return ResponseEntity.status(HttpStatus.CREATED).body(materiaBusiness.put(id, materia));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Materia> delete(@PathVariable int id) {
        materiaBusiness.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
