package es.upm.dit.isst.grupo10tucomunidad;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import es.upm.dit.isst.grupo10tucomunidad.model.Noticia;
import es.upm.dit.isst.grupo10tucomunidad.repository.NoticiaRepository;



@SpringBootApplication
public class Grupo10tucomunidadApplication {

	public static void main(String[] args) {
		SpringApplication.run(Grupo10tucomunidadApplication.class, args);
	}

	@Bean
	public CommandLineRunner initialNoticiaData(NoticiaRepository noticiaRepository) {
		return (args) -> {
			noticiaRepository.save(new Noticia(
				null,
				"La piscina quedará cerrada por mantenimiento hasta verano de 2054",
				"Debido al reciente incidente en el cual se introdujeron 100 kg de lentejas en el sistema, nos vemos" +
					" en la oblicación de mantener el servicio de piscina cerrado. El culpable ha sido debidamente sancionado.",
				1L,
				LocalDateTime.now(),
				null
			));
			noticiaRepository.save(new Noticia(
				null,
				"Abierta la convocatoria del año 2024 para plazas de garaje del edificio",
				"Convocatoria abierta hasta el 1 de mayo, inclusiva. Proporcionar información de vehículo y personal al presidente",
				1L,
				LocalDateTime.now(),
				null
			));
			noticiaRepository.save(new Noticia(
				null,
				"Queda habilitada la sala de reuniones para poder visualizar la final de la Champions League",
				"Debido a la demanda de peticiones y tras una reflexión por parte del presidente, vicepresidente y administrador " +
					"se permitirá a los vecinos lo descrito en el título. Recordamos que dicha sala se encuentra en el el bajo, sección B, número 3. " +
					"El aforo máximo es de 60 personas, se ruega no sobrepasar dicho límite y cuidar del material. Gracias.",
				1L,
				LocalDateTime.now(),
				null
			));
			noticiaRepository.save(new Noticia(
				null,
				"Horario de verano para la recogida de basuras",
				"Debido a la demanda de peticiones y tras una reflexión por parte del presidente, vicepresidente y administrador " +
					"se permitirá a los vecinos lo descrito en el título. Recordamos que dicha sala se encuentra en el el bajo, sección B, número 3. " +
					"El aforo máximo es de 60 personas, se ruega no sobrepasar dicho límite y cuidar del material. Gracias.",
				1L,
				LocalDateTime.now(),
				null
			));
		};
	}
}
