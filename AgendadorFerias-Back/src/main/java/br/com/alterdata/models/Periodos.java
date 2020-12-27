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

	@Column(name = "mes_disponivel")
	private List<Colaborador> mesesDisponivel = new ArrayList<>();

	@Column(name = "dia_inicio")
	private short diaInicio;

	@Column(name = "dia_final")
	private short diaFinal;

	public Periodos() {

	}

	public Periodos(long id, List<Colaborador> mesesDisponivel, short diaInicio, short diaFinal) {
		super();
		this.id = id;
		this.mesesDisponivel = mesesDisponivel;
		this.diaInicio = diaInicio;
		this.diaFinal = diaFinal;
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
		for(int i= 0; i< 12; i++) {
			
		}
	}

	public short getDiaInicio() {
		return diaInicio;
	}

	public void setDiaInicio(short diaInicio) {
		this.diaInicio = diaInicio;
	}

	public short getDiaFinal() {
		return diaFinal;
	}

	public void setDiaFinal(short diaFinal) {
		this.diaFinal = diaFinal;
	}

}
