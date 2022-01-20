// El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

// Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar los árboles que ya creamos en el reto 22.

// Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas. Aquí tienes unos ejemplos:

// const tree = {
//   value: 1,
//   left: { value: 2, left: null, right: null },
//   right: { value: 3, left: null, right: null }
// }

// checkIsSameTree(tree, tree) // true

// const tree2 = {
//   value: 1,
//   left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
//   right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
// }

// checkIsSameTree(tree, tree2) // false
// checkIsSameTree(tree2, tree2) // true

// El cuñado 🦹‍♂️, que se las sabe todas, me ha dicho que tenga cuidado porque el truco del JSON.stringify puede no funcionar... ya que los árboles pueden ser el mismo pero el orden de representación de las ramas izquierda y derecha puede ser inversa...

const checkIsSameTree = (treeA, treeB) => {
    let sameTrees = true
    const array1 = JSON.stringify(treeA)
    const array2 = JSON.stringify(treeB)

    console.log (array1)
    console.log(array1.split(','))
    console.log (array2)
    console.log(array2.split(','))
    // let  array3 = [], array4 = []
    // for (let i in array1) 
    //     array3.push (array1[i])
    // for (let i in array2) 
    //     array4.push (array2[i])
    
    // if (array3.length !== array4.length) {
    //     sameTrees = false
    // } else {
    //     for (let x = 0; x < array3.length; x++) {
    //         if (array3[x] !== array4[x]) {
    //             sameTrees = false
    //             break
    //         }
    //     }
    // }
    // return sameTrees
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}
const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

console.log (checkIsSameTree(tree, tree2)) // true
