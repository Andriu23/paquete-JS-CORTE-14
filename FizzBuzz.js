let arrayTresYCinco = [];
let arrayTres = [];
let arrayCinco = [];
let arrayNumero = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        arrayTresYCinco.push(i);
    } else if ( i % 3 === 0){
        arrayTres.push(i);
    } else if (i % 5 === 0){
        arrayCinco.push(i);
    } else {
        arrayNumero.push(i);
    }
};

console.log(`Divisor por 3 y 5; ${arrayTresYCinco}`);
console.log(`Divisor por 3; ${arrayTres}`);
console.log(`Divisor por 5; ${arrayCinco}`);
console.log(`Números no divisores (3 o 5); ${arrayNumero}`);








