let num = Number(prompt("ingresa el primer numero"))
let num2 = Number(prompt("ingresa el segundo numero"))
let op = Number(prompt("Seleciona la operacion 1 = +, 2 = -, 3 = *, 4 = / "))


if ( op == 1){
    total = num + num2
    console.log("el resultado es", total )
} else if (op == 2){
     total = num + num2
    console.log("el resultado es", total )
}
else if (op == 3){
     total = num * num2
    console.log("el resultado es", total )
}
else if (op == 4){
     total = num / num2
    console.log("el resultado es", total )
}
else if (op >= 5){
   op =prompt("operaacion no valida ingrese el valor nuevamenrte.Seleciona la operacion 1 = +, 2 = -, 3 = *, 4 = / ")
}