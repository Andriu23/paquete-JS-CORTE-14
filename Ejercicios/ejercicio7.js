/* ARRAY */
let inventario = ["Laptop", "mouse", "teclado", "monitor", "cable HDMI"];

// Operaciones en consola
console.log('Inventario completo:', inventario);
console.log('Primer elemento:', inventario[0]);
console.log('Último elemento:', inventario[inventario.length-1]);

inventario.push("webcam")
console.log('Después de push("webcam"):', inventario);

let eliminado = inventario.pop();
console.log('Elemento eliminado:', eliminado);
console.log('Después de pop():', inventario);

inventario.unshift("audífonos");
console.log('Después de unshift("audífonos"):', inventario);

let elementoGuardado = inventario.shift();
console.log('Elemento eliminado:', elementoGuardado);
console.log('Después de shift():', inventario);
console.log('Total de elementos:', inventario.length);