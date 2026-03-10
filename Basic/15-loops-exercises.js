/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let resultado = 0;

for (let i = 1; i <= 100; i++) {
    resultado += i
}

console.log(resultado)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    if (i%2 == 0) {
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["toni", "antonio", "pepe", "pepa"]

for (let nombre of nombres) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = "murcielago"
let numVocales = 0

for (let i = 0; i < cadena.length; i++) {
    if ((cadena.charAt(i) === 'a') || (cadena.charAt(i) === 'e') || (cadena.charAt(i) === 'i') || (cadena.charAt(i) === 'o') || (cadena.charAt(i) === 'u')) {
        numVocales++
    }
}

console.log(numVocales)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numeros = [1, 2, 3, 4, 5]
resultado = 1

for (let i = 0; i < numeros.length; i++) {
    resultado *= numeros[i]
}

console.log(resultado)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 0; i <= 10; i++) {
    console.log(5 * i)
}

// 8. Usa un bucle para invertir una cadena de texto

let cadenaInvertida = ""

for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i]

}

console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let contadorFibo = 0
let arrayFibo = []
let numerosFibo = 0

while (contadorFibo != 10) {
    arrayFibo.push(numerosFibo)
    if (numerosFibo == 0) {
        numerosFibo += 1
    }
    else {
        numerosFibo = arrayFibo[contadorFibo] + arrayFibo[contadorFibo - 1]
    }
    contadorFibo++
}

console.log(arrayFibo)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

numeros = [1, 2, 3, 4, 5, 32, 55, 6, 66]
numeros10 = []

for (let numero of numeros) {
    if (numero > 10) {
        numeros10.push(numero)
    }
}

console.log(numeros10)

