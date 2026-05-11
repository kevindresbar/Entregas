let altura = prompt("Ingresa la altura del rectangulo ")
let base = prompt("Ingresa la base del rectangulo ")

function calcularRectangulo(ancho,alto){
return {
    area : alto * ancho,
perimetro: 2*(alto + ancho)}
}
let resultado = calcularRectangulo(base, altura);
console.log(resultado);
