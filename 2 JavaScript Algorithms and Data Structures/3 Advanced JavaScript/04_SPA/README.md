# Single Page Application

Una **SPA** o Aplicacion de una Sola Pagina web que todo su contenido carga una sola vez, es decir, tu navegador descarga un solo archivo html con todos los recursos y dependencias que necesite para funcionar: estilos, scripts, imagenes, fuentes, ect.

Una vez que carga todo el contenido de la aplicacion la navegacion de esta suele ser muy rapida y fluida, pues el contenido ya ha sido previamente cargado y solo estamos intercambiando contenido a traves de las interacciones del usuario.

dependiendo de la complejidad y robustez de la aplicacion tambien podria cargarse contenido de forma dinamica sin la necesidad de regargar la pagina y si, como seguramente lo estas pensando esto se hace mediante `peticiones asincronas` con `AJAX` de tal manera que solo se tiene que cargar el nuevo contenido.

## Rutas en una SPA

En una `SPA` tenemos **vistas**, NO paginas. las vistas son las diferentes secciones o apartados de contenido que tiene la aplicacion y al no tener que cambiar de ruta para acceder al contenido, la carga suele ser muy rapida.

### Entonces si el contenido se carga en una sola pagina, la `url` no cambia?

Si... y No...

Pro funcionalidad quizas **NO** seria necesario que cambiase la url, pero por usabilidad es una muy buena opcion que **SI** cambie, ya que el navegador va guardando en su historial todas las paginas (en este caso todas las vistas) que el usuario va visitando, lo que podria podria permitir al usuario regresar o adelantar vistas a traves de los botones de atras y adelante de su navegador web.

tambien piensa en la posibilidad que existe de que el usuario en vez de navegar por la aplicacion para llegar a un contenido en particular, decida acceder a este a traves de una url que decida escribir manualmente en la barra de direccion de su navegador web, si no implementas un sistema de rutas esto podria ser un gran problema de accesibilidad en el contenido de tu **SPA**.

### Pero si el contenido se carga en una sola pagina, como cambiamos la url?

Gracias al uso del `hash` de la url y el paso de parametros en la misma.

## Y el SEO en una SPA?

Si bien, acabamos de explicar que podemos cambiar la url mediante el paso de parametros y el hash de la misma, es un hecho que este tipo de cambios en la url no es muy amigable y como tal siempre hacemos referencia al mismo archivo que carga toda la aplicacion.

Ademas hay que considerar que la mayoria del contenido de una **SPA** se carga de forma dinamica, por lo que los mecanismos que tienen los buscadores para analizar el codigo HTML de las urls practicamente son inservibles, pues en su mayoria, las **SPAs** tienen un solo tag HTML vacio con un nombre de identificador y mediante JavaScript, el contenido es cargado asincronamente a dicho tag.

Por lo anterior el codigo HTML de nuestra **SPA** estaria vacio ante los rastreadores de los buscadores, encargados de posicionar el contenido en la web.

Pero no te preocupes, no toto esta perdido, si bien las **SPAs** no son tan amigables con el SEO, lo cierto es que en los ultimos años los mismos buscadores han implementado mecanismos en sus rastreadores para detectar el codigo HTML generado por una **SPA**.

Adicionalmente tenemos 2 tecnicas para volver mas SEO friendly a nuestras **SPAs**:

1- Los Generadores de Sitios Estaticos(**SSG - Static Site Gen;rators**).

2- El Renderizado del Lado del 
servidor (**SSR - Server Side Rendering**).

## En que se programa una SPA?

Las **SPAs** se desarrola en javaScript, como son aplicaciones web 100% hechas en codigo frontend, es el unico lenguaje en el que se pueden programar. Tambien necesitaremos HTML para el marcado del contenido y CSS para su presentacion.

**Pero si el codigo de una SPA es 100% frontend, que pasa con el codigo backend que proporciona los datos?**

El codigo backend que provee los datos a una **SPA**, es 100% independiente de esta. De hecho a la **SPA** le importa poco en que lenguaje este programado su backend o que reglas, patrones, estructuras o tecnicas use internamente, mientras este le proporcione los datos en una `API` expuesta generalmente en formato `JSON` es todo lo que la **SPA** nesesita de un backend.

Con lo anterior expuesto, significa que si decides desarrollar un proyecto bajo el paradigma de las **SPAs** puedes programar de forma independiente el frontend del backend y solo conectarlos a traves de la ***API*** que los comunique entre si.

De esta forma puedes mantener mayor control e independencia de desarrollo entre cada una de las partes de codigo (frontend y  backend)  de todo tu proyecto.

De hecho en los ultimos años el paradigma de desarrollo de  las SPAs le ha ido ganando terreno al patron de sarrollo **MCV**(Modelo - Vista - Controlador) que fue muy popular en los inicios de la web, en este paradigma el frontend y backend estan mezclados y con mucha dependecia entre si, ademas quien llevaba la mayor responsabilidad era el backend y generalmente con cada nueva accion en la aplicacion implicaba volver a solicitar los datps al servidor lo que implicaba una recarga del navegador, y por ende una nueva peticion por cada accion ejecutada.

Con la llegada de ***AJAX*** el tema de las recargas al servidor se soluciono, sin embargo la codependencia y mezcla entre codigo frontend y backend sigue ocurriendo en el paradigma **MVC**.

Actualmente con el avance que ha tenido javaScript como lenguaje y proliferacion de librerias y framworks que se basan en el, sumando a las nuevas formas de almacenar y consumir informacion en la web como el computo en la nube y el desarrollo de microservicios en la misma; el paradigma de las SPAs cada vez gana mayor aceptacion frente al MVC, gracias a que permite desarrolloar de forma autonoma e independiente cada parte de codigo de nuestra aplicacion: frontend, backend y persistencia de datos desacoplados y descentralizados de si mismos.

## Librerias y Frameworks para SPAs

Desde el 2010 con el surgimiento de proyectos como Angular.js, Backbone.js y  Ember.js que comenzaban a tratar de darle mas protagonismo al desarrollo frontend mas alla de la simple manipulacion del DOM que nos aofrecia en su momento jQueruy, comenzo el camino de la arquitectura basada en SPAs, podemos considerar a estas herramientas la primera generacion de librerias y frameworks SPAs.

Posteriormente y a partir del 2013 con el surgimiento de herramientas como React, Angular, Polymer, Vue y Svelte que integran nuevos conceptos al ecosistema frontend como: el desarrollo basado en componentes, el manejo del estado, la reactividad, entre otros podemos considerar a estos proyectos como la segunda generacion de librerias y frameworks SPAs.

Asi que como puedes ver, tienes una gran variedad de opciones a escoger.