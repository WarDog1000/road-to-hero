// Crear Objetos de Forma Concisa
const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma
    }
};

const hugo = crearPersona('Hugo', 18, 'Espanhol');
hugo

// mejor forma
const crearPersonaConcisa = (nombre, edad, idioma) => ({nombre, edad, idioma});
const joni = crearPersonaConcisa('Joni', 18, 'Espanhol');
joni

// Metodos
const personaII = {
    nombre: 'Isabel',
    saludar: function () {
        return `Hola mi nombre es ${this.nombre}`;
    }
}
var saludo = personaII.saludar();
saludo

// mejor forma
const personaConsisa = {
    nombre: 'Isabel',
    saludar() { return `Hola mi nombre es ${this.nombre}`;}
}
var saludo = personaConsisa.saludar();
saludo

// Definir una Clase
class miClass {
    constructor(planeta){
        this.planeta = planeta;
    }
}

var zeus = new miClass('jupiter');
zeus
var era = new miClass('venus');
era


class Mascota {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
var mascota = new Mascota('Nora', 5);
mascota

// Getter y Setter
class Robot {
    constructor(nombre){
        this._nombre = nombre; //  propriedad privada
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}

const bender = new Robot('Bender');
console.log(bender.nombre);
bender.nombre = 'pinocho';
bender;

