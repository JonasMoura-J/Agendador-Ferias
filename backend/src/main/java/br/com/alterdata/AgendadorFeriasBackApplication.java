/**
  * @copyright Alterdata Software
  * @author jonas.dsn.pack
  * @since 23/12/2020
  * @description xxxx xxxx x xxx x x x xxx x xxxxx x x xxxx
*/

package br.com.alterdata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.alterdata.utils.SendMail;

@SpringBootApplication
public class AgendadorFeriasBackApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(AgendadorFeriasBackApplication.class, args);
		
	}

}
