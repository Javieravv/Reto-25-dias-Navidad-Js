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

// Esta solución no es mía. La tomé de otro lado.
// Fuente: https://platzi.com/tutoriales/1339-fundamentos-javascript/7308-comparacion-de-objetos-en-js/?utm_source=google&utm_medium=cpc&utm_campaign=12915366154&utm_adgroup=&utm_content=&gclid=Cj0KCQiAraSPBhDuARIsAM3Js4rNwBpvjE4SZs7pgZq1516LKVRKIWmSmDeVFG8S8Y7Y46mG7cijNa8aAokWEALw_wcB&gclsrc=aw.ds

const checkIsSameTree = (treeA, treeB) => {
    let keysObjet1 = Object.keys(treeA);
    let keysObjet2 = Object.keys(treeB);

    if (keysObjet1.length !== keysObjet2.length) return false

    for ( let key of keysObjet1) {
      let value1 = treeA[key]
      let value2 = treeB[key]
      let areObj1 = Object.prototype.toString.call(value1) === '[object Object]'
      let areObj2 = Object.prototype.toString.call(value2) === '[object Object]'
      let areObjects = areObj1 && areObj2

      if (
          ( areObjects && !checkIsSameTree (value1, value2)) ||
          ( !areObjects && value1 !== value2)
      ) return false
    }
    return true
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

console.log (checkIsSameTree(tree, tree)) // true
console.log (checkIsSameTree(tree, tree2)) // false
console.log (checkIsSameTree(tree2, tree2)) // true
