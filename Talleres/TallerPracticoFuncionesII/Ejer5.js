function fusionarObjetos(objA, objB) {

    let clavesA = Object.keys(objA)

    for (let i = 0; i < clavesA.length; i++) {
        let clave = clavesA[i]
        resultado[clave] = objA[clave]
    }


    let clavesB = Object.keys(objB); 

    for (let i = 0; i < clavesB.length; i++) {
        let clave = clavesB[i]
        resultado[clave] = objB[clave]
    }

    return resultado;
}

console.log(fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }));