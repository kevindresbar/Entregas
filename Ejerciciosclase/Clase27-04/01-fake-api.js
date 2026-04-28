const API = `https://fakeapi.net/products`;

async function getProductos (){
const response = await fetch( API );
const data = await response.json();


console.log(data);}
getProductos ();