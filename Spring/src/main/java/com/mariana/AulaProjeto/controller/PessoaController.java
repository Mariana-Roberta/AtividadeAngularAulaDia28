package com.mariana.AulaProjeto.controller;

import com.mariana.AulaProjeto.dto.PessoaDTO;
import com.mariana.AulaProjeto.model.Pessoa;
import com.mariana.AulaProjeto.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pessoa")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @PostMapping("/save")
    public ResponseEntity<Pessoa> save(@RequestBody PessoaDTO pessoaDTO) {
      System.out.println("Received DTO: " + pessoaDTO);

        String nome = pessoaDTO.getNome();
        int idade = pessoaDTO.getIdade();

        Pessoa pessoa = new Pessoa();
        pessoa.setId(1);
        pessoa.setNome(nome);
        pessoa.setIdade(idade);

        pessoa = this.pessoaService.save(pessoa);

        return ResponseEntity.ok(pessoa);
    }

    @GetMapping("/listagem")
    public ResponseEntity<List<Pessoa>> getListaPessoas() {
        List<Pessoa> listaPessoas = pessoaService.findAll();
        return ResponseEntity.ok(listaPessoas);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Pessoa> getPessoaById(@PathVariable Integer id) {
        Pessoa pessoa = pessoaService.findById(id);
        if (pessoa != null) {
            return ResponseEntity.ok(pessoa);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }


}
