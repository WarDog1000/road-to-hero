/* *********     Curso JavaScript: 12. Objetos - #jonmircha     ********** */

let a = new String("Hola");
//console.log(a)

const b = {};
console.log(b);

const c = new Object();
console.log(c);

/* dentro de un objeto a las variables se le van a llamar atributos/propiedades y a las funciones se les llama métodos */
const jon = {
  nombre: "Jon",
  apellido: "MirCha",
  edad: 35,
  pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
  soltero: false,
  contacto: {
    email: "jonmircha@gmail.com",
    twitter: "@jonmircha",
    movil: "5215512345678",
  },
  saludar: function () {
    console.log(`Hola :)`);
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter.`
    );
  },
};

console.log(jon);
console.log(jon["nombre"]);
console.log(jon["apellido"]);
console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.edad);
console.log(jon.soltero);
console.log(jon.pasatiempos);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto);
console.log(jon.contacto.twitter);
jon.saludar();
jon.decirMiNombre();

console.log(Object.keys(jon));
console.log(Object.values(jon));
console.log(jon.hasOwnProperty("nombre"));
console.log(jon.hasOwnProperty("nacimiento"));
