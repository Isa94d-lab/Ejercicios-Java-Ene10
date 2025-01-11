/* Ejercicio 2 */

const numerosduplicados = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10];

const sinnumerosduplicados = [...new Set (numerosduplicados)];

console.log(sinnumerosduplicados);