import Alumno from './models/alumno.js';

let alumno1 = new Alumno("Enrique" ,"47453545", 17); 
let alumno2 = new Alumno("Angel", "47684762", 17);
let alumno3 = new Alumno(); 

alumno3.username = "Jorge";
alumno3.dni = "47251243";
alumno3.edad = 17;

console.log(alumno1);
console.log(alumno2);
console.log(alumno3.toString());

