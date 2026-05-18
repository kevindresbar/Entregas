 let numero =prompt("INgrese el numero para saber el factorial")
 function factorial(n) {
    if (n < 0) return "El factorial no existe para números negativos"
    if (n === 0 || n === 1) return 1
    resultado =1
    for (let i = 2; i <= n; i++) {
        resultado = i * resultado
    }
    return resultado
}
console.log(factorial(numero))