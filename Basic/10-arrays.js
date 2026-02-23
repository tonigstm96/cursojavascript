// array


// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)


console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)


console.log(myArray)
console.log(myArray2)

myArray = ["Toni", "Guti", "ToniDev", 29, true]
myArray2 = new Array("Toni", "Guti", "ToniDev", 29, true)


console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Toni"
// myArray2[0] = "Guti"
myArray2[1] = "ToniDev"

console.log(myArray2)

myArray = []
myArray[2] = "Toni"
// myArray[0] = "Guti"
myArray[1] = "ToniDev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Toni")
myArray.push("Guti")
myArray.push("ToniDev")
myArray.push(29)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unsift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Toni", "ToniDev")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray.push("Toni", "Guti", "ToniDev", 29, true)
let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Toni", "Guti", "ToniDev", 29, true]

myArray.splice(1, 2, "Nuevo elemento")
console.log(myArray)