// Curso JavaScript: 29. Operador  Cortocircuito
function saludarPorDefecto(nombre = "este es un valor por defecto"){
    console.log(`Hola ${nombre}`);
}
saludarPorDefecto();//valor por defecto

// Cortocircuito OR - cuando el valor de la izquierda
// en la exprecion siempre puede validar a true, es le valor queueMicrotaskcargara por defecto
// OR
function saludarOR(nombre){
    nombre = nombre || "este es un valor por defecto";// operador cortociercuito, valida si isquierda es true
    console.log(`Hola ${nombre}`);
}
saludarOR();

// Cortocircuito AND - cuando el valor de la 
// izquierda en la expresion siempre puede validar
// a false, es el valor que se cargara por defecto
function saludarAND(nombre){
    nombre = nombre && "este es un valor true";// operador cortociercuito, valida si isquierda es false
    console.log(`Hola ${nombre}`);
}
saludarAND();

console.clear();



