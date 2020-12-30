package br.com.alterdata.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ferias {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private short diaInicio;

	private short diaFinal;
	
	private int duracao;
	
	private Colaborador colaborador;
	
	
}
