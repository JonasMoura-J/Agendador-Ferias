package br.com.alterdata.models;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToOne;
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
	
	private String email;
	
	private LocalDate dataAdmissao;
	
	private String departamento;
	
	@OneToOne
	@JoinTable (
				name = "colaborador_ferias",
				joinColumns = @JoinColumn(name = "ferias_id", referencedColumnName =  "id"),
				inverseJoinColumns = @JoinColumn(name = "colaborador_id", referencedColumnName = "id")
				)
	private Ferias ferias;

	public Colaborador() {
		
	}

	public Colaborador(long id, String login, String nome, String email, LocalDate dataAdmissao, String departamento,
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

	public void setDepartamento() {
		String[] departamentoSplit = getLogin().split(".");
		this.departamento = departamentoSplit[1] + departamentoSplit[2];
	}

	public Ferias getFerias() {
		return ferias;
	}

	public void setFerias(Ferias ferias) {
		this.ferias = ferias;
	}
}
