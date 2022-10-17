// function funcion() {
        //     console.log("uno");
        //     return 19;//termina la funcion
        //     console.log("dos");
        //     console.log("tres");
        //     return "La funcion ah retornado una cadena de texto";
        // }
        // let varFuncion = funcion();
        // console.log(varFuncion);
        // function saludar(nombre = "desconocido", edad = 0){
        //     console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
        // }
        // saludar("Gil", 7);

        // // funciones declaradas vs funciones expresadas
        // declarada();
        // function declarada() {
        //     console.log("esta es una funcion declarada, puede invocarse en cualquier parte de nuestro modulo, incluso antes que la funcion sea declarada.");
        // }
        // declarada();

        // // funcion anonima
        // //expresada();
        // const expresada = function () {
        //     console.log("esta es una funcion expresada, una funcion que se le ah asignado como valor a una variable, si invocamos esta funcion antes de su definicion js nos dira... Cannot access 'expresada' before initialization");
        // }
        // expresada();

        // //arreglos
        // const a = [];
        // const b = [1, true, "hola", ["a", "b", "c"]];
        // console.log(a);
        // console.log(b);
        // console.log(b.length);// .length es una propiedad de los arreglos
        // console.log(b[3]);
        // console.log(b[3][2]);

        // // constructores de arreglos ESC6
        // const c = Array.of("x","y","z");
        // console.log(c);

        // const d = Array(10).fill(false);// crea 10 posiciones con el valor de false
        // console.log(d);

        // const e = new Array();// manera antigua de declarar un arreglo desde su constructor
        // const f = new Array(true, false, 3);

        // // metodos de Arrays
        // const colores = ["rojo","verde","zul"];
        // colores.push("negro");// añade un alemento al final de la fila
        // console.log(colores);
        // colores.pop()// corta un elemento al final de la fila
        // console.log(colores);
        // colores.unshift("magenta");// coloca un elemento al inicio de la fila
        // console.log(colores);
        // colores.shift();// corta un elemento al principio de la fila
        // console.log(colores);

        // colores.forEach(function(element, index){// recorre el .length de la fila recuperando cada elemento y su index
        //     console.log(`<li id="${index}">${element}</li>`);
        // });

        // // objetos
        //  let string = new String("");

        //  const objetoA = {};
        //  console.log(objetoA);

        //  const joni = {// atributos de un objeto
        //     /*dentro de un objeto:
        //     -las variables se llaman atributos
        //     -las funciones se llaman metodos
        //     */

        //     edad: 27,
        //     apellido: "saludame",
        //     nombre: "esta",
        //     pasatiempos: ["estudios", "videojuegos","tarining"],
        //     carrera:{
        //         titulo: "frontend",
        //         empleado: false,
        //         rama: 2
        //     },
        //     saludar: function (){
        //         console.log(`Mi nombre es ${this.apellido} ${this.nombre}`);
        //     }
        //  };
        //  console.log(joni);
        //  console.log(joni["nombre"]);
        //  console.log(joni.nombre);

        //  console.log(joni.pasatiempos[1]);// llamar arreglo del obj
        //  console.log(joni.carrera.titulo);//llamar obj del obj
        //  joni.saludar();// llamar metodo del obj

        //  console.log(Object.keys(joni));
        //  console.log(Object.values(joni));
        //  console.log(joni.hasOwnProperty("nombre"));// evalua si se encuentra la propriedad

        // //  operadores
        // // aritmeticos + - * / %
        // let arit = 5 + (5-10)*3;
        // let modulo = 5 % 2; 
        // console.log(modulo);

        // // relacionales < > <= >= == === != !==
        // console.log(8>9);// condicion
        // console.log(9>8);
        // console.log(8>=9);
        // console.log(9>=8);
        // console.log(7<7);
        // console.log(7<=7);

        // // asignacion = == ===
        // console.log(7==7);
        // console.log(7=="7");
        // console.log(7==="7");
        // console.log(0==false);
        // console.log(0===false);

        // // incremento y decremento ++ --
        // let i = 0;
        // i = i + 1;
        // console.log(i);
        // i+=i;
        // console.log(i);
        // i++; // auto incremento
        // console.log(i);
        // i--; // auto decremento
        // console.log(i);

        // // logicos !not ||or &and
        // console.log(1 === 2 || 1 < 2); // || mientras una condicion, se cumpla se valida verdadero
        // console.log(1 === 2 && 1 < 2); // || mientras se cumplan todas la condiciones, se valida verdadero

        // // condicionales if else
        // let edad = 17;
        // if (edad >= 17) {
        //     console.log("eres mayor");
        // } else {
        //     console.log("eres menor");
        // }

        // let hora = 16;
        // if (hora >= 0 && hora <= 5) {
        //     console.log("desaje dormir");
        // } else if (hora >= 6 && hora <= 11) {
        //     console.log("buenos dias");
        // } else if (hora >= 12 || hora <= 18) {
        //     console.log("buenas tardes");
        // } else if (hora >= 19 && hora <= 23) {
        //     console.log("buenas noches");
        // }

        // // operador ternario (condicion)? verdadero : falso;
        // let esMayor = (edad >= 17) ? "ERES MAYOR" : "ERES MENOR";
        // console.log(esMayor);

        // // swich case 
        // let dia = 2;
        // switch (key) {
        //     case 0:
        //         console.log("lunes");
        //         break;
        //     case 1:
        //         console.log("miercoles");
        //         break;
        //     case 2:
        //         console.log("viernes");
        //         break;
        //     default:
        //         break;
        // }

        // // ciclos loops
        // // while()
        // let contador = 0;
        // while(contador <  10){
        //     console.log("while = "+contador);
        //     contador++;
        // }
        // // do{} while()
        // let i = 1;
        // do{
            
        //     console.log(i+"° "+"do while = "+contador);
        //     contador++;
        //     i++;
        // }while(contador < 10);
        // // for()
        // for(let i=0;i<10;i++){
        //     console.log("for = "+i);
        // }

        // //for in // ESC6 
        // const obj = {tipo: "fuego", nombre: "charmander", rol: "daño"};
        // for(const atributo in obj){ //me permite recorrer las propiedades de un objeto
        //     console.log(atributo);
        // }

        // for(const atr in obj){
        //     console.log(`Key:${atr}, Values:${obj[atr]}`);
        // }
        // // for of
        // const array = [10,20,30];
        // for(const i of array){// me permite recorrer todos los elemetos de un array u objeto iterable
        //     console.log(i);
        // }
        
        // const cadena = "Hola for of";
        // for(const i of cadena){
        //     console.log(i);
        // }
        
        // // captura de errores con try-catch
// try{
//     console.log("en el tri se agrega el codigo num evaluar");
//     varErronea;
//     console.log("otro mensaje en el try");
// }catch(error){
//     console.log("catch captura qualquier error seguido o lansado en el try")
//     console.log(error);
// }finally{

//     console.log("el bloqur finally se ejecutara siempre al fianl de un bloque try-catch");
// }

// try{
// let num = "z";
// if(isNaN(num)){// funcion que averigua si el valor es un numero
//     throw new Error("let num no es un numero");
// }
// console.log(num * num);
// }catch(e){
//  console.log(`se produjo el siguiente error: ${e}`);
// }


// // breack continue
// const num = [1,2,3,4,5,6,7,8,9,0];
// for(let i=0;i<num.length;i++){
//     if(i === 5){
//         break;// breack se lase de la estructura
//     }
//     console.log(num[i]);
// }

// for(let i=0;i<num.length;i++){
//     if(num[i]%2 !== 0 ){// salteo numero impares
//         continue;// continue omite una iteracion sin salirse del bloque
//     }
//     console.log(num[i]);
// }

// // destructuracion
// const num = [1, 2, 3];
// //sin destructuracion
// let uno = num[0], dos = num[1], tres = num[2];
// console.log(uno, dos, tres);
// //con destructuration
// const [one, two, three] = num;
// console.log(one, two, three);

// const obj = {
//     nombre: "joni",
//     edad: 27,
//     profesion: "desarrollador"
// };
//  const {nombre, edad, profesion} = obj;//en base al nombre de propriedad se asignan los valores a la variable
// console.log(nombre, edad, profesion);// la variable qu pretendo crear debe ser igaul a la propriedad que quiero ahislar

// // objetos literales
// let nombre = "Kea", edad = 7;
// const perro = {
//     nombre: nombre,
//     edad: edad,
//     ladrar: function (){
//         console.log("guauu-guauuuu");
//     }
// }
// console.log(perro);
// perro.ladrar();

// //literales
// const dog ={
//     nombre,
//     edad,
//     raza: "Callejero",
//     ladrar(){
//         console.log("guauuu-guaaa");
//     }
// }
// console.log(perro);
// dog.ladrar();

// // parametros REST y operador SPREAD
// // rest
// function sumar(a,b, ...c){// rest ...c puede ser infinito
//     let resultado = a + b;
//     c.forEach(function(value){
//         resultado += value; 
//     });
//     return resultado;
// };
// console.log(sumar(1,2,3));
// console.log(sumar(1,2,3,4,5,6));
// console.log(sumar(1,2,3,4,5,6,7,8,9));
// // spread
// const arr1 = [0,1,2,3,4];
// const arr2 = [5,6,7,8,9];
// console.log(arr1, arr2);
// const arr3 = [...arr1,...arr2];// basicamento los concatena o los fusiona
// console.log(arr3);

// // arrow functions
// //funcion expresada: se asigana una fancion a una variable;
// const saludar = function(){
//     console.log("Hola funcion expresada");
// }
// //funcion declarada: la funcion puede ser llamada inclusive antes de ser creada, porque se encuentra en un hambito global
// function saludar2 (){
//     console.log("Hola funcion declarada");
// }
// //Arrow function
// const saludar3 = ()=>{// se expresa la funcion a una variable quitando la palabra reservada "function"
//     console.log("Hola arrow function");
// }
// // si solo posee una linea de instruccion
// const saludar4 = ()=> console.log("Hola arrow function abreviada en una sola linea");
// // recibe parametros
// const saludar5 = (nombre)=> console.log(`Hola ${nombre} como estas?`);
// // si resibe solo un parametro no es nesesario los parentesis
// const saludar6 = nombre => console.log(`Hola ${nombre}`);
// // no requiere return
// const sumar = (a,b) => a +b;
// console.log(sumar(1,2));
// // vs ejemplos
// const numeros = ["zero","uno","dos","tres"];
// numeros.forEach((value,index)=> console.log(`El elemento ${value} esta en la posicion ${index}`));
// // capturan el objeto.this del ambito donde se encuentran
// const perro = {
//     nombre: "spike",
//     ladrar:() =>{
//         console.log(this);// captura el contexto del ambito donde se necuentra 
//         console.log(this.nombre);// ingnora "nombre"
//     },
//     ladrar2(){// forma correcta de crear una funcion para un objeto
//         console.log(`${this.nombre} guauu-guauuu`)
//     }
// };
// perro.ladrar();
// perro.ladrar2();

// POO 
// clases - modelo a seguir
// objeto - es una instancioa de una clase
// atributos - caracteristicas de un objeto
// metodos - son las acciones que un objeto puede realiazar (funciones)
// herencia - los hijos heredan las caracteristicas del padre
// const animal = {
//   nombre: "snoopy",
//   sonar(){
//       console.log("hoago sonidos porque estoy vivo");
//   }
// }
// console.log(animal);

// const animal2 = {
//   nombre: "Lola Bunny",
//   sonar(){
//       console.log("hogo sonidos porque estoy vivo");
//   }
// }

// console.log(animal2);

// // funcion constructora v1
// // function Animal(nombre, genero){
// //   this.nombre = nombre;
// //   this.genero = genero;

// //   this.sonar = function(){
// //     console.log("Hagho sonidos porque estoy vivo");
// //   }
// //   this.saludar = function(){
// //     console.log(`Hola me llamo ${this.nombre}`);
// //   }
// // }
// //funcion constructora v2 / donde asignamos los metodos al prototypo
// function Animal(nombre, genero){
//   this.nombre = nombre;
//   this.genero = genero;

//   Animal.prototype.sonar = function(){//metodos agregado alprototypo de la funcio constructora
//     console.log("Hago sonidos porque estoy vivo");
//   }
//   this.saludar = function(){
//     console.log(`Hola me llamo ${nombre}`);
//   }
// }

// //herencia prototipica
// function Perro(nombre,genero,size){// cada nueva instancia de Perro clonaria cada funcion super
//   this.super = Animal;
//   this.super(nombre,genero);
//   this.size = size;
// }

// //Perro esta heredando de animal
// Perro.protoype= new Animal();//linea que hace la herencia
// Perro.prototype.constructor = Perro;

// //sobreescritura del metoto del prototypo padre en el hijo
// Perro.prototype.sonar = function(){
//   console.log("Soy un perro y mi sonido es un ladrido");
// }

// Perro.prototype.ladrar = function(){
//   console.log("Guaw guaw");
// }


// const // v2 / ahora evitamos que las instancias de Animal tengan la funcion sonar duplicada
//   lola = new Animal("Lola Bunny", "hembra"),
//   snoopy =new Perro("Snoopy","macho", "mediano");

// console.log(lola);
// lola.saludar();
// lola.sonar();

// console.log(snoopy);
// snoopy.saludar();
// snoopy.sonar();
// snoopy.ladrar();

// // funcion constructora // v3 no hace falta asignar los metodos al prototype
// class Animal {// las clases no resibe parametros
//   // el metodo constructor es un metodo especial que se ejecuta en el momento de crar un objeto class
//   constructor(nombre, genero) {
//     //atributos
//     this.nombre = nombre;
//     this.genero = genero;
//   }
//   //metodos
//   sonar() {//metodos agregado alprototypo de la funcio constructora
//     console.log("Hago sonidos porque estoy vivo");
//   }
//   saludar() {
//     console.log(`Hola me llamo ${this.nombre}`);
//   }
// }

// //herencia de class
// class Perro extends Animal {
//   constructor(nombre, genero, size) {
//     //super es un metodo que manda a llamar el constructor de la clase padre
//     super(nombre, genero);
//     this.size = size;

//     this.raza = null;
//   }
//   //sobreescritura
//   sonar() {
//     console.log("Soy un perro y mi sonido es un ladrido");
//   }
//   //nuevo metodo proprio de la clase perro
//   ladrar() {
//     console.log("Guaw guaw");
//   }

//   //metodos estaticos: se puede ejecutar sin instanciar la clase
//   static describe() {
//     console.log("Este es un metodo estatico, se puede ejecutar sin la nesesidad de instanciar la clase")
//   }

//   //los setter y getter son metodos especiale que nos van a permitir establecer y obtener los valores de atributos de nuestra clase
//   // aunque son metodos, se ejecutan como atributos
//   get getRaza(){// metodod que solo devuelve
//     return this.raza;
//   }
//   set setRaza(raza){// recibe un valor
//     this.raza=raza;
//   }
// }

// // nota: las clases siguen siendo prototypes...
// const
//   mimi = new Animal("Mimi", "hembra"),
//   scooby = new Perro("Scooby", "macho", "gigante");

// console.log(mimi);
// mimi.saludar();
// mimi.sonar();

// console.log(scooby);
// scooby.saludar();
// scooby.sonar();

// //metodo estatico
// Perro.describe();

// //getter y setter 
// scooby.setRaza = "Gran Danés";
// scooby.getRaza;
// console.log(scooby.getRaza);