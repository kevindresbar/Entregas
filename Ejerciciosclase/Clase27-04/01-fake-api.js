const API = `https://fakeapi.net/products`;

async function getProductos() {

    try {
        const response = await fetch(API);
        const data = await response.json();
       console.log(`El total de los precios es ${total(data)}`);
       console.log("los datos son", data);
       console.log (`${stockxprice(data)}`);

    }
    catch (error) {
        console.error("Error al conectarse al fake API");
    }
}
function total(precio) {
     total = 0
    for (let i = 0; i <precio.data.length; i++) {
        total += precio.data[i].price;
    }
    return total;
}
function stockxprice (stock){
    let total2 =1;
    for (let i = 0; i < stock.data.length; i++) {

        const producto = stock.data[i].title;
        const total2 = stock.data[i].price * stock.data[i].stock;

        console.log(`${producto} el precio del producto por la cantidad de stock  ${total2}`);
        
    }

}

getProductos();