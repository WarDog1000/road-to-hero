/* **********     Curso JavaScript: 57. this - #jonmircha     ********** */
console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj1 = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj1.imprimir();

const obj2 = {
  nombre: "Contexto Objeto 2",
  imprimir,
};

obj2.imprimir();

const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();

function Persona(nombre) {
  const that = this;
  //this.nombre = nombre;
  that.nombre = nombre;

  //return console.log(this.nombre);

  //return function () {
  //console.log(this.nombre);
  //}

  //return () => console.log(this.nombre);

  return function () {
    console.log(that.nombre);
  };
}

let jon = new Persona("Jon");
jon();