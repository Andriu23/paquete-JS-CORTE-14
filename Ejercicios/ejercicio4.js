/* Variable */
let texto = "  Javascript es Genial  ";

// Mostrar en consola
console.log('Original:', texto);
console.log('Sin espacios:', texto.trim()); // Método trim() quita los espacios del principio y final del texto
console.log('Mayúsculas:', texto.toUpperCase()); // Convierte el texto en Mayúscula
console.log('Minúsculas:', texto.toLowerCase()); // Convierte el texto en Manúscula
console.log('Longitud', texto.length); // Cuanta la longitud de la palabra , incluido los espacios
console.log('¿Incluye?', texto.includes('Genial')); // Método includes , encuentra letra o pabla en el texto