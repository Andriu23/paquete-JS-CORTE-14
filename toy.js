// Importar el módulo readline para manejar la entrada del usuario desde la línea de comandos
const readline = require('readline');

// Crear una interfaz para leer la entrada y escribir la salida
const rl = readline.createInterface({
  input: process.stdin,  // Leer entrada desde la entrada estándar (teclado)
  output: process.stdout // Escribir salida en la salida estándar (consola)
});
