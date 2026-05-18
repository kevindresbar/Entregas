let numeros = [12, 45, 78,200, 33, 91, 56, 21, 88]

function ordenarArray(array) {
for (let i = 0; i < array.length; i++) {
     for (let j = 0; j < array.length -1; j++){
        
   if (array[j] > array[j + 1]) {
    let ascendente = array[j];
                array[j] = array[j + 1];
                array[j + 1] = ascendente;
     } 
}
}
return array;}
console.log(ordenarArray(numeros));