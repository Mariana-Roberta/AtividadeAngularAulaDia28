package com.mariana.AulaProjeto.controller;

import com.mariana.AulaProjeto.dto.FormularioDTO;
import com.mariana.AulaProjeto.model.Formulario;
import com.mariana.AulaProjeto.service.FormularioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/formulario")
@CrossOrigin("*")
public class FormularioController {

    @Autowired
    private FormularioService formularioService;

    @PostMapping("/save")
    public ResponseEntity<Formulario> save(@RequestBody FormularioDTO formularioDTO) {
        String nome = formularioDTO.getNome();
        int idade = formularioDTO.getIdade();

        Formulario formulario = new Formulario();
        formulario.setNome(nome);
        formulario.setIdade(idade);

        this.formularioService.save(formulario);

        return ResponseEntity.ok(formulario);
    }

    @GetMapping("/listaFormularios")
    public ResponseEntity<List<Formulario>> getListaFormularios() {
        List<Formulario> listaFormularios = formularioService.findAll();
        return ResponseEntity.ok(listaFormularios);
    }

    @GetMapping("/id")
    public ResponseEntity<Formulario> getFormularioById(@RequestParam Integer id) {
        Formulario formulario = formularioService.findById(id);
        return ResponseEntity.ok(formulario);
    }


}
