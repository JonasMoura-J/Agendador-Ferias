package br.com.alterdata.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.alterdata.domain.Colaborador;
import br.com.alterdata.domain.Ferias;
import br.com.alterdata.dto.ColaboradorDTO;

public interface ColaboradorRepository extends JpaRepository<Colaborador, Long>{

	Colaborador findByLogin(String login);

}
