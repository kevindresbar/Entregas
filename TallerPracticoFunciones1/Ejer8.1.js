
const usuario = {nombre: "Luis"};

function agregarPropiedad(objeto, clave, valor) {
  objeto[clave] = valor;
  return objeto;
}

//ejecutamos la función pasando el objeto 'usuario'
const objetoActualizado = agregarPropiedad(usuario, "edad", 25);


console.log(objetoActualizado); 
