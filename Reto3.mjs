// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

// Ejemplos:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
      
// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

const gif1 = "bici coche (balón bici coche" // -> ❌
const gif2 = "peluche (bici [coche) bici coche balón" // -> ❌
const gif3 = "(peluche {) bici" // -> ❌
const gif4 = "() bici" // ❌
const gif5 = "bici coche (balón) bici coche peluche"
const gif6 = "(muñeca) consola bici"


// export const isValid = (letter) =>  {
//     // ¡No dejes que el Grinch gane!
//     let indexParentesis1 = letter.indexOf('(')
//     let indexParentesis2 = letter.indexOf(')')
//     let Valido = false
//     if (indexParentesis1 > -1 && indexParentesis2 > -1) {
//         const gift = letter.slice(indexParentesis1+1, indexParentesis2)
//         if (gift.length > 0) {
//             Valido = ((gift.indexOf("{") === -1) && (gift.indexOf("[") === -1))
//         }
//     }
//     return Valido
// }

export const isValid = (letter) =>  {
    // ¡No dejes que el Grinch gane!
    if (letter.includes("()")) {
        return false
    } else {
        if (letter.includes("(") && letter.includes(")")) {
            return ((letter.indexOf("{") === -1) && (letter.indexOf("[") === -1))
        } else {
            return false
        }
    }
}

console.log(gif1, isValid(gif1))
console.log(gif2, isValid(gif2))
console.log(gif3, isValid(gif3))
console.log(gif4, isValid(gif4))
console.log(gif5, isValid(gif5))
console.log(gif6, isValid(gif6))