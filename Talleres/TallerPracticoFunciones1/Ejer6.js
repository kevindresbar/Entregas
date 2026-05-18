const estudiante = [ {nombre: "Juan", notas:[2.1, 5, 5.0, 4.2, 3.0]}];
function promedioNotas(prom) {
    let suma = 0
for (let i = 0; i < prom.length; i++) {
    
    for (let j = 0; j < prom[i].notas.length; j++) {
        let nota = prom[i].notas[j]
        suma += nota
        
    }
return suma / prom[i].notas.length;
}

}
console.log(promedioNotas(estudiante))