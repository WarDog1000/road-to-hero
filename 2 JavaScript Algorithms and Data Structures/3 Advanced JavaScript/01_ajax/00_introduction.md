# AJAX 
AJAX significa 'Asynchronous JavaScript And XML'. En pocas palabras, es el uso
del objeto XMLHttpRequest para comunicarse con los servidores.

Puede enviar y recibir informacion en varias formatos, incluidos JSON,
XML, HTML y archivos de texto.

El atractivo de AJAX es su naturaleza 'asincrona', lo que significa que
puede comunicarse con el servidor, intercambiar datos y actualizar la pagina
sin tener que recargar el navegador.

![AJAX](assets/ajax.png)


* Metodos Nativos
  - ActiveXObject (IE8 e inferiors, esta depreciado)
  - XMLHttpRequest
  - API Fetch

* Librerias Externas
  - jQuery.ajax()
  - Axios
  - etc.

AJAX no es una tecnologia en si mismo. En realidad, se trata de varias
tecnologias independientes que se unen:
  - HTML y CSS, para crear una presentacion basada en estandares.
  - DOM, para la interacion y manipulacion dinamica de la presentacion.
  - HTML, XML y JSON, para le intercambio y manipulacion de informacion.
  - XMLHttpsRequest o Fetch, para le intercambio asincrono de informacion.
  - JavaScript, para unir todas las demas tecnologias.

Es importante tambien considerar los 'codigos de estado de respuesta HTTP'
y los estados de la peticion AJAX:
  
  Estado    READY_STATE_UNINITIALIZED
  Valor     0
  
  Estado    READY_STATE_LOADING
  Valor     1
  
  Estado    READY_STATE_LOADED
  Valor     2
  
  Estado    READY_STATE_INTERACTIVE
  Valor     3
  
  Estado    READY_STATE_COMPLETE
  Valor     4