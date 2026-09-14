/* Variable */
let primerNombre = "Carlos";
let primerApellido = "Gómez";
let anioNacimiento = 1998;

// Proceso
primerNombre = primerNombre[0].toLowerCase();
primerApellido = primerApellido.toLowerCase();
anioNacimiento = String(anioNacimiento).slice(-2);

// Mostrar texto en consola
console.log(`Nombre de usuario generado: ${primerNombre + primerApellido + anioNacimiento}`);