function extraerDominio(email) {
    let posicion = email.indexOf("@");  
    return email.slice(posicion + 1);  
}

console.log(extraerDominio("ana@gmail.com"));     