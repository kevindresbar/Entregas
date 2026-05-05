const estudiante = [{ nombre: "Juan", notaFinal: [2.1, 5.0, 4.2, 3.0] },];
function promedioNotas(prom) {
    let suma = 0
for (let i = 0; i < prom.length; i++) {
    
    for (let j = 0; j < prom[i].notaFinal.length; j++) {
        let nota = prom[i].notaFinal[j]
        suma += nota
        
    }
    let prome = suma / prom[i].length

}
retor}
console.log(promedioNotas(estudiante))