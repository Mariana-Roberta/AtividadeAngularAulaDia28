package com.mariana.AulaProjeto.service;

import com.mariana.AulaProjeto.model.Pessoa;
import com.mariana.AulaProjeto.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public Pessoa findById(Integer id) {
        return this.pessoaRepository.findById(id).orElseThrow();
    }

    public List<Pessoa> findAll() {
        return this.pessoaRepository.findAll();
    }

    public Pessoa save(Pessoa pessoa) {
        return this.pessoaRepository.save(pessoa);
    }

    public List<Pessoa> findByIdade(int idade) {
        return this.pessoaRepository.findByIdade(idade);
    }
}
