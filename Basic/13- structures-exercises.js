/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ["vaca", "pollo", "cerdo", "toro", "gato"]

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("gorrion")
animales.push("perro")


// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1)

// 4. Crea un set que almacene cinco libros

let libros = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"])

// 5. Añade dos más. Uno de ellos repetido

libros.add("libro6")
libros.add("libro1")

// 6. Elimina uno concreto a tu elección

libros.delete("libro6")

// 7. Crea un mapa que asocie el número del mes a su nombre

let meses = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(meses.has(5))
console.log(meses.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let verano = ["junio", "julio", "agosto"]
meses.set("verano", verano )

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let array = []
let set = new Set(array)
let map = new Map([
    ["set", set]
])