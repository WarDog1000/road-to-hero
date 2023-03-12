/* **********     Curso JavaScript: 19. Objetos literales - #jonmircha     ********** */
let nombre = "kEnAi",
  edad = 7;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guauu guauu!!!");
  },
};

console.log(perro);
perro.ladrar();

const dog = {
  nombre,
  edad,
  raza: "Callejero",
  ladrar() {
    console.log("guauu guauu guauu!!!");
  },
};

console.log(dog);
dog.ladrar();
