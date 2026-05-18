let objeto= {a: 1, b:2, c:3, d:4}
list = Object.entries(objeto)
 function contarPropiedades(objeto){
    suma = 0
    for (let i = 0; i < objeto.length; i++) {
    suma ++
    }
    return suma
 }
 console.log(contarPropiedades(list))