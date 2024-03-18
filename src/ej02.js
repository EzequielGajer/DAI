import {suma, resta, multiplicar, sumarTodo} from './modules/matematica.js';

let sumarNumeros = suma (10, 20);
console.log(sumarNumeros);

let restarNumeros = resta(70, 30);
console.log(restarNumeros);

let multiplicarNum = multiplicar(4, 6);
console.log(multiplicarNum)

let totalSumaArray = sumarTodo();
console.log(totalSumaArray);