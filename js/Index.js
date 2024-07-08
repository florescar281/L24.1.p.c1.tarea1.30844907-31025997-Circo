import Cl_Espectador from "./Cl_Espectador.js";
import Cl_Circo from "./Cl_Circo.js";

const salida = document.getElementById("salida");

let circo = Cl_Circo();
let espectador1 = Cl_Espectador("Carlos", 18, "M");
let espectador2 = Cl_Espectador("Maria", 20, "F");
let espectador3 = Cl_Espectador("Pedro", 15, "M");
let espectador4 = Cl_Espectador("Ana", 25, "F");

circo.procesarEspectadores(espectador1);
circo.procesarEspectadores(espectador2);
circo.procesarEspectadores(espectador3);
circo.procesarEspectadores(espectador4);

salida.innerHTML = `
    El espectador ${espectador1._nombre} pago $${espectador1.calcMontPago()}<br>
    El espectador ${espectador2._nombre} pago $${espectador2.calcMontPago()}<br>
    El espectador ${espectador3._nombre} pago $${espectador3.calcMontPago()}<br>
    El espectador ${espectador4._nombre} pago $${espectador4.calcMontPago()}<br>
`