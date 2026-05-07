const people =[
    { nombre: "Juan", notaFinal: 60},
    { nombre: "María", notaFinal:80 },
    { nombre: "Carlos", notaFinal:40 },
    { nombre: "Ana", notaFinal: 70 },
    { nombre: "Luis", notaFinal: 30 },
]
function aprobados(listaEstudiantes){
    for (let i = 0; i < people.length; i++) {
        let nombre = people[i].nombre
        let nota = people[i].notaFinal
        if(people[i].notaFinal >= 60){
console.log(`${nombre} saco ${nota}` )
        }
    }
}
console.log(aprobados(people))