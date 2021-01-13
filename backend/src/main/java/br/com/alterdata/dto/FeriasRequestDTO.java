package br.com.alterdata.dto;

import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.Collections;
import java.util.List;

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
	
	private String login;
	
	public Ferias toFerias(ColaboradorRepository repository) {

		Colaborador colaborador = repository.findByLogin(login);
		
		if(colaborador == null) {
			throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "O login não existe");
		}
		
		//-----------------------------------------------------------------------------------------------------------------------
		
		Colaborador c = colaborador;
		
		LocalDate dataCadastro = LocalDate.of(this.dataInicio.getYear(), this.dataInicio.getMonth(), this.dataInicio.getDayOfMonth());
		LocalDate dataFim = LocalDate.of(this.dataFim.getYear(), this.dataFim.getMonth(), this.dataFim.getDayOfMonth());			
		long dias = dataCadastro.until(dataFim, ChronoUnit.DAYS);
		
		LocalDate admissao = LocalDate.of(c.getDataAdmissao().getYear(), c.getDataAdmissao().getMonth(), c.getDataAdmissao().getDayOfMonth());
		long meses = admissao.until(dataCadastro, ChronoUnit.MONTHS);
		
//		Colaborador feriasSort = c.getFerias().sort(Comparator.comparing(Ferias::getId));
		Collections.sort(c.getFerias());
		
		if(dias+1 == this.duracao) {
			if(meses > 12 && meses < 24) {
				if(c.getFerias().isEmpty()) {
					Ferias ferias = new Ferias(this.id, this.dataInicio, this.dataFim, this.duracao, c);
					if(this.duracao == 30) {
						c.setAniversarioDataContratacao(c.getDataAdmissao().plusYears(1));
					}
					return ferias;
					
				}else if(c.getFerias().size() == 1) {
					int verificacao = Period.between(c.getFerias().get(c.getFerias().size()-1).getDataFim(), this.dataInicio).getDays();
					if(c.getFerias().get(c.getFerias().size()-1).getDuracao() == 15 &&
							this.duracao == 15 &&
							verificacao >= 0) {
						
						Ferias ferias = new Ferias(this.id, this.dataInicio, this.dataFim, this.duracao, c);
						c.setAniversarioDataContratacao(c.getDataAdmissao().plusYears(1));
						return ferias;
					}else {
						throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "Não pode cadastrar as férias no período de uma férias ativa");
					}
				}else {
					throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "O Colaborador não possui férias disponiveis");
				}
				
			}else if(meses > 24) {
				LocalDate aniversario = LocalDate.of(c.getAniversarioDataContratacao().getYear(),
						c.getAniversarioDataContratacao().getMonth(),
						c.getAniversarioDataContratacao().getDayOfMonth());
				
				long periodoMeses = aniversario.until(dataCadastro, ChronoUnit.MONTHS);
				
				if(periodoMeses >= 12) {
					if(this.getDuracao() == 30) {
						Ferias ferias = new Ferias(this.id, this.dataInicio, this.dataFim, this.duracao, c);
						c.setAniversarioDataContratacao(c.getAniversarioDataContratacao().plusYears(1));
						return ferias; 
					}else if(this.getDuracao() == 15) {
						LocalDate ultimaFerias = c.getFerias().get(c.getFerias().size()-1).getDataInicio();
						LocalDate periodoUltimaFerias = LocalDate.of(ultimaFerias.getYear(),
								ultimaFerias.getMonth(),
								ultimaFerias.getDayOfMonth());
						
						long periodoMesesUltimaFerias = periodoUltimaFerias.until(dataCadastro, ChronoUnit.MONTHS);
						
						int verificacao = Period.between(c.getFerias().get(c.getFerias().size()-1).getDataFim(), this.dataInicio).getDays();
						
						if(periodoMesesUltimaFerias < 12 && verificacao > 0) {
							Ferias ferias = new Ferias(this.id, this.dataInicio, this.dataFim, this.duracao, c);
							c.setAniversarioDataContratacao(c.getAniversarioDataContratacao().plusYears(1));
							return ferias;
							
						}else {
							Ferias ferias = new Ferias(this.id, this.dataInicio, this.dataFim, this.duracao, c);
							return ferias;
						}
					
					}
				}else {
					throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "Ainda não completaram 12 meses para a sua proxima férias");
				}
				
			}else if(meses < 12) {
				throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "O Colaborador ainda não possui 1 ano na empresa");
			}
			
			
			//-------------------------------------------------------------------------------------------------------
			
        }else {
        	throw new HttpServerErrorException(HttpStatus.BAD_REQUEST, "As datas não condizem com a duração definida");
        }
		
		return null;
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

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}
	
//	public boolean verificaFerias(List<FeriasDTO> Todasferias, Ferias novaFerias) {
//
//	}

}
