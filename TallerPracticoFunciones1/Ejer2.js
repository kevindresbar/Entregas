 const numeros = [100, 10000,200000,1, 50];
 function numeroMayor (numeros){ 

    let mayor = numeros[0]; // Empezamos asumiendo que el primero es el más grande

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]; // Actualizamos si encontramos uno más grande
        }
    }
    
    return mayor;
 }
  console.log(numeroMayor(numeros) )