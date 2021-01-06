package br.com.alterdata.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.alterdata.domain.Ferias;

public interface FeriasRepository extends JpaRepository<Ferias, Long>{
	
	Ferias findById(long id);
}
