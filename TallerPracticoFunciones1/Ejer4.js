 const numeros = [100, 10000,200000,1, 60, 50];
 function  invertirArray(array){
    inver = []
    for (let i = 0; i < array.length; i++) {
        inver.unshift(numeros[i])
    }
       
return inver
 }
 console.log(invertirArray(numeros))