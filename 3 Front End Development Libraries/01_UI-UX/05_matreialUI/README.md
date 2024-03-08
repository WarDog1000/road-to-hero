
<p align="center">
  <a href="https://mui.com/core/" rel="noopener" target="_blank"><img width="50" height="50" src="https://mui.com/static/logo.svg" alt="MUI Core logo"></a>
</p>

# React + MUI

Este repositorio contiene una aplicación React + Vite que utiliza Material-UI para la interfaz de usuario. La aplicación incluye ejemplos de distintos componentes de Material-UI, y también realiza llamadas a dos APIs externas: una para obtener datos climáticos y otra para obtener datos de personajes de Rick y Morty.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/jhonysouza100/react-material-ui.git
   ```

2. Instala las dependencias

    ```
    npm install 
    ```
## Configuración
   
  Antes de ejecutar la aplicación, asegúrate de configurar las siguientes variables de entorno en un archivo .env en la raíz del proyecto:

  `env`: VITE__WEATHER_API_KEY=TuClaveDeAPIWeather

  Reemplaza TuClaveDeAPIWeather con tu clave de API de [www.weatherapi.com](www.weatherapi.com).

## Ejecución

  Para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:

  bash
  ```
  npm run dev
  ```

## Dependecias

1. **`@emotion/react` y `@emotion/styled`**

   Estas dependencias son utilizadas para trabajar con estilos en React. `@emotion/react` proporciona la integración de Emotion con React, y `@emotion/styled` permite utilizar el styled-component API para crear estilos de manera más intuitiva y dinámica en componentes React.

2. **`@fontsource/roboto`**

   Esta dependencia proporciona una forma sencilla de incorporar la fuente "Roboto" en la aplicación. Roboto es una fuente popular y legible que se utiliza comúnmente en proyectos Material-UI.

3. **`@mui/icons-material`**

   Este paquete contiene los iconos oficiales de Material-UI. Puedes utilizar estos iconos para mejorar la apariencia y la usabilidad de tu aplicación.

4. **`@mui/lab`**

   `@mui/lab` es una biblioteca de Material-UI que contiene componentes experimentales y no consolidados. Proporciona características adicionales que pueden ser útiles en casos específicos.

5. **`@mui/material`**

   Esta es la biblioteca principal de Material-UI que contiene todos los componentes y estilos para construir interfaces de usuario con el diseño de Material Design. Incluye botones, barras de navegación, tarjetas y muchos otros componentes listos para usar.

6. **`notistack`**

   `notistack` es una biblioteca que facilita la implementación de notificaciones en React. Puedes utilizarla para mostrar mensajes de éxito, advertencia o error de manera elegante en tu aplicación.

Cada una de estas dependencias cumple un papel importante en la construcción de mi aplicación React, proporcionando herramientas para estilos, iconos, notificaciones y una interfaz de usuario coherente con Material Design.