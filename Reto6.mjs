// Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

// A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

// La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

// Si no se encuentra, se devuelve null.

// Veamos unos ejemplos:

// sumPairs([3, 5, 7, 2], 10) // [3, 7]
// sumPairs([-3, -2, 7, -5], 10) // null
// sumPairs([2, 2, 3, 1], 4) // [2, 2]
// sumPairs([6, 7, 1, 2], 8) // [6, 2]
// sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]
// El resultado tiene que ser un array con dos números.

// Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para no tener que recorrer las mismas situaciones dos veces 🤔?

// const sumPairs = (numbers, result) => {
//     let arrayResult = []
//     let resultado, num1, num2
//     for (let x=0; x <= numbers.length - 2; x++) {
//         num1 = numbers [x]
//         for (let y = x + 1; y <= numbers.length -1; y++) {
//             num2 = numbers[y]
//             resultado = num1 + num2
//             if (resultado === result) {
//                 break
//             }
//         }
//         if (resultado === result) {
//             arrayResult.push(num1)
//             arrayResult.push(num2)
//             break
//         }
//     }
//     if (resultado === result) {
//         return arrayResult
//     } else {
//         return null
//     }
// }

const sumPairs = (numbers, result) => {
    let num1, num2, coincide = false

    let x = 0;
    while (x <= numbers.length - 2 && !coincide) {
        num1 = numbers [x]
        let y = x + 1
        while (y <= numbers.length - 1 && !coincide) {
            num2 = numbers [y]
            coincide = ((num1 + num2) === result)
            y++
        }
        x++
    }
    if (coincide) {
        return [num1, num2]
    } else {
        return null
    }
}

console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]
