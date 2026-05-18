let contra = prompt("Ingrese la contraseña ")

function validarContraseña(contraseña){

    for (let i = 0; i < contraseña.length; i++) {


      if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }
            if (contraseña === contraseña.toLowerCase()) {
        alert("La contraseña debe tener al menos una mayúscula.");
        return false;
    }


 if (contraseña === contraseña.toUpperCase()) {
        alert("La contraseña debe tener al menos una minúscula.");
        return false;
    }

alert("¡Contraseña válida!");
    return true;
}
}
validarContraseña(contra)