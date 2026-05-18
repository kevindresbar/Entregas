const numeros = [4,4,4,8,9,56];
function contarPares(array){
    let pares = 1
     for (let i = 1; i < array.length; i++) {
       if (array[i]%2 ===0){
        pares++
       }
     }
     return pares
}
console.log(contarPares(numeros))