// En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

// Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

// Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

// Vamos a ver unos ejemplos de frases:

// pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
// pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

// pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
// pangram('De la a a la z, nos faltan letras') // false
// Y ya que estás... ¿Cuál es tu pangrama favorito? ¡Compártelo en nuestra comunidad de Discord!

const pangram = (letter) => {
    // ¡No olvides compartir tu solución en redes!
    const letAcent  = ['Á','É','Í','Ó','Ú','Ä','Ë','Ï','Ö','Ü']
    const letAcent1 = ['A','E','I','O','U','A','E','I','O','U']
    const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    let ctrlPangram = true
    let arrLetter = letter.toUpperCase().split('')
    arrLetter.forEach ((elem, ind) => {
        let indTemp = letAcent.indexOf(elem)
        if (indTemp > -1) {
            arrLetter[ind] = letAcent1[indTemp];
        }
    })
    for (let x = 0; x < alphabet.length; x++) {
        if (arrLetter.indexOf(alphabet[x]) === -1) {
            ctrlPangram = false
            break
        }
    }
    return ctrlPangram
}

console.log (pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log (pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log (pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false

console.log (pangram('De la a a la z, nos faltan letras')) // false
