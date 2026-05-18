function sumarArray(numero){
 let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma;
}
function encontrarMayor(numeros) {
    let mayor = numeros[0]    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]  
        }
    }
    return mayor;
}
function contarPares(numeros) {
    let contador = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {    
            contador++
        }
    }
    return contador
}

module.exports = { sumarArray, encontrarMayor, contarPares }