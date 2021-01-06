package br.com.alterdata.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.alterdata.domain.Colaborador;

public interface ColaboradorRepository extends JpaRepository<Colaborador, Long>{

	Colaborador findByLogin(String login);

}
