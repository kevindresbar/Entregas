function factorial(n) {
    if (n === 0 || n === 1) return 1

    let resultado = 1
    for (let i = 2; i <= n; i++) {
        resultado *= i
    }
    return resultado
    
}
console.log(factorial(5))  
console.log(factorial(4))   
console.log(factorial(1))   
console.log(factorial(0))    