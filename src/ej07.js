import { getCurrency } from 'currency-map-country';

let monedaDelPais, codigoPais;

codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais.name}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: null`);

function obtenerMoneda(codigoPais) {
  let monedaDelPais;
  if (codigoPais === 'AR') {
    monedaDelPais = getCurrency('ARS');
    console.log('monedaDelPais', monedaDelPais);
  }
  if (codigoPais === 'UZA') {
    monedaDelPais = getCurrency('');
  }
  return monedaDelPais;
}
