let mensaje: string = "Hola mundo"

mensaje = "chanchito"

mensaje

mensaje = "chau mundo"

mensaje

console.log(typeof [])

// Tipos de datos basicos

let dinoExtincion: number = 76_000_000

let dinofavorite: string = "T-Rex"

let extincion: boolean = true

// Tipos de datos avanzados

let cualquierCosa
cualquierCosa = "texto"
cualquierCosa = 1
cualquierCosa = false

function miFuncion(config: any) { return config }

let animals: string[] = ["bear", "tiguer"]

let numbers: number[] = [1, 2, 3]

let number2: Array<number> = [] 

let checks: boolean[] = []

// animals.map(x => x.) // el autocompletado sujiere metodos del tipo de dato

// === Tuplas ===
let tupla: [number, string] = [1, "lion"]
let tupla2: [number, string[]] = [1, ["lion", "cat"]]

// Enums
const small = 's'
const medium = 'm'
const large = 'l'
const xlarge = 'xl'

enum Talla { Small = 3, Medium, Large, XLarge } // se declara con PascalCase
enum TallaString { Small = 's', Medium = 'm', Large = 'l', XLarge = 'xl' }

const var1 = TallaString.Small
var1

const enum LoadingState {Idle, Loading, Success, Error}

// asignar "enum" a una constante ayuda en la optimizacion, ya que solo se asignan los valores una vez llamados por otras variables que contengan dicho valor
const estado = LoadingState.Success
estado

// === Objetos ====
const objecto = {id :1}
// objecto.nombre = "mi nombre"// error asigment invalid!

// 
const objecto2:{
  readonly id:number // propriedad de solo lectura
  nombre:string,
  booleano?:boolean,
  talla: Talla,
} = {
  id: 1,
  nombre: "mi nombre",
  // verdadero: true,
  talla: Talla.XLarge
}
// 

type Persona = {
  readonly id: number,
  nombre: string,
  talla: Talla
}

const objecto3: Persona = {
  id: 1,
  nombre: "mi nombre",
  // verdadero: true,
  talla: Talla.XLarge
}

// 
type Persona4 = {
  readonly id: number,
  nombre: string,
  talla: Talla,
  direccion?: {
    numero: number,
    calle: string,
    pais: string
  }
}

const objecto4: Persona4 = {
  id: 1,
  nombre: "mi nombre",
  // verdadero: true,
  talla: Talla.XLarge
}

// 
type Direccion = { 
  numero: number,
  calle: string,
  pais: string
}

type Persona5 = {
  readonly id: number,
  nombre: string,
  talla: Talla,
  direccion?: Direccion,
}

const objecto5: Persona5 = {
  id: 1,
  nombre: "mi nombre",
  // verdadero: true,
  talla: Talla.XLarge,
  direccion: {
    numero: 1,
    calle: "my calle",
    pais: "my pais",
  }
}

// 
const arr: Persona[] = []