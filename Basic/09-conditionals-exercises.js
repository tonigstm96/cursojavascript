/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Toni"
let nombre2 = "Toñi"
if (nombre === nombre2) {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "toni"
let pass = "pass"
if(usuario === "toni" && pass === "pass") {
    console.log("Usuario y contraseña correctos")
} else {
    console.log("Usuario y contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0

if (numero > 0) {
    console.log("Número positivo")
} else if (numero < 0) {
    console.log("Número negativo")
} else {
    console.log("Cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 12

if (age >= 18) {
    console.log("Puede votar")
} else {
    console.log("A la persona le faltan " + (18 - age) + " años para votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let adultez = age >= 18 ? "Adulto" : "Menor"
console.log(adultez)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 2

if (mes >= 1 && mes <= 3) {
    console.log("Primavera")
} else if (mes >= 4 && mes <= 6 ) {
    console.log("Verano")
} else if (mes >= 7 && mes <= 9) {
    console.log("Otoño")
} else {
    console.log("Invierno")
}
  

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("tiene 30 dias")
} else if (mes === 2){
    console.log("es febrero ")
} else {
    console.log("tiene 31 dias")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español"

switch (idioma) {
    case "español": 
        console.log("Hola!")
        break
    case "inglés":
        console.log("Hello!")
        break
    case "deustch":
        console.log("Kartoffeln")
        break
    default:
        console.log("No lenguage selected")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
    case 1:
    case 2:
    case 3:
        console.log("Primavera")
        break
    case 4:
    case 5:
    case 6:
        console.log("Verano")
        break
    case 7:
    case 8: 
    case 9:
        console.log("Otoño")
        break
    default:
        console.log("Invierno")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dias")
        break
    case 2:
        console.log("es febrero")
        break
    default:
        console.log("31 dias")
}