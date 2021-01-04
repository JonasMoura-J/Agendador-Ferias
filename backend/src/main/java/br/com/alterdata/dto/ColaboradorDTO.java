package br.com.alterdata.dto;

import java.io.Serializable;
import java.time.LocalDate;

import br.com.alterdata.domain.Colaborador;
import br.com.alterdata.domain.Ferias;

public class ColaboradorDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private long id;
	
	private String login;
	
	private String nome;
	
	private String email;
	
	private LocalDate dataAdmissao;
	
	private String departamento;
	
	private Ferias ferias;
	
	@SuppressWarnings("unused")
	private ColaboradorDTO() {
		
	}

	public ColaboradorDTO(long id, String login, String nome, String email, LocalDate dataAdmissao, String departamento,
			Ferias ferias) {
		super();
		this.id = id;
		this.login = login;
		this.nome = nome;
		this.email = email;
		this.dataAdmissao = dataAdmissao;
		this.departamento = departamento;
		this.ferias = ferias;
	}
	
	public ColaboradorDTO(Colaborador colaborador) {
		super();
		this.id = colaborador.getId();
		this.login = colaborador.getLogin();
		this.nome = colaborador.getNome();
		this.email = colaborador.getEmail();
		this.dataAdmissao = colaborador.getDataAdmissao();
		this.departamento = colaborador.getDepartamento();
		this.ferias = colaborador.getFerias();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public LocalDate getDataAdmissao() {
		return dataAdmissao;
	}

	public void setDataAdmissao(LocalDate dataAdmissao) {
		this.dataAdmissao = dataAdmissao;
	}

	public String getDepartamento() {
		return departamento;
	}

	public void setDepartamento(String departamento) {
		this.departamento = departamento;
	}

	public Ferias getFerias() {
		return ferias;
	}

	public void setFerias(Ferias ferias) {
		this.ferias = ferias;
	}
}
