// Hello World from TypeScript
console.log("Hello World")

// Variables

// String
let myString: string = "Hello World"
myString

// Number
let myNumber: number = 1
myNumber

// Boolean
let myBoolean: boolean = false
myBoolean

// Float
let myFloat: number = 1.2
myFloat

// undefined
let myUndefined: undefined = undefined
myUndefined

// Any
let myAny: any = [1, "2", false, {}]
myAny


// Constantes

const myConstant: string = "myConstant"
myConstant

// functions

function myFunction(): void { // No retorna nada
  console.log(myConstant)
}
myFunction()

function myRetrun(): String {
  return myConstant
}
console.log(myRetrun())

function myMath(a: number, b: number): number {
  return a + b
}
console.log(myMath(1, 1))

// Lists

// Array
let myList: Array<string> = ["a", "b", "c"]
myList

// Set
let mySet: Set<string> = new Set(["a", "b", "c", "c", "c", "b"]) // No admite repetidos
mySet
mySet.add("d")
mySet

// Map
let myMap: Map<string, number>  = new Map([["a", 1]]) // Lisdado clave: valor
myMap.set("b", 2)
console.log(myMap.get("a"))
myMap

// Bucles
for (const value of myList) {
 console.log(value)
}
for (const value of mySet) {
 console.log(value)
}
for (const value of myMap) {
 console.log(value)
}

let count: number = 0
while (count < myList.length) {
  console.log(myList[count])
  count++
}

// Clases

class MyClass {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

}

let people: MyClass = new MyClass("human", 1)
people

// Enums

enum MyEnum {
  DART = "dart",
  PYTHON = "python",
  JAVA = "java",
  JAVASCRIPT = "javascript",
  LUA = "lua",
  SWIFT = "swift",
  KOTLIN = "kotlin"
}
MyEnum

const myEnum = MyEnum.DART
myEnum