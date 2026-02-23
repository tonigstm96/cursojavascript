// Strings

// Concatenación

let myName = "Toni"
let greeting = "Hola, " +  myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[10])

// Métodos comunes

console.log(greeting.toLocaleUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Toni"))
console.log(greeting.indexOf("toni"))
console.log(greeting.includes("Toni"))
console.log(greeting.includes("toni"))
console.log(greeting.slice(0, 9))
console.log(greeting.replace("Toni" , "ToniDev"))

// Template literals (plantillas literales)

let message = `Hola este 
es mi 
curso de 
JavaScript`

console.log(message)

let email = "toniguti@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}.`)