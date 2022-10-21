// Curso JavaScript: 33. Módulos ( import / export )
import { PI } from "./constantes.js";
console.log(PI);

// import {sumar, restar} from "./aritmetica.js";
// console.log(sumar(1, 2));

import { aritmetica } from "./aritmetica.js";
console.log(aritmetica.sumar(1, 2));

import {saludar} from "./constantes.js"
saludar();

// exportacion por defecto
import xDefecto, { } from "./constantes.js";



