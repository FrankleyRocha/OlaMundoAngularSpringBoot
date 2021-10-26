package br.eti.frankley;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class OlaMundoApplication {

	public static void main(String[] args) {
		SpringApplication.run(OlaMundoApplication.class, args);
	}
	
	@GetMapping("/ola")
	public String hello(
		@RequestParam(
			value = "nome",
			defaultValue = "Mundo!"
		)
		String nome
	) {
		return String.format(
			"Olá %s!",
			nome
		);
	}

}
