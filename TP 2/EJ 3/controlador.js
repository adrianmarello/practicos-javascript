/*
Ejercicio Nro. 03:

Una empresa de Peajes del SUR S.A. desea realizar una aplicación que permita cobrar y otorgar los
comprobantes a los clientes que circulan por las autopistas concesionadas por la empresa, para ello se necesita
realizar un programa que el cajero del puesto pueda realizar el cobro y levantado de la barrera.
Los precios establecidos son los siguientes
• CAMION = 22.000,00 PESOS
• CAMIONETA = 12.000,00 PESOS
• AUTOMOVIL = 4.000,00 PESOS
• MOTOS = 1.500,00 PESOS
La aplicación debe permitirle al cajero registrar todas las operaciones y al finalizar su jornada laboral realizar el
cierre donde le deberá mostrar la siguiente información.
• Cantidad de AUTOS
• Total Cobrado de AUTOS
• Cantidad de CAMIONETAS
• Total de CAMIONETAS
• Cantidad de AUTOMOVILES
• Total de Automóviles
• Cantidad de MOTOS
• Total de MOTOS
• Total GENERAL cobrado.
Compare al final si pasaron más camionetas que autos o fue al revés ¿?. O quizás hayan pasado la misma
cantidad. Compare estas cantidades únicamente entre autos y camionetas.
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt.
*/

let fnCantidadVehiculos = (vehiculo) =>{
  switch(vehiculo){
    case 1:{
        cantidadCamion++;
        totalCamion = totalCamion + precioCamion;
        break;
      }
       
    case 2:{
        cantidadCamioneta++;
        totalCamioneta = totalCamioneta + precioCamioneta;
        break;
      }
        
    case 3:{
        cantidadAuto++;
        totalAuto = totalAuto + precioAutomovil;
        break;
      }
     
    case 4:{
        cantidadMoto++;
        totalMoto = totalMoto + precioMoto;
        break;
      }

    default:{
        cantidadErrores++;
        break;
      }
      
  }

}
const precioCamion = 22000;
const precioCamioneta = 12000;
const precioAutomovil = 4000;
const precioMoto = 1500;

let cantidadErrores = 0;
let cantidadCamion = 0;
let totalCamion = 0;
let cantidadCamioneta = 0;
let totalCamioneta = 0;
let cantidadAuto = 0;
let totalAuto = 0;
let cantidadMoto = 0;
let totalMoto = 0;
let continuar = "";
let totalCobrado = 0;

continuar = prompt("Comenzar jornada (SI/NO)");

while(continuar === "SI"){

  let tipoVehiculo = Number(prompt("Ingrese el tipo de vehiculo a cobrar (1-CAMION 2-CAMIONETA 3-AUTO 4-MOTO)"));
  console.log(`tipo de vehiculo ingresado: ${tipoVehiculo}`);

  fnCantidadVehiculos(tipoVehiculo);
  
  totalCobrado = totalCamion + totalCamioneta + totalAuto + totalMoto;

  continuar = prompt("¿Continuar cobrando? (SI/NO)")
}

console.log("Caja cerrada");
console.log(`La cantidad de camiones es de: ${cantidadCamion}`)
console.log(`El total cobrado de camiones es: ${totalCamion}`);
console.log(`La cantidad de camionetas es de: ${cantidadCamioneta}`)
console.log(`El total cobrado de camionetas es: ${totalCamioneta}`);
console.log(`La cantidad de autos es de: ${cantidadAuto}`)
console.log(`El total cobrado de autos es: ${totalAuto}`);
console.log(`La cantidad de motos es de: ${cantidadMoto}`)
console.log(`El total cobrado de motos es: ${totalMoto}`);
console.log(`La cantidad de errores es de: ${cantidadErrores}`);
console.log(`El total general cobrado de la jornada es de: ${totalCobrado}`);

if(cantidadCamioneta > cantidadAuto){
  console.log(`En la jornada pasaron mas camionetas(${cantidadCamioneta}) que autos(${cantidadAuto})`)
}
else{
  if(cantidadAuto > cantidadCamioneta){
    console.log(`En la jornada pasaron mas autos(${cantidadAuto}) que camionetas(${cantidadCamioneta})`)
  }
  else{
    console.log(`En la jornada pasaron la misma cantidad de camionetas(${cantidadCamioneta}) que de autos(${cantidadAuto})`)
  }
}


