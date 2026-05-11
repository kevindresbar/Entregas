numero = [1, 2, 2, 3,3,3,4,5,4,5]
function eliminarDuplicados(array) {
  let nw= [];


   for (let i = 0; i < array.length; i++) {
    if (array[i]=== i) {
      nw.push(array[i]);
    }
  }

  return nw;

} 
console.log(eliminarDuplicados(numero)); 
