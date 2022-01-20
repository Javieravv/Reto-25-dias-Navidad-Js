// Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

// Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

// La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

// Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

// Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

// const from = 'BAL'
// const to   = 'LIB'
// const canReconfigure(from, to) // true
// /* la transformación sería así:
// B -> L
// A -> I
// L -> B
// */

// const from = 'CON'
// const to   = 'JUU'
// const canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// C -> J
// O -> U
// N -> FALLO
// */

// const from = 'XBOX'
// const to   = 'XXBO'
// const canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// X -> X
// B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
// O -> B
// X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
// */

// const canReconfigure = (from, to)  => {
//     let ctrlTransform = true
//     let newGift = ''
//     let lettersUsed = []
//     if (from.length !==to.length) return false
//     for (let x = 0; x < from.length; x++) {
//         if (lettersUsed.indexOf(to[x]) === -1) {
//             newGift = newGift + to[x]
//             lettersUsed.push(to[x])
//         } else {
//             ctrlTransform = false
//             break
//         }
//     }
//     console.log (newGift)
//     return ctrlTransform
// }

// ESTA NO ES MI SOLUCIṔON. LA COPIÉ DE OTRO LADO

const canReconfigure = (from, to)  => {
    if (from.length !== to.length) return false
    const assign = {}
    for (const i in from) {
      if (Object.values(assign).some(value => value === to[i]) && assign[from[i]] !== to[i]) return false
      if (assign[from[i]] && assign[from[i]] !== to[i]) return false
      assign[from[i]] = to[i]
    }
    return true
}


console.log (canReconfigure('BAL', 'LIB')) // true
console.log (canReconfigure('CON', 'JUU')) // FALSE
console.log (canReconfigure('XBOX', 'XXBO')) // false
