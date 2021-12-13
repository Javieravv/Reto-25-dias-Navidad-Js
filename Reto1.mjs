// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

// Por ejemplo, si tenemos las ovejas:

// const ovejas = [
//   { name: 'Noa', color: 'azul' },
//   { name: 'Euge', color: 'rojo' },
//   { name: 'Navidad', color: 'rojo' },
//   { name: 'Ki Na Ma', color: 'rojo'},
//   { name: 'AAAAAaaaaa', color: 'rojo' },
//   { name: 'Nnnnnnnn', color: 'rojo'}
// ]
// Al ejecutar el método debería devolver lo siguiente:

// const ovejasFiltradas = contarOvejas(ovejas)

// console.log(ovejasFiltradas)

// // [{ name: 'Navidad', color: 'rojo' },
// //  { name: 'Ki Na Ma', color: 'rojo' }]
// Recuerda. Debe contener las dos letras 'a' y 'n' en el nombre. No cuentes ovejas que sólo tenga una de las letras, debe tener ambas.

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'Pana', color: 'rojo' },
  { name: 'Rana', color: 'amarillo' },
  { name: 'Cantadora', color: 'rojo' },
  { name: 'Marina', color: 'verde' },
  { name: 'Soledad', color: 'rojo' },
  { name: 'Sandra', color: 'rojo'}
]

export const ovejasFiltradas = () => {
    return ovejas.reduce ( (acc, oveja) => {
      if ((oveja.color === "rojo") && (oveja.name.indexOf("a") >= 0) && (oveja.name.indexOf("n") >= 0)) {
          acc = acc.concat(oveja)
      }
      return acc
    },  [])
}

console.log (ovejasFiltradas())
