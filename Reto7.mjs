// Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

// const almacen = {
//   'estanteria1': {
//     'cajon1': {
//       'producto1': 'coca-cola',
//       'producto2': 'fanta',
//       'producto3': 'sprite'
//     }
//   },
//   'estanteria2': {
//     'cajon1': 'vacio',
//     'cajon2': {
//       'producto1': 'pantalones',
//       'producto2': 'camiseta' // <- ¡Está aquí!
//     }
//   }
// }
            
// contains(almacen, 'camiseta') // true

// const otroAlmacen = {
//   'baul': {
//     'fondo': {
//       'objeto': 'cd-rom',
//       'otro-objeto': 'disquette',
//       'otra-cosa': 'mando'
//     }
//   }
// }

// contains(almacen, 'camiseta') // true
// contains(otroAlmacen, 'gameboy') // false
// Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacenes.

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

// let coincide = false

// const contains = (store, product) => {
//     // ¡Y no olvides compartir tu solución en redes!
//     let claves = Object.keys(store)
//     for (let x = 0; x < claves.length; x++) {
//         let clave = claves[x]
//         if (typeof store[clave] === "object") {
//             contains (store[clave], product)
//         } else {
//             if (!coincide) {
//                 if (product === store[clave]) {
//                     coincide = true
//                     break
//                 }
//             }
//         }
//     }
//     return coincide
// }

const contains = (store, product) => {
    // ¡Y no olvides compartir tu solución en redes!
    for (const value of Object.values(store)) {
        if (typeof value === "object") {
            if (contains (value, product)) return true
        } else if (value === product) return true
    }
    return false
}

console.log(contains(almacen, 'pantalones')) // true
console.log(contains(otroAlmacen, 'gameboy')) // false
