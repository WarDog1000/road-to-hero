# Reactividad en Javascript

Para comprender el paradigma de la programacion reactiva en javascript y entender como es que funcionan internamente librerias y framworks como React, Angular, Vue, Svelte, Polymer, ect; es necesario comprender algunos conceptos importantes:

### Reactividad

La reactividad de los datos, simplemente es que la interfaz de usuario de un sitio o aplicación se modifica a los cambios en los datos de la misma.

Cada vez que se actualizan los datos, la interfaz de usuario lo hace automáticamente para que coincida con la lógica de programación de la aplicación.

### Estado

El estado son los datos de tu aplicacion.

Entonces, porque se llama estado en lugar de datos?

Porque tiene una duracion determinada, el estado son datos en un momento particular de la aplicación, por ello decimos: ***el estado actual de los datos de la aplicación***.

### Interfaz basada en el estado

Para definir el termino componente citare la definicion de Nicole Sullivan  que dice:

`"It's repeating visual pattern, that can be abstracted into an independent snippet HTML, CSS and possibly javaSctip".`

traduciendo:
Es un patron visual repetido, que se puede resumir en un fragmento independiente de HTML, CSS y posiblemente javaScript.

Los componentes:

- Son un fragmento de la interfaz que cumplen una unica funcion.
- Son reutilizables (principio DRY - Don't Repeat Yourself).
- Son independientes, tanto de su contexto como del resto de componentes.
- Son autocontenidos, no filtran estilos o funcionalidad a otros componentes.

## Programacion Reactiva Orientada a Componentes

Con lo descrito anteriormente podemos decir que una aplicacion reactiva basada en componentes nos permite separa el codigo y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estaran aisladas unas de otras, y en lugar de intentar apuntar y manipoular directamente el DOM cuando la aplicacion `reaccione` a las acciones del usuario, esta actualizara su estado y luego la interfaz se repintara con los cambios en el estado.

1. Reactividad en javaScript.
2. Manipulacion NO Reactiva del DOM.
3. Interfaz de Usuario (UI) basada en el estado.
4. Estado Reactivo.
5. Estado Inmutable.
6. Componentes con Estado.
7. Programando una Libreria para crear Componentes con Estado.

