const people = [
    { nombre: "Juan", notaFinal: 60 },
    { nombre: "María", notaFinal: 80 },
    { nombre: "Carlos", notaFinal: 40 },
    { nombre: "Ana", notaFinal: 90 },
    { nombre: "Luis", notaFinal: 30 },
]
 function mejorEstudiante(listaEstudiantes) {
    let mejor = listaEstudiantes[0]; 
    for (let i = 1; i < listaEstudiantes.length; i++) {
        if (listaEstudiantes[i].notaFinal > mejor.notaFinal) {
            mejor = listaEstudiantes[i]
        }
    }
    return mejor.nombre
}

console.log(mejorEstudiante(people))
