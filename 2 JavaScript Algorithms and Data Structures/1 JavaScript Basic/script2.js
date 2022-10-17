// Curso JavaScript: 26. Objeto console
console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es una información");
console.log("Esto es un registro de lo que ah pasado en nuestra app")

// variantes de console.log()
let nombre = "nombre", apellido = "apellido", edad = 35;
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Hola mi nombre es %s %s y tengo %d años`,nombre, apellido, edad);

// ver ambito
console.log(window);
console.log(document);

console.dir(window);
console.log(document);

// crear grupo
console.group("console.group");
console.log("Curos de JavaScript");
console.log("Curso de NodeJs");
console.log("Curso de React");
console.log("Curso de React Native");
console.log("Curso de Diseño y Programacion Web");
console.groupEnd();

// crear tablas
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4], letras = ["a","b","c","d"];
console.table(numeros); console.table(letras);

const perro = {nombre: "Doguii", raza: "petizo", color: "b&g"}
console.table(perro);

// tiempo
console.time("start-end");//parametro point
const array = Array(100);
for(let i=0;i<array.length;i++){
    array[i]=i;
}
console.timeEnd("start-end");

// contador
for(let i=0;i<100;i++){
    console.count("Codigo for");
    console.log(i);
}

// metodo console para hacer pruebas de codigo
let x=1, y=0, pruebaXY="Se espera que x siempre sea menor que y";
console.assert(x<y,{x,y,pruebaXY})

// limpiar pantalla
console.clear();

// Curso JavaScript: 27. Objeto Date
