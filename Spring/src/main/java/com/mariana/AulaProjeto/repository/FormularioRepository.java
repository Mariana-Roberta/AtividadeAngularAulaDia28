package com.mariana.AulaProjeto.repository;

import com.mariana.AulaProjeto.model.Formulario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FormularioRepository extends JpaRepository<Formulario, Integer> {
    List<Formulario> findByIdade(int idade);
}
