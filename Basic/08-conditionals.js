// if, else if, else

// if (si)

let age = 29

if (age == 29) {
    console.log("La edad es 29")
}

// else (si no)

if (age == 29) {
    console.log("La edad es 29")
} else {
    console.log("La edad no es 29")
}

// else if (si no, si)

if (age == 29) {
    console.log("La edad es 29")
} else if (age < 18) {
    console.log("Ees menor de edad")
} else {
    console.log("La edad no es 29")
}

// Operador ternarios

const message = age == 29 ? "La edad es 29" :  "La edad no es 29"
console.log(message)

// Switch

let day = 0
let dayName

switch (day) {
    case 0: 
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de dia incorrecto"
}

console.log(dayName)


