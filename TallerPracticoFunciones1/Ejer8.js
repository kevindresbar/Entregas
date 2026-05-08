const people =[
    { nombre: "Juan", notaFinal: 60},
    { nombre: "María", notaFinal:80 },
    { nombre: "Carlos", notaFinal:40 },
    { nombre: "Ana", notaFinal: 70 },
    { nombre: "Luis", notaFinal: 30 },
]
let nombre= prompt("Ingresa el nombre")
    let apellido = prompt("Ingresa el apellido")
    let nota=prompt("Ingresa el nota")
function agregarPropiedad (nombre, apellido, nota){
    people.push({
        nombre : nombre, apellido,
        notaFinal: nota,})
} 
agregarPropiedad (nombre, apellido, nota)

console.log( people)