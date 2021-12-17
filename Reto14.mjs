// ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

// Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

// 👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

// 👎 Lo malo: la lista está desordenada y podría faltar el último...

// Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

// missingReindeer([0, 2, 3]) // -> 1
// missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
// missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
// missingReindeer([3, 0, 1]) // -> 2
// missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
// missingReindeer([0]) // -> 1 (¡es el último el que falta!)
// Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?

const missingReindeer = (ids) => {
    // ¡No olvides compartir tu solución en redes
    ids.sort((x, y) => x - y)
    let reindeerLost = ids[ids.length - 1] + 1
    for (let x = 0; x < ids.length; x++) {
        if (ids[x] != x) {
            reindeerLost = x 
            break
        }
    }
    return reindeerLost
}

// console.log(missingReindeer([0, 2, 3])) // -> 1
// console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
// console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
// console.log(missingReindeer([3, 0, 1])) // -> 2
// console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
// console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)
console.log(missingReindeer([20, 15, 16, 4, 1, 18, 2, 0, 3, 7, 11, 17, 5, 6, 8, 9, 10, 12, 13, 14]))
// Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?