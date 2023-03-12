/* **********     Curso JavaScript: 24 Clases - #jonmircha y Curso JavaScript: 25. Métodos estáticos, getters y setters - #jonmircha     ********** */
class Animal {
  //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Métodos
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //con el método super() se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log("Soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("Guauuu Guauuu!!!");
  }

  //un método estático se pueden ejecutar sin necesidad de instanciar la clase
  static queEres() {
    console.log(
      "Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre."
    );
  }

  //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
console.log(scooby.getRaza);
scooby.setRaza = "Grán Danés";
console.log(scooby.getRaza);
