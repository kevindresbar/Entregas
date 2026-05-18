let azar = Math.floor((Math.random()*10)+1)
intentos = 0
maxintentos = 1

while (intentos < maxintentos){
       intento = prompt("Adivina el número entre 1 y 10: ")
       intentos += 1

     if (intento == azar){
           console.log("Correcto adivinaste el número ")
         break}
    
         else{
          console.log("Incorrecto")
         
         }
         if ( intento != azar){
   console.log("perdiste el número era ", azar)}

     }   