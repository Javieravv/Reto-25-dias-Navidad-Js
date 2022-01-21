// Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

// Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

// Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

// El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

// Un espacio vacío es que no hay nada
// Una m es el ratón
// Un * es la comida
// Vamos a ver unos ejemplos:

// const room = [
//   [' ', ' ', ' '],
//   [' ', ' ', 'm'],
//   [' ', ' ', '*']
// ]

// canMouseEat('up',    room)   // false
// canMouseEat('down',  room)   // true
// canMouseEat('right', room)   // false
// canMouseEat('left',  room)   // false

// const room2 = [
//   ['*', ' ', ' ', ' '],
//   [' ', 'm', '*', ' '],
//   [' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', '*']
// ]

// canMouseEat('up',    room2)   // false
// canMouseEat('down',  room2)   // false
// canMouseEat('right', room2)   // true
// canMouseEat('left',  room2)   // false
// ¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!

// Ubicar ratón y establecer sus coordenadas x,y
// x es la fila
// y es la columna
// con base en ello se determinará si con el movimiento encuentran o no comida.

const canMouseEat = (direction, game) => {
    let mousePosition = [], foodPosition = []
    const directions = {
        'up'    : -1, 
        'down'  : 1,
        'right' : 1,
        'left'  : -1
    }
    const gameDimension = {
        'height' : game.length,
        'width'  : game[0].length
    }
    
    for (let x = 0; x < game.length; x++) {
        let fileGame = game[x]
        let position = fileGame.indexOf('m')
        if (position > -1) {
            mousePosition.push(x, position)
            break
        }
    }

    if ((direction === 'up') || (direction === 'down')) {
        foodPosition.push(mousePosition[0] + directions[direction], mousePosition[1])
    } else {
        foodPosition.push(mousePosition[0], mousePosition[1] + directions[direction])
    }

    if (
        (foodPosition[0] < 0) || (foodPosition[0] >= gameDimension['height'])
        || (foodPosition[1] < 0) || (foodPosition[1] >= gameDimension['width'])
    ) return false

    return game[foodPosition[0]][foodPosition[1]] === '*'
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

console.log (canMouseEat('upt', room))   // false
console.log (canMouseEat('down',  room))   // true
console.log (canMouseEat('right', room))   // false
console.log (canMouseEat('left',  room))   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

console.log (canMouseEat('up',    room2))   // false
console.log (canMouseEat('down',  room2))   // false
console.log (canMouseEat('right', room2))   // true
console.log (canMouseEat('left',  room2))   // false