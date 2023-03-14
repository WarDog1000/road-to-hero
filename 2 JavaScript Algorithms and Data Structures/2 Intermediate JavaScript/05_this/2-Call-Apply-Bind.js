/* **********     Curso JavaScript: 58. call, apply, bind - #jonmircha     ********** */

// ==================================== call & aplly ====================================
console.log(this);
this.lugar = 'Contexto Global';

function saludar(saludo = 'Hola', aquien = 'Mundo') {
  console.log(`${saludo} ${aquien} estamos en el ${this.lugar || 'Contexto de Global'}`);
}

saludar();

const obj1 = {
  lugar: 'Contexto Objeto 1'
}

const obj2 = {
  lugar: 'Contexto Objeto 2'
}

// Llama al nuevo contexto de this
saludar.call(obj1, 'Hola', 'Jon'); // lama al obj y sus parametros
saludar.apply(obj2, ['Hola', 'Jon']);// llama al objeto y sus parametros dentro de un array

// null
saludar.call(null, 'Hola', 'Jon'); // null apunta al contexto blobal
saludar.call(this, 'Hola', 'Jon'); // this apunta al contexto blobal
saludar.apply(null, ['Hola', 'Jon']); // null apunta al contexto blobal
saludar.apply(this, ['Hola', 'Jon']); // this apunta al contexto blobal


// ==================================== bind ====================================
const persona1 = {
  nombre: 'jon',
  saludar: function() {
    console.log(`Hola: ${this.nombre}`);
  }
}

persona1.saludar();

const persona2 = {
  saludar: persona1.saludar.bind(persona1) // Enlasa el contexto de persona1
}

persona2.saludar();