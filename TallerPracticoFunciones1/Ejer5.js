 const numeros = [100, 10000,200000,1, 60, 50];
 function  buscarElemento(array, busca){

    for (let i = 0; i < array.length; i++) {
       if (array[i] === busca){
        return true;
       }
    }
    return false
 }
 console.log(buscarElemento(numeros, 100000))