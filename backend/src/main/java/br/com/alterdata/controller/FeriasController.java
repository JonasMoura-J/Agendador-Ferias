package br.com.alterdata.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.alterdata.domain.Ferias;
import br.com.alterdata.dto.FeriasDTO;
import br.com.alterdata.repositories.FeriasRepository;

@RestController
public class FeriasController {
	
	@Autowired
	FeriasRepository feriasRepository;
	
	@GetMapping("/ferias")
	public ResponseEntity <List<FeriasDTO>> findAll() {
		List<Ferias> ferias = feriasRepository.findAll();
		List<FeriasDTO> feriasDTO = ferias.stream().map(x -> new FeriasDTO(x)).collect(Collectors.toList());
		
		return ResponseEntity.status(HttpStatus.OK).body(feriasDTO);
	}
	
	@PostMapping("/ferias")
	public ResponseEntity<Ferias> postFerias(@RequestBody Ferias ferias) {

		Optional<Ferias> valida = feriasRepository.findById(ferias.getId());
		
		if (valida == null && ferias.EhValido()) {
			feriasRepository.save(ferias);
			return new ResponseEntity<>(ferias, HttpStatus.CREATED);
		}
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}
}
