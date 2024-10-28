/* Ejercicio Nro. 04:

Realizar un programa en JavaScript que permita ingresar las notas de los trabajos finales de los alumnos de
la diplomatura en “Desarrollo Web Full Stack con JavaScript” para ello se establecen las siguientes condiciones.
- No está establecido la cantidad de trabajos finales que se evaluarán
- Este será el cuadro con el que se analizará y asignará la clasificación de los mismos.
o Si la nota >= 0 y <= 4 serán trabajos desaprobados
o Si la nota > 4 y <= 7 serán trabajos aprobados
o Si la nota > 7 y <10 serán trabajos muy buenos
o Si la nota = 10 serán trabajos excelentes
- Contemplar que el operador podría ingresar notas incorrectas, es decir podría poner una nota menor
a cero o mayor a 10 con lo que sería claramente un error. Contemplar la cantidad de veces que se
equivoca.
- Siempre preguntar si desea continuar cargando notas ¿?.

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt. */

let continuar = ""
let cantidadErrores = 0;

continuar = prompt("¿Comenzar a cargar las notas finales de los alumnos? (SI/NO)");

while(continuar === "SI"){
  let nota = parseFloat(prompt("Ingrese la nota del alumno"));

  if(nota >= 0 && nota <= 4){
    console.log("Trabajo desaprobado");
  }
  else{
    if(nota > 4 && nota <= 7){
      console.log("Trabajo aprobado");
    }
    else{
      if(nota > 7 && nota < 10){
        console.log("Trabajo muy bueno");
      }
      else{
        if(nota === 10){
          console.log("Trabajo excelente");
        }
        else{
          console.log("Error al ingresar la nota");
          cantidadErrores++;
        }
      }
    }
  }
  continuar = prompt("¿Continuar cargando notas? (SI/NO)")
}
console.log(`La cantidad de errores al ingreso de las notas fue de: ${cantidadErrores}`)



