import fs from 'fs'; 

const ARCHIVO_ENTRADA = "./archivo-entrada.txt"; 
const ARCHIVO_SALIDA = "./archivo-salida.txt"; 
console.clear(); 

function copiar(ARCHIVO_ENTRADA,ARCHIVO_SALIDA) {
    fs.readFile('./archivo-entrada.txt', { encoding: 'utf8'}, (err, data)=> {
        if (err) throw err;
        fs.writeFile('./archivo-salida.txt', data, { encoding: 'utf8'}, (err)=> {
            if (err) throw err;
      });
    }        
    )

}

copiar(ARCHIVO_ENTRADA,ARCHIVO_SALIDA);


