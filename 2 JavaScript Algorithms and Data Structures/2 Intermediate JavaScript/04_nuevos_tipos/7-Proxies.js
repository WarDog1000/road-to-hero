/* **********     Curso JavaScript: 55. Proxies - #jonmircha     ********** */

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};
const manejador = {
  set(obj, prop, value) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.log(
        `La propriedad ${prop} no exite en el objeto persona.`
      );
    }
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-z\s]+$/g.test(value)
    ) {
      return console.log(
        `La propriedad ${prop} solo acepta letras y espacios en blanco`
      );
    }
    obj[prop] = value;
  },
};

console.log(persona);

const jon = new Proxy(persona, manejador);
jon.nombre = "Dino";
jon.apellido = 19;
jon.edad = 28;
jon.twitter = "@jonsalchichon";
console.log(jon);
console.log(persona);
