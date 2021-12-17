// Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

// Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

// Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

// Símbolo       Valor
//   .             1
//   ,             5
//   :             10
//   ;             50
//   !             100
// Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

// Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

// decodeNumbers('...') // 3
// decodeNumbers('.,') // 4 (5 - 1)
// decodeNumbers(',.') // 6 (5 + 1)
// decodeNumbers(',...') // 8 (5 + 3)
// decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
// decodeNumbers('.;') // 49 (50 - 1)
// decodeNumbers('..,') // 5 (-1 + 1 + 5)
// decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
// decodeNumbers('.;!') // 49 (-1 -50 + 100)
// decodeNumbers('!!!') // 300
// decodeNumbers(';!') // 50
// decodeNumbers(';.W') // NaN

const decodeNumbers = (symbols) => {
    // ¡No olvides compartir tu solución en redes!
    const objSymbols = [
        {symbol: '.', valor : 1},
        {symbol: ',', valor: 5},
        {symbol: ':', valor: 10},
        {symbol: ';', valor : 50},
        {symbol: '!', valor : 100}
    ]
    let result = 0
    let obj1, obj2
    for (let x = 1; x < symbols.length; x++) {
        obj1 = objSymbols.find(symbol => symbol.symbol === symbols[x-1])
        obj2 = objSymbols.find(symbol => symbol.symbol === symbols[x])
        if (obj1 && obj2) {
            if (obj1.valor < obj2.valor) {
                obj1.valor = obj1.valor * -1
            } 
            result = result + obj1.valor
            if (x === symbols.length -1) {
                result = result + obj2.valor
            }
        } else {
            result = NaN
            break
        }
     }
    return result
}

console.log(decodeNumbers('...')) // 3
console.log(decodeNumbers('.,')) // 4 (5 - 1)
console.log(decodeNumbers(',.')) // 6 (5 + 1)
console.log(decodeNumbers(',...')) // 8 (5 + 3)
console.log(decodeNumbers('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('.;')) // 49 (50 - 1)
console.log(decodeNumbers('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')) // 95 (1 - 1 - 5 + 100)
console.log(decodeNumbers('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumbers('!!!')) // 300
console.log(decodeNumbers(';!')) // 50
console.log(decodeNumbers(';.W')) // NaN