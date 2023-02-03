// Plantillas Literales 08:46:22
// - Se usa el acento invertido (backtick) `` en lugar de comillas.
// - Pueden contener comillas simples y dobles.
// - Dentro de ${} tambien puedes ecribir expresiones.

var a = 6;
console.log(`El valor de a es ${a}`);

var edad = 6, nombre = 'Nora';
console.log(`Mi nombre es ${nombre} y tengo ${edad} anhos.`);

var miArr = [1, 2, 3, 4];
console.log(`El arreglo es ${miArr}`);
console.log(`El arreglo es ${JSON.stringify(miArr)}`);

var persona = {
    nombre:'Gina Cass',
    edad: 10
};

const saludo = `Hola mi nombre es ${persona.nombre} y tengo ${edad} anhos.`;
console.log(saludo);