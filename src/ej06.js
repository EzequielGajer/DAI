import { URL, URLSearchParams } from 'url';

function parsearUrl(url) {
    try {
        const parsedURL = new URL(url);
        const params = new URLSearchParams(parsedURL.search);
  
        return {
            host: parsedURL.origin,
            pathname: parsedURL.pathname,
            parametros: Object.fromEntries(params)
        };
    } catch (error) {
        console.error('Error: Invalid URL');
        console.error(error);
        return {
            host: null,
            pathname: null,
            parametros: {}
        };
    }
}

let miURL = 'ANASHE1234566.com.ar';
let miObjeto = parsearUrl(miURL);
console.log(miObjeto);
