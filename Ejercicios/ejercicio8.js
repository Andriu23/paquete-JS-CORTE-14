/* OBJECT */
let perfil = {
    nombre: "María",
    apellido: "López",
    edad: 28,
    profesion: "Diseñadora",
    ciudad: "Medellín"
};

console.log('Perfil Completo:', perfil);
console.log('Nombre:', perfil.nombre);
console.log('Apellido:', perfil["apellido"]);

perfil.edad = 29;
console.log('Edad actualizada:', perfil.edad);

perfil.hobby = "fotografía";
console.log('Después de agregar hobby:', perfil);
delete perfil.ciudad;
console.log('Después de eliminar ciudad:', perfil);