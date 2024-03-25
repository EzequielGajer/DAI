import { URL, URLSearchParams } from 'url';

function parsearUrl(url) {
    const parsedURL = new URL(url);
    const params = new URLSearchParams(parsedURL.search);
  
    return {
      host: parsedURL.origin,
      pathname: parsedURL.pathname,
      parametros: Object.fromEntries(params)
    };
}
  
  let miURL = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
  let miObjeto = parsearUrl(miURL);
  console.log(miObjeto);

    