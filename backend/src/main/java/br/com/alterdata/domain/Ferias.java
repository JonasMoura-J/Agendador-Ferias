package br.com.alterdata.domain;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="TB_FERIAS")
public class Ferias implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	private LocalDate dataInicio;

	@NotNull
	private LocalDate dataFim;
	
	@NotNull
	private int duracao;
	
	@ManyToOne
	@JsonIgnore
	@JoinTable (
				name = "ferias_colaborador",
				joinColumns = @JoinColumn(name = "colaborador_id", referencedColumnName =  "id"),
				inverseJoinColumns = @JoinColumn(name = "ferias_id", referencedColumnName = "id")
				)
	@NotNull
	private Colaborador colaborador;
	
	public Ferias() {
		
	}

	public Ferias(long id, LocalDate dataInicio, LocalDate dataFim, int duracao, Colaborador colaborador) {
		super();
		this.id = id;
		this.dataInicio = dataInicio;
		this.dataFim = dataFim;
		this.duracao = duracao;
		this.colaborador = colaborador;
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

	public Colaborador getColaborador() {
		return colaborador;
	}

	public void setColaborador(Colaborador colaborador) {
		this.colaborador = colaborador;
	}

	public boolean EhValido() {
		return colaborador.getDataAdmissao().getMonthValue() < LocalDate.now().getMonthValue()? true : false;
	}
}
