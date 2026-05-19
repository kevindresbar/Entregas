function contarVocales(frase) {
    let texto = frase.toLowerCase();
    let conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 }

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i]
        if (conteo[letra] !== undefined) {
            conteo[letra]++
        }
    }
    return conteo;
}

console.log(contarVocales("Hola mundo"));