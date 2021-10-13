var Europa = ['Alemania', 'Andorra', 'España', 'Francia', 'Grecia'];
var Asia = ['Banglades', 'Corea del Norte', 'Corea del Sur', 'Japon', 'India'];
var Africa = ['Angola', 'Burundi', 'Chad', 'Egipto', 'Gambia'];
var America = ['Argentina', 'Brasil', 'Canada', 'Colombia', 'Costa Rica'];
var Oceania = ['Australia', 'Micronesia', 'Palaos', 'Tonga', 'Tuvalu'];


function mentiraZodiaco(fecha:Date){
    if((fecha.getDate() >= 21 && fecha.getMonth() == 2) || (fecha.getDate() <= 19 && fecha.getMonth() == 3)){
        return 'Aries';

    } else if((fecha.getDate() >= 20 && fecha.getMonth() == 3) || (fecha.getDate() <= 21 && fecha.getMonth() == 4)){
        return 'Tauro';

    } else if((fecha.getDate() >= 21 && fecha.getMonth() == 4) || (fecha.getDate() <= 20 && fecha.getMonth() == 5)){
        return 'Geminis';

    } else if((fecha.getDate() >= 21 && fecha.getMonth() == 5) || (fecha.getDate() <= 22 && fecha.getMonth() == 6)){
        return 'Cancer';

    } else if((fecha.getDate() >= 23 && fecha.getMonth() == 6) || (fecha.getDate() <= 22 && fecha.getMonth() == 7)){
        return 'Leo';

    } else if((fecha.getDate() >= 23 && fecha.getMonth() == 7) || (fecha.getDate() <= 22 && fecha.getMonth() == 8)){
        return 'Virgo';

    } else if((fecha.getDate() >= 23 && fecha.getMonth() == 8) || (fecha.getDate() <= 22 && fecha.getMonth() == 9)){
        return 'Libra';

    } else if((fecha.getDate() >= 23 && fecha.getMonth() == 9) || (fecha.getDate() <= 21 && fecha.getMonth() == 10)){
        return 'Escorpio';

    } else if((fecha.getDate() >= 22 && fecha.getMonth() == 10) || (fecha.getDate() <= 21 && fecha.getMonth() == 11)){
        return 'Sagitario';

    } else if((fecha.getDate() >= 22 && fecha.getMonth() == 11) || (fecha.getDate() <= 19 || fecha.getMonth() == 0)){
        return 'Capricornio';

    } else if((fecha.getDate() >= 20 && fecha.getMonth() == 0) || (fecha.getDate() <= 18 && fecha.getMonth() == 1)){
        return 'Acuario';

    } else if((fecha.getDate() >= 19 && fecha.getMonth() == 1) || (fecha.getDate() <= 20 && fecha.getMonth() == 2)){
        return 'Piscis';

    }
}


function paisCont(pais) {
    if (Europa.includes(pais)) {
        if (pais === 'España') {
            console.log('vives en ESPAÑA.');
        }
        else {
            console.log('vives en Europa.');
        }
    }
    else if (Asia.includes(pais)) {
        console.log('vives en Asia.');
    }
    else if (Africa.includes(pais)) {
        console.log('vives en Africa.');
    }
    else if (America.includes(pais)) {
        console.log('vives en America.');
    }
    else if (Oceania.includes(pais)) {
        console.log('vives en Oceania.');
    }
    else {
        console.log('Ese pais no existe y punto.');
    }
}

export function esPar(num:number){
    if(num%2===0){
        console.log('El numero  es par');
    } else {
        console.log('El numero es impar');
    }
}

function comprobar(array:string[]){
    return esPar(sumaCar(array));
}