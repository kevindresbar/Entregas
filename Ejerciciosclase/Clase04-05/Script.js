//Crear un algoritmo que capture los datos personales de 5 individuos, estos deberan ser: nombre, edad, genero. Una ves esten capturados en una lista, vamos a contar cuantos son hombres y cuantos son mujeres. Este ejercicio debe realizarse usando clases.
let personas = [];
class Person {
    nombre;
    edad;
    genero;
    constructor(nombre, edad, genero){
        this.nombre=nombre;
         this.edad = edad;
         this.genero =genero;
    }
}
for (let i = 1; i <= 2; i++) {
    const nombre = prompt(`Ingresa el nombre`);
    const edad = Number(prompt(`Ingresa la edad de ${nombre}`));
    const genero = prompt(`Ingresa el género de ${nombre}`);

const newPersona = new Person(nombre, edad, genero);
    personas.push(newPersona);
}
let hombres = 0;
let mujeres = 0;

for (let i = 0; i < personas.length; i++) {
    if (personas[i].genero === "masculino") {
        hombres++;
    } else if (personas[i].genero === "femenino") {
        mujeres++;
    }
}
console.log(personas);
console.log(hombres)
console.log(mujeres)