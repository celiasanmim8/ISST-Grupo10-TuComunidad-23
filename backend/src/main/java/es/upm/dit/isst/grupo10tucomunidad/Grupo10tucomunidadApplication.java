package es.upm.dit.isst.grupo10tucomunidad;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import es.upm.dit.isst.grupo10tucomunidad.model.Noticia;
import es.upm.dit.isst.grupo10tucomunidad.repository.NoticiaRepository;

import es.upm.dit.isst.grupo10tucomunidad.model.Sugerencia;
import es.upm.dit.isst.grupo10tucomunidad.repository.SugerenciaRepository;

import es.upm.dit.isst.grupo10tucomunidad.model.Comentario;
import es.upm.dit.isst.grupo10tucomunidad.repository.ComentarioRepository;

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
					"Debido al reciente incidente en el cual se introdujeron 100 kg de lentejas en el sistema, nos vemos"
							+
							" en la oblicación de mantener el servicio de piscina cerrado. El culpable ha sido debidamente sancionado.",
					1L,
					LocalDateTime.now(),
					null));
			noticiaRepository.save(new Noticia(
					null,
					"Abierta la convocatoria del año 2024 para plazas de garaje del edificio",
					"Convocatoria abierta hasta el 1 de mayo, inclusiva. Proporcionar información de vehículo y personal al presidente",
					1L,
					LocalDateTime.now(),
					null));
			noticiaRepository.save(new Noticia(
					null,
					"Queda habilitada la sala de reuniones para poder visualizar la final de la Champions League",
					"Debido a la demanda de peticiones y tras una reflexión por parte del presidente, vicepresidente y administrador "
							+
							"se permitirá a los vecinos lo descrito en el título. Recordamos que dicha sala se encuentra en el el bajo, sección B, número 3. "
							+
							"El aforo máximo es de 60 personas, se ruega no sobrepasar dicho límite y cuidar del material. Gracias.",
					1L,
					LocalDateTime.now(),
					null));
			noticiaRepository.save(new Noticia(
					null,
					"Horario de verano para la recogida de basuras",
					"Debido a la demanda de peticiones y tras una reflexión por parte del presidente, vicepresidente y administrador "
							+
							"se permitirá a los vecinos lo descrito en el título. Recordamos que dicha sala se encuentra en el el bajo, sección B, número 3. "
							+
							"El aforo máximo es de 60 personas, se ruega no sobrepasar dicho límite y cuidar del material. Gracias.",
					1L,
					LocalDateTime.now(),
					null));
		};
	}

	@Bean
	public CommandLineRunner initialSugerenciaData(SugerenciaRepository sugerenciaRepository) {
		return (args) -> {
			sugerenciaRepository.save(new Sugerencia(
					1L,
					"Sustituir las bombillas del vestíbulo, pasillos y escaleras por luces LED",
					"Dada la cantidad que hay, creo que podríamos ahorrar bastante a largo plazo si las cambiáramos por luces LED.",
					2L,
					LocalDateTime.now()));

			sugerenciaRepository.save(new Sugerencia(
					2L,
					"Cambiar la cerradura del garaje",
					"Hace poco al vecino del 5ºF le robaron su llave, creo que sería lo más prudente.",
					2L,
					LocalDateTime.now()));

			sugerenciaRepository.save(new Sugerencia(
					3L,
					"Obra para poner una rampa en las escaleras de la entrada",
					"Debido a la edad y la situación de algunos propietarios, se plantea hacer una obra para poner una rampa, seria muy util "
							+
							"para las personas con movilidad reducida y también para familias con carritos de bebes, entre otras cosas",
					2L,
					LocalDateTime.now()));

			sugerenciaRepository.save(new Sugerencia(
					4L,
					"Cambio de socorrista en la piscina",
					"Algunos propietarios nos hemos dado cuenta de que el socorrista de este año se pasa las horas con el móvil, sin hacer caso "
							+
							"a lo que sucede en la piscina, además de que no llama la atención cuando los niños se tiran y algún dia puede pasar una desgracia.",
					2L,
					LocalDateTime.now()));

		};
	}

	@Bean
	public CommandLineRunner initialComentarioData(ComentarioRepository comentarioRepository) {
		return (args) -> {
			comentarioRepository.save(new Comentario(null,
					"Me parece buena idea!",
					3L,
					null));

			comentarioRepository.save(new Comentario(null,
					"Yo no lo veo necesario",
					3L,
					null));

			comentarioRepository.save(new Comentario(null,
					"A mi la verdad es que el socorrista me parece muy majo y hace bien su trabajo.",
					4L,
					null));
		};
	}
}
