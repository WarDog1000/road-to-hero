/* **********     Curso JavaScript: 33. Módulos ( import / export ) - #jonmircha     ********** */
import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculo} from "./aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3, 4));
console.log(calculo.sumar(1, 2));
console.log(calculo.restar(2, 3));
saludar();
let saludo = new Saludar();
saludo;
