let vocales = prompt("ingrese la palabra")

function contarVocales(texto) {
    let letrasvocales = "aeiouAEIOU";
    let cant = 0;

    for (let i = 0; i < texto.length; i++) {
        if (letrasvocales.includes(texto[i])) {
            cant++;
        }
    }
    return cant;
}
console.log(contarVocales(vocales))