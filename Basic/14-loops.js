// Loops o bucles

// for
for(let i = 0; i < 5; i++){
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for(let i = 0; i < numbers.length; i++){
    console.log(`Elemento: ${numbers[i]}`)
}

// while

let i = 0

while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito
// while (true) {

// }

// do while

i = 0

do {
     console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of

let myArray = [1, 2, 3, 4]

let mySet = new Set(["Toni", "Guti", "ToniDev", 29, true, "tonigstm@gmail.com"])

let myMap = new Map([
    ["name", "Toni"],
    ["email", "tonigstm96@gmail.com"],
    ["age", 29]
])

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

// Buenas prácticas

// break y continue

for(let i = 0; i < 10; i++){
    if (i == 5){
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}
