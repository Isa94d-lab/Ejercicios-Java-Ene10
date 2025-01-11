/* Ejercicio 3 */

const intento1 = ([1, 2, 2, 3, 4, 5]);

function tieneduplicados(ABC) {
    const cheackduplicado = new Set(ABC);
    const info = cheackduplicado.size != ABC.length ? true : false;
    console.log(info)
    
};

tieneduplicados(intento1);