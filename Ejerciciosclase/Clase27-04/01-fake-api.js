const API = `https://fakeapi.net/products?limit=20`;

async function getProductos() {

    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(`El total de los precios es ${total(data)}`);
        console.log("los datos son", data);
stockxprice(data.data);
        famous(data.data);
    }
    catch (error) {
        console.error("Error al conectarse al fake API");
    }
}
function total(precio) {
    total = 0
    for (let i = 0; i < precio.length; i++) {
        total += precio[i].price;
    }
    return total;
}
function stockxprice(stock) {
    let total2 = 1;
    for (let i = 0; i < stock.length; i++) {

        const producto = stock[i].title;
        const total2 = stock[i].price * stock[i].stock;
        console.log(`${producto} el precio del producto por la cantidad de stock  ${total2}`);
    }

}
function famous(popu){
    for (let i = 0; i < popu.length; i++) {
        const enc = popu[i].rating.count;
        const cali = popu[i].rating.rate;
        const producto = popu[i].title;

        if (cali>=4.7 & enc >= 100){
            console.log(`${producto} es el producto popular con ${cali} de calificacion y ${enc} encuestas`)
        }
    }

}

getProductos();