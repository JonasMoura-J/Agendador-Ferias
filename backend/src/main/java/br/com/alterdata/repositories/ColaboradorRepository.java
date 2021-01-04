package br.com.alterdata.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.alterdata.dto.ColaboradorDTO;

public interface ColaboradorRepository extends JpaRepository<ColaboradorDTO, Long>{

}
