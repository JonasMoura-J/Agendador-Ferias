package br.com.alterdata.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_PERIODOS")
public class Periodos implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private List<Colaborador> mesesDisponivel = new ArrayList<>();

	public Periodos() {

	}

	public Periodos(long id, List<Colaborador> mesesDisponivel, short diaInicio, short diaFinal) {
		super();
		this.id = id;
		this.mesesDisponivel = mesesDisponivel;

	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<Colaborador> getMesesDisponivel() {
		return mesesDisponivel;
	}

	public void setMesesDisponivel(List<Colaborador> mesesDisponivel) {
	
	}

}
