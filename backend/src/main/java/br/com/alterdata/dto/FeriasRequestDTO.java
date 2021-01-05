package br.com.alterdata.dto;

import java.time.LocalDate;

import org.springframework.http.HttpStatus;
import org.springframework.web.client.HttpServerErrorException;

import br.com.alterdata.domain.Colaborador;
import br.com.alterdata.domain.Ferias;
import br.com.alterdata.repositories.ColaboradorRepository;

public class FeriasRequestDTO {
	
	private long id;
	
	private LocalDate dataInicio;

	private LocalDate dataFim;
	
	private int duracao;
	
	private boolean estaAtivo;
	
	private String login;
	
	public Ferias toFerias(ColaboradorRepository repository) {

		Colaborador colaborador = repository.findByLogin(login);
		
		if(colaborador == null) {
			throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "O login não existe");
		}
		
		Colaborador c = colaborador;
		
		Ferias ferias = new Ferias(this.id, this.dataInicio, this.dataFim, this.duracao, this.estaAtivo, c);
		
		return ferias;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDate getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(LocalDate dataInicio) {
		this.dataInicio = dataInicio;
	}

	public LocalDate getDataFim() {
		return dataFim;
	}

	public void setDataFim(LocalDate dataFim) {
		this.dataFim = dataFim;
	}

	public int getDuracao() {
		return duracao;
	}

	public void setDuracao(int duracao) {
		this.duracao = duracao;
	}

	public boolean isEstaAtivo() {
		return estaAtivo;
	}

	public void setEstaAtivo(boolean estaAtivo) {
		this.estaAtivo = estaAtivo;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

}
