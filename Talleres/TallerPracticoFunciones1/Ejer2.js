 const numeros = [100, 10000,200000,1, 50];
 function numeroMayor (numeros){ 
    let mayor = numeros[0]; 
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]; 
        }
    }
    
    return mayor;
 }
  console.log(numeroMayor(numeros) )