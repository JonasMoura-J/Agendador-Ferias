package br.com.alterdata.models;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_COLABORADOR")
public class Colaborador implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String login;
	
	private String nome;
	
	private LocalDate ultimaFerias;
	
	private String setor;
	
	private String cargo;

	public Colaborador() {
		
	}

	public Colaborador(long id, String login, String nome, LocalDate ultimaFerias, String setor, String cargo) {
		super();
		this.id = id;
		this.login = login;
		this.nome = nome;
		this.ultimaFerias = ultimaFerias;
		this.setor = setor;
		this.cargo = cargo;
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

	public LocalDate getUltimaFerias() {
		return ultimaFerias;
	}

	public void setUltimaFerias(LocalDate ultimaFerias) {
		this.ultimaFerias = ultimaFerias;
	}

	public String getSetor() {
		return setor;
	}

	public void setSetor(String setor) {
		String[] setorSplit = getLogin().split(".");
		this.setor = setorSplit[2];
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		String[] setorSplit = getLogin().split(".");
		this.setor = setorSplit[1];
	}
	
}
