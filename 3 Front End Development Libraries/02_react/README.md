# React Introduccion

React es una `biblioteca` javaScript altamente eficiente y declarativa que se utiliza para crear interfaces de usuario interactivas.

Fue creado por el ingeniero de Facebook ***Jordan Walke*** y se lanzo en mayo de 2013.

En los ultimos años, ha superado a sus rivales y ha establecido firmemente su dominio.

React te insita a crear **codigo declarativo** (indicas el que, no el como) y **orientado a componentes**.

Un componente es una pieza de codigo que puede representar una parte de la interfaz de usuario o una funcionalidad en particular que se puede encapsular y reutilizar en diferentes partes de un desarrollo o incluso en diferentes aplicaciones.

Cada componente **reaccionara** a cambios internos (en su estado) o externos (nuevas propriedades recibidas) y se volvera a redibujar (renderizar) en la interfaz. Para ello React utiliza su **Visual DOM** que es una copia del **DOM** original del navegador para solo hacer los cambios necesarios en los nodos que haya reaccionado y eviatr redibujar todo el arbol del DOM.

Para poder interactuar con la interfaz React tiene **eventos sinteticos** que son una abstraccion de los eventos nativos de los navegadores, para mejorar la compatibilidad y evitar el uso de librerias para **crossbrowsing**.

### Porque usarlo?

**Ventajas**

- **Alto rendimient**: *React* es conocido por su alta eficiencia y flexibilidad. Se puede integrar facilmente con diferentes tecnologias. Se puede usar tanto para el lado del cliente como para el lado del servidor.

- **Recursos abundantes**: como *Facebook* la mantiene, existe una gran cantidad de documentacion y recursos disponibles enn la web que hace que la curva de aprendisaje sea muy fluida.

- **Compatibilidad con versiones anteriores**: la transicion o migracion de versiojnes anteriores a nuevas es bastante facil y retrocompatible.

- **estructura de componentes facil de matener**: la arquitectura basada en componentes de *React* ayuda a aumentar la reutilizacion del codigo y facilita bastante el mantenimiento de proyectos a gran escala.

- **Fuerte comunidad**: *react* tiene mas 1300 colaboradores en GitHub.

- **documentacion multi idiioma**: actualmente *React* tiene su documentacion en diferentes idiomas entre ellos el español.

- **Flojo de datos unidireccional**: el enlace de datos unidireccional y hacia abajo (de componentes padres a hijos), ayuda a garantizar que los cambios realizados en la estructura del componente hijo no afecten la estructura del componente padre.

### Desventajas:

- **complejo**: muchos desarrolladores pueden encontrar en un inicio demasiado complejo la curva de aprendisaje de *React* en comparacion con otros frameworks como el caso de `Vue`. Dicha complejidad puede ser innecesaria para proyectos a pequeña escala.
  
- **JSX**: el uso de JSX agrega otra capa de complejidad. JSX es un preprocesador que agrega extencion de sintaxis XML a aJavaScript. Aunque JSX ayuda a codificar el codigo *React* de una manera mas segura y rapida, puede ser dificil de aprender para los nuevos desarrolladores.

- **necesidad de un ecosistema y muchas herramientas**: *react8 requiere una amplia gama de herramientas para funcionar correctamente y ser compatible con otras tecnologias.

- **problemas de CEO**: se sabe que las SPAs (Single Page Applications) creadas con *React* se enfrentan a problemas de indexacion por parte de los rastreadores y bots de motores de busdqueda.

### Quien lo usa?

Grandes empresas como *Netflix, Yahoo, Airbnb, Facebook, Whatsapp, Paypal, Microsoft, BBC*, etc. incluso grandes sitios de informacion y noticias que antes usaban *WordPress* se estan migrando a sitios hechos con **JAM** satck y *react* como libreria principal.

### Estadisticas que respaldan su uso:

- [Google Trends](https://trends.google.com.mx/trends/explore?q=react,angular,vue)

- [NPM Trends](https://npmtrends.com/angular-vs-react-vs-vue)

- [Stack Ovreflow Trends](https://insights.stackoverflow.com/trends?tags=jquery%2Cangularjs%2Cangular%2Creactjs)

- [Sate of JavaScript](https://2020.stateofjs.com/en-US/)

## Entorno y Herramientas de Desarrollo

*React* es un alibreria y no tecnicamente un framework. Por lo que solo maneja la capa de Vista, tomando cmomo referencia el modelo MVC (modelo Vista Controlador) para el desarrollo de aplicaciones web. Sin embargo cuenta con una ampla gama de herramientas, librerias y frameworkd para completar su entorno de desarrollo, poe ejemplo:

  * **Node.js y NPM**: para jecutar el entorno de desarrollo e instalar dependencias.

* **Yarn**: un `gestor` de paquetes javaScript.

* **Webpack**: es un `empaquetador` de archivos para aplicaciones javascript.

* **React Router**: es una `libreria` para manejor rutas declarativas.

* **Redux**: es una `libreria` para gestionar el estado de las aplicaciones javaScript.

* **Flux**: es la `arquitectura` de aplicaciones que *facebook* usa para crear aplicaciones web del lado del cliente.

* **Create React App**: es un `conjunto de configuraciones preestablecidas` para comenzar a trabajr con *React* ejecutando un solo comando.

* **Gatsby**: Es un `framework` basado en React para desarrollar rapidamente sitios y aplicaciones web, usando diferentes fuentes de datos como CMS, Markdown, APIs, etc.

* **Next.js**: es un `framework` basado en *React* para desarrollar sitios estaticos y aplicaciones del lado del servidor (**SSR** - Server Side Rendering**).

* **GraphQL**: es un `lenguaje de consulta de datos` para APIs.

* **React Bootstrap**: es la version del popular `framework frontend` **Bootstrap** pero creado con componentes hecho en *React*.

* **Material UI**: es un `framework frontend` inspirado en **Matereial Design** creado con componentes hechos en *React*.

* **React Native**: es un `framework` basado en *React* para la creacion de apliucaciones moviles y nativas.

* **React Dev Tools Chrome**: es una `extencion` para *Chrome* que agrega herramientas de depuracion para *React*.

* **React Dev Tools Firefox**: es una `extencion` de *Firefox* que agrega herramientas de depuracion para *React*.

* **Simple React Snippets for VSCode**: es una `extencion` para *Visual Studio Code* que nos permite usar atajos para agilizar la escritura de codigo *React*.

## Create React App

Aunque existen varias formas de empezar con react, una manera sencilla y eficiente es con `create-react-app`, una aplicacion de consola que nos va a permitir crear aplicaciones React con cero configuracion, lo que nos permitira centrarnos en lo mas importante: **Programar en React**.

Para crear un aplaicacion utilizamos el comando `npx-create-react-app my-app` seguido del nombre que le quieras  dar a tu aplicacion. Por ejemplo:
```
npx create-react-app my-app
```

cuando ejecutas ese comando create-react-app va a crear una carpeta llamada *my-app* con una serie de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.

Ingresa a la carpeta *my-app* y ejecuta el proyecto con los siguientes comandos:
```
cd my-app
npm start
```

el ultimo comando ejecuta el servidor de desarrollo y abre un navegador con una pantalla de bienvenida.

Felicidades, has creado tu primer aplicacion con React!

### Que incluye create-react-app?

Un proyecto creado con create-react-app, ademas de React, incluye librerias como:
  
- **Webpack**: quen se encarga de `procesar y empaquetar` nuestro codigo javascript (con sus dependencias), archivos CSS y otros archivos estaticos como imagenes, vectores, fuentes, etc.

- **Babel**: que nos permite usar nuevas caracteristicas de `ECMAScript`.

- **PostCSS**: es una `libreria` para el procesamiento de CSS.

- **Jest**: es una `libreria` para testing.

Uno podria configurar un proyecto de react manualmente e incluir cada una de estas librerias, pero es bastante engorroso, *create-react-app* nos hace la vida mas facil.

### Estructura de carpetas

*create-react-app* crea la siguiente estructura de archivos y carpetas:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Los dos arcchivos mas importantes son:

- **`public/index.html`** - la plantilla HTML de la aplicacion.

- **`src/index.js`** - el punto de entrada javascript de la aplicacion.

Puedes eliminar o renombrar otros archivos segun tus necesidades.

dentro de **`src`** se incluye todos los archivos javasScript y CSS de tu aplicacion.

tambien es recomendable incluir otros archivos estaticos como imagenes y fuentes en esta carpeta. Puedes cear subcarpetas para organizar mejor los archivos.

En **`public`** van todos los archivos estaticos que necesites incluir en la plantilla **`public/index.html`**.

Puedes crear otyras carpetas ademas de **src** y **public**. Estas carpetas no van a ser incluidas en el paquete de distrinucion.

### Scripts

en la carpeta del proyecto puedes ejecutar los siguientes comandos:

- **npm start** - inicia el servidor de desarrollo y abre un navegador con la aplicacion.

- **npm test** - ejecuta las pruebas.

- **npm run build** - empaqueta la aplicacion para produccion enla carpeta **build**.

- **npm run eject** - permite cambiar manualmente las librerias y configuracion que utiliza *create-react-app* por defecto. Ten cuidado con este comando, una vez se expulsa la configuracion **"no hay vuelta atras"**.

### Hot reloading

una de las funcionalidades mas importante de los proyectos creados con create-react-app es la capacidad de hacer cambios en vivo sin necesidad de reiniciar el servidor. Si hacesun cambio en algun archivo *src* o *public* el navegador se refresca automaticamente.