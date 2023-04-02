# ISST-grupo10
## Descarga y montaje del proyecto
- Descargar el proyecto con `git clone https://github.com/VMindaros/ISST-Grupo10-TuComunidad-23.git`
- Para levantar el back, abrir en Visual Studio Code la carpeta /backend, ejecutar en el menú izquierdo de Explorer, en la subsección de Maven >  grupo10tucomunidad > Lifecycle > Install, esto sirve para compilar el proyecto, estando el resultado en la carpeta `src/target`. Una vez terminado ejecutar el servidor haciendo Run en `Grupo10tucomunidadApplication.java` o mediante la extensión de Spring Boot. El servidor será accesible desde http://localhost:8080.
- Para levantar el front, abrir otra ventana de Visual Studio Code en la carpeta /frontend, ejecutar en un terminal `npm install` para instalar todas las dependencias `package.json`. Una vez terminado, ejecutar en el terminar la instrucción `npm start`. La página web será accesible desde http://localhost:3000.

## Noticias
Dado que solo está disponible el servicio de noticias, se redirige la ruta `/` a `/noticias` hasta que se haga la página de inicio. Por defecto se inicializa la base de datos H2 sin datos, por lo que será necesario crear noticias primero desde la página web.