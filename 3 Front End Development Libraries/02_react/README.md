# React Introduccion

React es una `biblioteca` javaScript altamente eficiente y declarativa que se utiliza para crear interfaces de usuario interactivas.

Fue creado por el ingeniero de Facebook ***Jordan Walke*** y se lanzo en mayo de 2013.

En los ultimos años, ha superado a sus rivales y ha establecido firmemente su dominio.

React te insita a crear **codigo declarativo** (indicas el que, no el como) y **orientado a componentes**.

Un componente es una pieza de codigo que puede representar una parte de la interfaz de usuario o una funcionalidad en particular que se puede encapsular y reutilizar en diferentes partes de un desarrollo o incluso en diferentes aplicaciones.

Cada componente **reaccionara** a cambios internos (en su estado) o externos (nuevas propriedades recibidas) y se volvera a redibujar (renderizar) en la interfaz. Para ello React utiliza su **Visual DOM** que es una copia del **DOM** original del navegador para solo hacer los cambios necesarios en los nodos que haya reaccionado y eviatr redibujar todo el arbol del DOM.

Para poder interactuar con la interfaz React tiene **eventos sinteticos** que son una abstraccion de los eventos nativos de los navegadores, para mejorar la compatibilidad y evitar el uso de librerias para **crossbrowsing**.