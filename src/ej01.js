let textoEntrada01="Escuela";
let textoEntrada02="ORT"; 
let textoSalida; 

function concatInvert (textoEntrada01, textoEntrada02) {
    textoSalida = textoEntrada01 + textoEntrada02;

    textoSalida = textoSalida.split('');
    textoSalida = textoSalida.reverse();
    textoSalida = textoSalida.join('');
    return textoSalida;
}

concatInvert(textoEntrada01, textoEntrada02);

console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`); 
console.log(`Texto de Salida: "${textoSalida}"`);