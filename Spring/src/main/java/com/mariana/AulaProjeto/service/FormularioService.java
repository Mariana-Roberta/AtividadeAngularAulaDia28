package com.mariana.AulaProjeto.service;

import com.mariana.AulaProjeto.model.Formulario;
import com.mariana.AulaProjeto.repository.FormularioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormularioService {

    @Autowired
    private FormularioRepository formularioRepository;

    public Formulario findById(Integer id) {
        return this.formularioRepository.findById(id).orElseThrow();
    }

    public List<Formulario> findAll() {
        return this.formularioRepository.findAll();
    }

    public Formulario save(Formulario formulario) {
        return this.formularioRepository.save(formulario);
    }

    public List<Formulario> findByIdade(int idade) {
        return this.formularioRepository.findByIdade(idade);
    }
}
