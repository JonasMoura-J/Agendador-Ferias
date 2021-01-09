package br.com.alterdata.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.ElementCollection;

import br.com.alterdata.domain.Colaborador;
import br.com.alterdata.domain.Ferias;

public class ColaboradorDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private long id;
	
	private String login;
	
	private String nome;
	
	private String email;
	
	@ElementCollection(targetClass=Ferias.class)
	private Set<Ferias> ferias = new HashSet<>();
	
	@SuppressWarnings("unused")
	private ColaboradorDTO() {
		
	}
	
	public ColaboradorDTO(Colaborador colaborador) {
		super();
		this.id = colaborador.getId();
		this.login = colaborador.getLogin();
		this.nome = colaborador.getNome();
		this.email = colaborador.getEmail();
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

	public Set<Ferias> getFerias() {
		return ferias;
	}

	public void setFerias(Set<Ferias> ferias) {
		this.ferias = ferias;
	}

}
