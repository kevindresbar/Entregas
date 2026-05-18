let numero = prompt("Que tabla desea?")

function tablaMultiplicar(n) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

tablaMultiplicar(numero);