/* Variables */
let precioProducto = 50000;
let porcentajeIVA = 19;

// Calcular precio del IVA
let valorIVA = (precioProducto * porcentajeIVA) / 100;
let precioTotal = precioProducto + valorIVA;

// Imprimir en consola
console.log(`Precio del producto: $${precioProducto}`);
console.log(`IVA (19%): $${valorIVA}`);
console.log(`Precio Total con IVA $${precioTotal}`);