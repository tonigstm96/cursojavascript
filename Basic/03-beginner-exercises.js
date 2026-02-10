/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Hola que tal

// 2. Escribe un comentario en varias líneas
/*
Hola 
que
tal
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let nombre = "hola"
let numero = 7
let boolean = false
let indefinido;
let nulo = null
let symbol = Symbol("xd")
let bigInt = BigInt(1)

// 4. Imprime por consola el valor de todas las variables
console.log(nombre)
console.log(numero)
console.log(boolean)
console.log(indefinido)
console.log(nulo)
console.log(symbol)
console.log(bigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof nombre)
console.log(typeof numero)
console.log(typeof boolean)
console.log(typeof indefinido)
console.log(typeof nulo)
console.log(typeof symbol)
console.log(typeof bigInt)


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
nombre = "adios"
numero = 2131
boolean = true
symbol = Symbol("wtf")
bigInt = BigInt(2)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
nombre = 12
numero = "hola"
boolean = "hola otra vez"
indefinido = "definido"
nulo = "ya no es nulo"
symbol = 1231
bigInt = "jeje"

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const nombre2= "hola"
const numero2 = 7
const boolean2 = false
const indefinido2 = undefined
const nulo2 = null
const symbol2 = Symbol("xd")
const bigInt2 = BigInt(1)


// 9. A continuación, modifica los valores de las constantes

// No se puede modificar el valor de una constante

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// directamente ni las escribi