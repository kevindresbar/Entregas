let carrito = [
    { producto: "camiseta", precio: 30000, cantidad: 2, descuento: 0.10 },
    { producto: "pantalon", precio: 80000, cantidad: 1, descuento: 0.5 },
    { producto: "zapato", precio: 120000, cantidad: 1, descuento: 0 },
    { producto: "medias", precio: 8000, cantidad: 3, descuento: 0.15 }
]
function totalCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        let item = carrito[i]

        let subtotal = item.precio * item.cantidad
        let descuento = subtotal * item.descuento
        let valorFinal = subtotal - descuento

        console.log(`el producto es ${item.producto}, el es  Subtotal:  ${subtotal} y el descuento:${descuento}, el valor total es ${valorFinal}`)
    }
}
console.log(totalCarrito(carrito))