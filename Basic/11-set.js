// set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Toni", "Guti", "ToniDev", 29, true, "tonigstm@gmail.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://google.es")

console.log(mySet)

mySet.delete("https://google.es")

console.log(mySet)

console.log(mySet.delete("Toni"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Guti"))
console.log(mySet.has("Toni"))

// size

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("tonigstm@gmail.com")
mySet.add("ToniGstm@gmail.com")
console.log(mySet)