export default class Cl_Circo {
    constructor() {
        contAdolecentes = 0;
        contNiños = 0;
        acumVentas = 0;
        auxMayor = " ";
    }

    procesarEspectador(e){
        acumVentas += e.calcMontPago();

        if (e.edad <= 18) {
            contAdolecentes++;
        } else if (e.edad >= 19) {
            contNiños++;
        }

        if (contAdolecentes < contNiños) {
            auxMayor = "Niño"
        } else if (contAdolecentes > contNiños) {
            auxMayor = "Adolecentes"
        } else {
            auxMayor = "Ambos"
        }
    }
}