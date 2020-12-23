package br.com.alterdata.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_PERIODOS")
public class Periodos implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "mes_disponivel")
	private String mesDisponivel;
	
	@Column(name = "dia_inicio")
	private short diaInicio;
	
	@Column(name = "dia_final")
	private short diaFinal;

	public Periodos() {
		
	}
	
	public Periodos(long id, String mesDisponivel, short diaInicio, short diaFinal) {
		super();
		this.id = id;
		this.mesDisponivel = mesDisponivel;
		this.diaInicio = diaInicio;
		this.diaFinal = diaFinal;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMesDisponivel() {
		return mesDisponivel;
	}

	public void setMesDisponivel(String mesDisponivel) {
		this.mesDisponivel = mesDisponivel;
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
