let objeto1 = { a: 1 }
let objeto2 ={ b: 2 }
function combinarObjetos(objeto1, objeto2) {
nuevo = {...objeto1 , ...objeto2}
return nuevo
}
 console.log(combinarObjetos(objeto1, objeto2))