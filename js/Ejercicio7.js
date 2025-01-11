function contarPalabrasUnicas(texto) {
    const palabras = texto.split(" ");

    const palabrasUnicas = new Set(palabras);

    return palabrasUnicas.size;
}

const texto = "Hola mundo mundo de JavaScript";

console.log(contarPalabrasUnicas(texto));