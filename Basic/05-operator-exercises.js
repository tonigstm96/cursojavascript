/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 1 + 1
let b = 1 - 1
let c = 1 * 1
let d = 1 / 1
let e = 1 % 1
let f = 1 ** 1

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let g = 1
g += a
g -= b
g *= c
g /= d
g %= e
g **= f 

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(15 < 20)
console.log(20 > 15)
console.log(20 == "20")
console.log(20 === 20)
console.log(20 >= 20)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(15 > 20)
console.log(20 < 15)
console.log(20 != "20")
console.log(20 != 20)
console.log(20 !== 20)

// 5. Utiliza el operador lógico and

console.log(15 > 20 && 15 === 20)

// 6. Utiliza el operador lógico or

console.log(15 > 20 || 80 === 99)

// 7. Combina ambos operadores lógicos

console.log((15 > 20 || 14 == 14) && 20 === 21)

// 8. Añade alguna negación

console.log(!(15 > 20) || 14 == 14 && 20 != 21)

// 9. Utiliza el operador ternario
const isMonday = true

isMonday ? console.log("Es lunes") : console.log("No es lunes")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log ((1 + 2) === 3 && 3 == 3)