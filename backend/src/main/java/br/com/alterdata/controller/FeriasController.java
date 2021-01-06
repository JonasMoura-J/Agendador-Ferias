package br.com.alterdata.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.alterdata.domain.Ferias;
import br.com.alterdata.dto.FeriasDTO;
import br.com.alterdata.dto.FeriasRequestDTO;
import br.com.alterdata.repositories.ColaboradorRepository;
import br.com.alterdata.repositories.FeriasRepository;

@RestController
public class FeriasController {
	
	@Autowired
	FeriasRepository feriasRepository;
	
	@Autowired
	ColaboradorRepository colaboradorRepository;
	
	@GetMapping("/ferias")
	public ResponseEntity <List<FeriasDTO>> findAll() {
		List<Ferias> ferias = feriasRepository.findAll();
		List<FeriasDTO> feriasDTO = ferias.stream().map(x -> new FeriasDTO(x)).collect(Collectors.toList());
		
		return ResponseEntity.status(HttpStatus.OK).body(feriasDTO);
	}
	
	@PostMapping("/ferias")
	public ResponseEntity<Ferias> postFerias(@RequestBody FeriasRequestDTO dto) {

		Ferias ferias = dto.toFerias(colaboradorRepository);
		
		Ferias valida = feriasRepository.findById(ferias.getId());
		
		if (valida == null && ferias.EhValido()) {
			feriasRepository.save(ferias);
			return new ResponseEntity<>(ferias, HttpStatus.CREATED);
		}
		return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}
	
	@PutMapping("ferias/{id}")
	public ResponseEntity<Ferias> AtualizarFerias(@PathVariable long id,@RequestBody FeriasRequestDTO dto) {
		
		Ferias feriasExistente = feriasRepository.findById(id);
		Ferias feriasAtualizada = dto.toFerias(colaboradorRepository);
		
		if(feriasExistente == null) {
			return ResponseEntity.notFound().build();
		}
		
		feriasExistente.setColaborador(feriasAtualizada.getColaborador());
		feriasExistente.setDataFim(feriasAtualizada.getDataFim());
		feriasExistente.setDataInicio(feriasAtualizada.getDataInicio());
		feriasExistente.setDuracao(feriasAtualizada.getDuracao());
		feriasExistente.setEstaAtivo(feriasAtualizada.isEstaAtivo());
		feriasExistente.setId(feriasAtualizada.getId());
		
		feriasRepository.save(feriasExistente);
		
		return ResponseEntity.ok().body(feriasExistente);
	}
}
