# REST API

Que es una API?

Una ***API(Application Programming Interface)***, o interfaz de Programacion de Aplicaciones, es un conmjunto de rutinas que provee acceso a funciones de un determinado ***software***, para efectos de esta nota, acceso a las funciones de nuestros sitios y aplicaciones web.

Dentro de los navegadores web tenemos 2 tipos de Apis:

1. ***APIs nativas***, como el ***DOM*** que es el API que nos permite acceder al codigo HTML de nuestros documentos a traves de JavaScript o la de Geaolocalizacion que nos permite acceder a las coordenadas terrestres de nuestra ubicacion actual;
2. ***APIS externas***, como la de twitter que nos permite obtener los ultimos tweets de un usuario, o la de GitHub que nos permite obtener la informacion de los repositorios de una cuenta o como la API de WorPress que nos permite acceder a al informacion de paginas y entradas de un sitio.

La mayoria de APIs externas del desarrollo web actual, funcionan con la Arquitectura REST.

## Que es REST?

El termino REST(Representational State Transfer) o Transferencia de Estado Representacional, se origino en el añO 2000, descrito en la tesis de Roy Fielding, padre de la especificacion HTTP.

Un servicio REST es un complejo de restricciones con las que podemos crear un estilo de arquitectura de software, la cual podremos usar para crear aplicaciones web respetando el protocolo HTTP.

Hoy en dia la mayoria de empresas utilizan API REST para crear servicios. Esto se debe a que es un estandar logico y eficiente para la creacion de servicios web.

Segun Fielding las restricciones que definen a un sistema API REST o RESTful como tambien se le conoce, son:

- Cliente-Servidor: esta restricion mantiene al cliente y al servidor debilmente acoplados. Esto quere decir que el cliente no necesita cononcer los detalles de implementacion del servidor y el servidor se olvida de entender como son usados los datos que envia al cliente.

- Cacheable: debe admitir un sistema de almacenamiento en cache, lo que evitarar repetir varias coneexiones entre el servidor y el cliente para recuperar un mismo recurso.

- Interfaz Uniforme: significa una interfaz generica para administrar cada interaccion que se produzca entre el cliente y el servidor de manera uniforme, lo cual simolifica y separa la estructura. Esta restriccion indica que cada rescurso del servicio REST debe tener una unica direccion (URL) web, a estas rutas se les da el nombre de ***endpoints***.

Si creas aplicaciones web con javascript, las API REST probablemente seran la forma principal de obtener datos para tus aplicaciones, asi como la de enviar datos hacia una base de datos.

Asi que... si las API REST, son el nuevo CRUD del desarrollo moderno, con la venta de que puedes desacoplar tu logica de tu cliente de la del servidor y la base de datos.

CRUD

CREATE - READ - UPDATE - DELETE

```
CRUD      INSERT
REST      POST

CRUD      SELECT
REST      GET

CRUD      UPDATE
REST      PUT

CRUD      DELETE
REST      DELETE
```

Otra ventaja de este modelo de desarrollo es que puedes usar un mismo origen de datos para distintos clientes, por ejemplo un cliente nativo (ios, Android), un cliente de escritorio (Windows) o un cliente web (Navegadores).

### npm install
```
npm i json-server -g
```

### Create a server instance
```
json-server -w db.json
```

PORT:
```
json-server -p 3000
```

***localhost:***
PORT

***ej:*** localhost:3000