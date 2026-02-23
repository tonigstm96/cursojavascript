/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
console.log("hola " + "adios")

// 2. Muestra la longitud de una cadena de texto
const hola = "hola"
console.log(hola.length)

// 3. Muestra el primer y último carácter de un string
console.log(hola[0] + (hola.length - 1))

// 4. Convierte a mayúsculas y minúsculas un string
console.log(hola.toLowerCase())
console.log(hola.toUpperCase())

// 5. Crea una cadena de texto en varias líneas
const frase = `Hola
esto
es
una
frase`
console.log(frase)

// 6. Interpola el valor de una variable en un string
console.log(`${hola} que tal estás`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
const frase2 = "prueba con espacios"
console.log(frase2.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(frase2.includes("prueba"))

// 9. Comprueba si dos strings son iguales
console.log(frase === frase2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(frase.length === frase2.length)