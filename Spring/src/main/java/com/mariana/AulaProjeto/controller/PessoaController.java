package com.mariana.AulaProjeto.controller;

import com.mariana.AulaProjeto.dto.PessoaDTO;
import com.mariana.AulaProjeto.model.Pessoa;
import com.mariana.AulaProjeto.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/formulario")
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

    @GetMapping("/listaFormularios")
    public ResponseEntity<List<Pessoa>> getListaFormularios() {
        List<Pessoa> listaPessoas = pessoaService.findAll();
        return ResponseEntity.ok(listaPessoas);
    }

    @GetMapping("/id")
    public ResponseEntity<Pessoa> getFormularioById(@RequestParam Integer id) {
        Pessoa pessoa = pessoaService.findById(id);
        return ResponseEntity.ok(pessoa);
    }


}
