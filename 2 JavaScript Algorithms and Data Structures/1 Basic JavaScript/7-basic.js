
function clasificador(valor) {
    var respuesta;
    switch(valor) {
        case 1: 
            respuesta = 'alpha';
            break;
        case 2:
            respuesta = 'beta';
            break;
        case 2:
            respuesta = 'delta';
    }

    return respuesta;
}
console.log(clasificador(1))


var producto = 'hamburgyesa';

switch (producto) {
    case 'pizza':
        console.log('pizza $10.55');
        break;
    case 'hamburguesa':
        console.log('hamburgesa $6.68');
        break;
    case 'helado':
        console.log('helado $2.8');
        break;
}


// Sentencias Switch: Opcion Predeterminada
function selecionarIdioma (valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = 'español';
            break;
        case 2:
            idioma = 'frances';
            break;
        case 3:
            idioma = 'italiano';
            break;
        default:
            idioma = 'ingles';
            break;
    }

    return idioma;
}

console.log(selecionarIdioma(2))


// Sentencias Switch: Multiples Casos
function clasificarVolumen (valor){
    var volumen;
    switch (valor) {
        case 1:
            volumen = 'bajo';
            break;
        case 2:
        case 3:
            volumen = 'intermedio';
            break;
        case 4:
        case 5:
        case 6:
            volumen = 'alto';
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(12))